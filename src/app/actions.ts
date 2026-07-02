"use server"

import { subscribeToNewsletter } from "@/data-access/loops"
import { isValidEmail } from "@/lib/utils"

export type NewsletterState = {
  status: "idle" | "success" | "error"
  message: string
}

export async function subscribeToNewsletterAction(
  _prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "")

  if (!isValidEmail(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address."
    }
  }

  const result = await subscribeToNewsletter(email.trim())

  if (result.ok) {
    return {
      status: "success",
      message: "You're on the list. Watch your inbox for updates."
    }
  }

  if (result.reason === "rate_limited") {
    return {
      status: "error",
      message: "Too many requests right now. Please try again in a moment."
    }
  }

  return {
    status: "error",
    message: "Something went wrong. Please try again later."
  }
}
