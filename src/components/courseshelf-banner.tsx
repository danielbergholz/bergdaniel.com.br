import Image from "next/image"

export function CourseShelfBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-[#8257E5] via-[#01C59A] to-[#8257E5] bg-[length:200%_100%] animate-gradient p-[2px] rounded-lg mt-6 md:mt-8">
      <div className="bg-white dark:bg-black rounded-lg">
        <a
          href="https://thecourseshelf.com?utm_source=bergdaniel&utm_medium=banner&utm_campaign=homepage"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 md:gap-4 p-4 md:p-5 hover:opacity-80 transition-opacity"
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
            <span className="text-sm md:text-base font-bold bg-gradient-to-r from-[#8257E5] to-[#01C59A] bg-clip-text text-transparent">
              CourseShelf is live!
            </span>
            <span className="text-xs md:text-sm opacity-70">
              Your personal learning library, curated by real learners
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}
