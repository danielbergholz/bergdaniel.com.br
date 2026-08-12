// Pure helpers for detecting YouTube Studio collaborators in an InnerTube
// watch-next payload. The public Data API does not expose collaborators; Studio
// collab invites show up in showDialogCommand → listItemViewModel rows.

const CHANNEL_ID_RE = /^UC[\w-]{22}$/

function asRecord(value: unknown): Record<string, unknown> | null {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return null
  }
  return value as Record<string, unknown>
}

function collectChannelIdsDeep(node: unknown, ids: Set<string>): void {
  if (node === null || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) collectChannelIdsDeep(item, ids)
    return
  }

  const obj = node as Record<string, unknown>
  const channelId = obj.channelId
  if (typeof channelId === "string" && CHANNEL_ID_RE.test(channelId)) {
    ids.add(channelId)
  }
  const browseId = obj.browseId
  if (typeof browseId === "string" && CHANNEL_ID_RE.test(browseId)) {
    ids.add(browseId)
  }

  for (const value of Object.values(obj)) collectChannelIdsDeep(value, ids)
}

function collectListItemChannelIds(node: unknown, ids: Set<string>): void {
  if (node === null || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const item of node) collectListItemChannelIds(item, ids)
    return
  }

  const obj = node as Record<string, unknown>
  // Each collab-dialog row is a listItemViewModel (owner + accepted collaborators).
  if (obj.listItemViewModel) {
    collectChannelIdsDeep(obj.listItemViewModel, ids)
  }

  for (const value of Object.values(obj)) collectListItemChannelIds(value, ids)
}

/** Channel IDs listed in Studio-collab dialogs on a watch-next payload. */
export function extractCollaboratorChannelIds(payload: unknown): string[] {
  const ids = new Set<string>()

  const visit = (node: unknown): void => {
    if (node === null || typeof node !== "object") return
    if (Array.isArray(node)) {
      for (const item of node) visit(item)
      return
    }

    const obj = asRecord(node)
    if (!obj) return

    if (obj.showDialogCommand) {
      collectListItemChannelIds(obj.showDialogCommand, ids)
    }

    for (const value of Object.values(obj)) visit(value)
  }

  visit(payload)
  return [...ids]
}

/** True when `channelId` appears as an accepted Studio collaborator. */
export function isAcceptedCollaborator(
  payload: unknown,
  channelId: string
): boolean {
  if (!channelId) return false
  return extractCollaboratorChannelIds(payload).includes(channelId)
}
