import { Diamond } from "@/components/icons"

export function MembershipCTA() {
  return (
    <a
      href="https://www.youtube.com/@DanielBergholz/join"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 rounded-lg border border-violet-300/60 dark:border-violet-800/60 p-5 md:p-6 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-300"
    >
      <div className="shrink-0 mt-0.5 text-violet-600 dark:text-violet-400">
        <Diamond width={28} height={28} fill="currentColor" />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm md:text-base font-bold group-hover:opacity-80 transition-opacity">
            Join for early access
          </span>
          <span className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 border border-violet-300 dark:border-violet-800 rounded-sm px-2 py-0.5">
            Members
          </span>
        </div>
        <span className="text-xs md:text-sm opacity-50 leading-relaxed">
          Become a channel member to watch new videos before anyone else, get
          member-only perks, and support the channel directly.
        </span>
      </div>
    </a>
  )
}
