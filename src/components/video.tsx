import Image from "next/image"
import { Video as VideoType } from "@/lib/types"

type Props = {
  video: VideoType
  locale: "en" | "pt"
}

export function Video({ video, locale }: Props) {
  const { title, thumbnails } = video.snippet
  const { itemCount } = video.contentDetails
  const thumbnail = thumbnails.medium

  return (
    <a
      rel="noopener"
      target="_blank"
      href={`https://www.youtube.com/playlist?list=${video.id}`}
      title={title}
      className="border-2 rounded-md border-gray-500 p-4 flex flex-col items-center gap-4 hover:opacity-70 transition-opacity justify-center w-max"
    >
      <Image
        src={thumbnail.url}
        alt={title}
        width={thumbnail.width - 50}
        height={thumbnail.height - 50}
        className="rounded-md"
      />
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center gap-1">
          <h1 className="font-bold text-xl">{title}</h1>
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
          <p className="opacity-60 text-sm">{itemCount} videos</p>
        </div>
      </div>
    </a>
  )
}
