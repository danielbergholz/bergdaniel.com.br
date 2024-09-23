import Image from "next/image"
import { Video as VideoType } from "@/lib/types"

type Props = {
  video: VideoType
}

export function Video({ video }: Props) {
  const { title, thumbnails } = video.snippet
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
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
    </a>
  )
}
