import { Article as ArticleType } from "@/lib/types"
import { readableDate } from "@/lib/utils"

type Props = {
  article: ArticleType
  newPost?: boolean
}

export function Article({ article, newPost = false }: Props) {
  return (
    <a
      rel="noopener"
      target="_blank"
      href={article.url}
      title={article.title}
      className="border-2 rounded-md border-gray-500 p-4 flex flex-col items-start gap-2 md:gap-3 hover:opacity-70 transition-opacity justify-center w-[94%] md:w-[80%] max-w-[830px] m-auto"
    >
      <h1 className="font-bold text-xl">{article.title}</h1>
      <p className="opacity-60 text-base">{article.description}</p>
      <div className="flex justify-between w-full items-center">
        <p className="opacity-60 text-sm">
          {readableDate(article.published_at)} · {article.reading_time_minutes}{" "}
          minutes read
        </p>
        {newPost && (
          <span className="text-yellow-500 border-yellow-500 border rounded-sm px-2 text-sm">
            New
          </span>
        )}
      </div>
    </a>
  )
}
