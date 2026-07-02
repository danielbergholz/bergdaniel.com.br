"use client"

import { useActionState, useId } from "react"
import {
  initialNewsletterState,
  subscribeToNewsletterAction
} from "@/app/actions"
import { Diamond } from "@/components/icons"

type Props = {
  title?: string
  description?: string
}

export function NewsletterSignup({
  title = "Get notified",
  description = "Join the list to hear about new YouTube videos, upcoming courses, and everything I'm building. No spam, unsubscribe anytime."
}: Props) {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletterAction,
    initialNewsletterState
  )
  const emailId = useId()

  return (
    <div className="rounded-lg border border-violet-300/60 dark:border-violet-800/60 p-5 md:p-6">
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5 text-violet-600 dark:text-violet-400">
          <Diamond width={28} height={28} fill="currentColor" />
        </div>
        <div className="flex flex-col gap-1.5">
          <span className="text-sm md:text-base font-bold">{title}</span>
          <span className="text-xs md:text-sm opacity-50 leading-relaxed">
            {description}
          </span>
        </div>
      </div>

      {state.status === "success" ? (
        <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
          {state.message}
        </p>
      ) : (
        <form action={formAction} className="mt-4 flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-2">
            <label htmlFor={emailId} className="sr-only">
              Email address
            </label>
            <input
              id={emailId}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              disabled={isPending}
              aria-invalid={state.status === "error"}
              className="flex-1 rounded-sm border border-current/20 dark:border-current/30 bg-transparent px-3 py-2 text-sm outline-none focus:border-violet-500 dark:focus:border-violet-500 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isPending}
              className="whitespace-nowrap rounded-sm bg-foreground px-4 py-2 text-xs uppercase tracking-widest text-background hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {isPending ? "Joining…" : "Subscribe"}
            </button>
          </div>
          {state.status === "error" && (
            <p className="text-xs text-red-600 dark:text-red-400">
              {state.message}
            </p>
          )}
        </form>
      )}
    </div>
  )
}
