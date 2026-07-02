import { APIError, LoopsClient, RateLimitExceededError } from "loops"

const API_KEY = process.env.LOOPS_API_KEY
// Optional: if set, new subscribers are added to this Loops mailing list.
// Leave unset to add them to the default audience only.
const NEWSLETTER_LIST_ID = process.env.LOOPS_NEWSLETTER_LIST_ID

// Reuse a single client across requests instead of constructing one per call.
let client: LoopsClient | null = null

function getClient(): LoopsClient {
  if (!API_KEY) {
    throw new Error("LOOPS_API_KEY is not set")
  }
  if (!client) {
    client = new LoopsClient(API_KEY)
  }
  return client
}

export type SubscribeResult =
  | { ok: true }
  | { ok: false; reason: "rate_limited" | "error" }

// Adds (or updates) a contact in Loops and marks them subscribed. Uses
// updateContact, which upserts, so repeat signups from the same email don't
// error out the way createContact would (409 on an existing contact).
export async function subscribeToNewsletter(
  email: string
): Promise<SubscribeResult> {
  try {
    const loops = getClient()

    await loops.updateContact({
      email,
      properties: {
        subscribed: true,
        // Built-in property used to segment where a contact came from.
        userGroup: "Newsletter"
      },
      ...(NEWSLETTER_LIST_ID
        ? { mailingLists: { [NEWSLETTER_LIST_ID]: true } }
        : {})
    })

    return { ok: true }
  } catch (error) {
    if (error instanceof RateLimitExceededError) {
      return { ok: false, reason: "rate_limited" }
    }

    // Surface the Loops status/message in server logs for debugging, but never
    // leak provider details to the client.
    if (error instanceof APIError) {
      console.error(
        `Loops API error (${error.statusCode}):`,
        error.json ?? error.rawBody
      )
    } else {
      console.error("Loops subscribe failed:", error)
    }

    return { ok: false, reason: "error" }
  }
}
