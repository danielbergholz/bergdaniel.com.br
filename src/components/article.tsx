import { Article as ArticleType } from "@/lib/types"

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
      className="border-2 rounded-md border-gray-500 p-4 flex flex-col items-start gap-2 md:gap-3 hover:opacity-70 transition-opacity justify-center w-[94%] md:w-[80%] max-w-[830px] m-auto"
    >
      <h1 className="font-bold text-xl">{article.title}</h1>
      <p className="opacity-60 text-base">{article.description}</p>
      <p className="opacity-60 text-sm flex justify-between w-full">
        <span>{article.readable_publish_date}</span>
        <span>{article.reading_time_minutes} minutes read</span>
      </p>
    </a>
  )
}
