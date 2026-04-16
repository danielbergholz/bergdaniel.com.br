import type { Video as VideoType } from "@/lib/types"
import Image from "next/image"

type Props = {
  video: VideoType
  locale: "en" | "pt"
  featured?: boolean
  newCourse?: boolean
}

export function Video({
  video,
  locale,
  featured = false,
  newCourse = false
}: Props) {
  const { title, description, thumbnails } = video.snippet
  const { itemCount } = video.contentDetails
  const thumbnail = featured ? thumbnails.maxres : thumbnails.medium

  return featured ? (
    <a
      rel="noreferrer noopener"
      target="_blank"
      href={`https://www.youtube.com/playlist?list=${video.id}`}
      title={title}
      className="group border border-current/10 dark:border-current/20 rounded-lg p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 hover:border-current/30 dark:hover:border-current/40 transition-all duration-300 max-w-[306px] sm:max-w-full"
    >
      <div className="flex flex-col justify-between h-full order-2 md:order-1 gap-2 sm:gap-4">
        <div className="flex items-center justify-between md:justify-normal md:gap-3">
          <h2 className="font-bold text-lg md:text-xl group-hover:opacity-80 transition-opacity">
            {title}
          </h2>
          <span className="text-xs uppercase tracking-widest opacity-40 border border-current/20 dark:border-current/30 rounded-sm px-2 py-0.5 shrink-0">
            {locale === "pt" ? "PT-BR" : "EN"}
          </span>
        </div>

        <p className="opacity-50 text-sm md:text-base leading-relaxed">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <p>
            <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 rounded-sm px-2 py-0.5 mr-2">
              Free
            </span>
            {newCourse && (
              <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800 rounded-sm px-2 py-0.5">
                New
              </span>
            )}
          </p>
          <p className="opacity-40 text-xs md:text-sm tracking-wide">
            {itemCount} videos
          </p>
        </div>
      </div>
      <Image
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width - 900}
        height={thumbnail.height - 900}
        className="rounded-lg order-1 md:order-2"
      />
    </a>
  ) : (
    <a
      rel="noreferrer noopener"
      target="_blank"
      href={`https://www.youtube.com/playlist?list=${video.id}`}
      title={title}
      className="group border border-current/10 dark:border-current/20 rounded-lg p-4 flex flex-col items-center gap-4 hover:border-current/30 dark:hover:border-current/40 transition-all duration-300"
    >
      <Image
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width - 50}
        height={thumbnail.height - 50}
        className="rounded-lg"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg w-[216px] group-hover:opacity-80 transition-opacity">
            {title}
          </h2>
          <span className="text-xs uppercase tracking-widest opacity-40 border border-current/20 dark:border-current/30 rounded-sm px-2 py-0.5 shrink-0">
            {locale === "pt" ? "PT-BR" : "EN"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 rounded-sm px-2 py-0.5">
            Free
          </span>
          <p className="opacity-40 text-xs tracking-wide">
            {itemCount} {itemCount === 1 ? "video" : "videos"}
          </p>
        </div>
      </div>
    </a>
  )
}
