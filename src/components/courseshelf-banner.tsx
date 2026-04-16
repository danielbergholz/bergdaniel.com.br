import Image from "next/image"

export function CourseShelfBanner() {
  return (
    <a
      href="https://thecourseshelf.com?utm_source=bergdaniel&utm_medium=banner&utm_campaign=homepage"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 mt-4 md:mt-6 border border-current/10 dark:border-current/20 rounded-lg hover:border-current/30 dark:hover:border-current/40 transition-all duration-300"
    >
      <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
        <Image
          src="/courseshelf-logo.svg"
          alt="CourseShelf Logo"
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm md:text-base font-bold group-hover:opacity-80 transition-opacity">
          CourseShelf is live!
        </span>
        <span className="text-xs md:text-sm opacity-40">
          Your personal learning library, curated by real learners
        </span>
      </div>
    </a>
  )
}
