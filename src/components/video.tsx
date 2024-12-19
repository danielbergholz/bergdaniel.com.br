import Image from "next/image"
import { Video as VideoType } from "@/lib/types"

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
      rel="noopener"
      target="_blank"
      href={`https://www.youtube.com/playlist?list=${video.id}`}
      title={title}
      className="border-2 rounded-md border-gray-500 p-4 flex flex-col md:flex-row items-center gap-4 hover:opacity-70 transition-opacity justify-center max-w-[306px] sm:max-w-full"
    >
      <div className="flex flex-col justify-between h-full order-2 md:order-1 gap-2 sm:gap-4">
        <div className="flex items-center justify-between md:justify-normal md:gap-3">
          <h1 className="font-bold text-xl">{title}</h1>
          <p
            className="text-3xl"
            aria-label={locale === "pt" ? "Brazilian portuguese" : "English"}
          >
            {locale === "pt" ? "🇧🇷" : "🇺🇸"}
          </p>
        </div>

        <p>{description}</p>

        <div className="flex justify-between items-center">
          <p>
            <span className="text-green-light dark:text-green-dark border-green-light dark:border-green-dark border rounded px-2 mr-2 text-sm sm:text-base">
              Free
            </span>
            {newCourse && (
              <span className="text-yellow-500 border-yellow-500 border rounded px-2 text-sm sm:text-base">
                New
              </span>
            )}
          </p>
          <p className="opacity-60 text-sm sm:text-base">{itemCount} videos</p>
        </div>
      </div>
      <Image
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width - 900}
        height={thumbnail.height - 900}
        className="rounded-md order-1 md:order-2"
      />
    </a>
  ) : (
    <a
      rel="noopener"
      target="_blank"
      href={`https://www.youtube.com/playlist?list=${video.id}`}
      title={title}
      className="border-2 rounded-md border-gray-500 p-4 flex flex-col items-center gap-4 hover:opacity-70 transition-opacity justify-center"
    >
      <Image
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width - 50}
        height={thumbnail.height - 50}
        className="rounded-md"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl w-[216px]">{title}</h1>
          <p
            className="text-3xl"
            aria-label={locale === "pt" ? "Brazilian portuguese" : "English"}
          >
            {locale === "pt" ? "🇧🇷" : "🇺🇸"}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-green-light dark:text-green-dark border-green-light dark:border-green-dark border rounded px-2 text-sm">
            Free
          </p>
          <p className="opacity-60 text-sm">{itemCount} {itemCount === 1 ? "video" : "videos"}</p>
        </div>
      </div>
    </a>
  )
}
