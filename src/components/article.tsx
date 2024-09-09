import { Article as ArticleType } from "@/lib/types"
import Image from "next/image"

type Props = {
  article: ArticleType
}

export function Article({ article }: Props) {
  return (
    <a
      rel="noopener"
      target="_blank"
      href={article.url}
      title={article.title}
      className="border-2 rounded-md border-gray-500 p-4 flex flex-col md:flex-row items-center gap-4 hover:opacity-70 transition-opacity justify-center w-[92%] md:w-[830px] m-auto"
    >
      <Image
        src={article.cover_image}
        alt={article.title}
        width={300}
        height={126}
        className="rounded-md"
      />
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">{article.title}</h1>
        <p className="opacity-60 text-base">{article.description}</p>
        <p className="opacity-60 text-sm">
          {article.reading_time_minutes} minutes read
        </p>
      </div>
    </a>
  )
}
