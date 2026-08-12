import assert from "node:assert/strict"
import { test } from "node:test"
import {
  extractCollaboratorChannelIds,
  isAcceptedCollaborator,
  isOnOrAfterCollabStart
} from "./youtube-collabs.ts"

const MINE = "UCnmbV9eyMwIl50Ji1ObFxqg"
const HOST = "UCN75P76wkH3V_CDWCKpM-pQ"
const OTHER = "UCxxxxxxxxxxxxxxxxxxxxxx"

// Minimal InnerTube-shaped fixture mirroring Studio collab dialog rows.
function watchNextWithCollaborators(channelIds: string[]) {
  return {
    contents: {
      twoColumnWatchNextResults: {
        results: {
          results: {
            contents: [
              {
                videoSecondaryInfoRenderer: {
                  owner: {
                    videoOwnerRenderer: {
                      navigationEndpoint: {
                        showDialogCommand: {
                          panelLoadingStrategy: {
                            inlineContent: {
                              dialogViewModel: {
                                customContent: {
                                  listViewModel: {
                                    listItems: channelIds.map((channelId) => ({
                                      listItemViewModel: {
                                        trailingButtons: {
                                          buttons: [
                                            {
                                              subscribeButtonViewModel: {
                                                channelId
                                              }
                                            }
                                          ]
                                        },
                                        leadingAccessory: {
                                          avatarViewModel: {
                                            endpoint: {
                                              innertubeCommand: {
                                                browseEndpoint: {
                                                  browseId: channelId
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }))
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  }
}

test("extractCollaboratorChannelIds reads Studio collab dialog rows", () => {
  const payload = watchNextWithCollaborators([HOST, MINE])
  const ids = extractCollaboratorChannelIds(payload).sort()
  assert.deepEqual(ids, [HOST, MINE].sort())
})

test("isAcceptedCollaborator is true only for listed channels", () => {
  const payload = watchNextWithCollaborators([HOST, MINE])
  assert.equal(isAcceptedCollaborator(payload, MINE), true)
  assert.equal(isAcceptedCollaborator(payload, OTHER), false)
  assert.equal(isAcceptedCollaborator(payload, ""), false)
})

test("ignores channel ids outside collab dialog list items", () => {
  const payload = {
    contents: {
      related: {
        channelId: MINE,
        browseId: MINE
      }
    }
  }
  assert.deepEqual(extractCollaboratorChannelIds(payload), [])
  assert.equal(isAcceptedCollaborator(payload, MINE), false)
})

test("isOnOrAfterCollabStart is inclusive of 2026-08-03", () => {
  assert.equal(isOnOrAfterCollabStart("2026-08-02T23:59:59Z"), false)
  assert.equal(isOnOrAfterCollabStart("2026-08-03T00:00:00Z"), true)
  assert.equal(isOnOrAfterCollabStart("2026-08-04T12:00:00Z"), true)
  assert.equal(isOnOrAfterCollabStart("not-a-date"), false)
})
