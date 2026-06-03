import type { Article as ArticleType } from "@/lib/types"
import { readableDate } from "@/lib/utils"
import Image from "next/image"

type Props = {
  article: ArticleType
  newPost?: boolean
}

export function Article({ article, newPost = false }: Props) {
  const image = article.cover_image || article.social_image

  return (
    <a
      rel="noreferrer noopener"
      target="_blank"
      href={article.url}
      title={article.title}
      className="group border border-current/10 dark:border-current/20 rounded-lg overflow-hidden flex flex-col md:flex-row hover:border-current/30 dark:hover:border-current/40 transition-all duration-300"
    >
      {image && (
        <div className="overflow-hidden md:w-[440px] md:shrink-0 md:flex md:items-center md:py-6 md:pl-6">
          <Image
            src={image}
            alt={article.title}
            width={1000}
            height={420}
            className="w-full aspect-[1000/420] object-cover md:rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col items-start gap-2 md:gap-3 p-5 md:p-6">
        <div className="flex justify-between w-full items-start gap-3">
          <h2 className="font-bold text-lg md:text-xl group-hover:opacity-80 transition-opacity">
            {article.title}
          </h2>
          {newPost && (
            <span className="text-xs uppercase tracking-widest text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-800 rounded-sm px-2 py-0.5 shrink-0">
              New
            </span>
          )}
        </div>
        <p className="opacity-50 text-sm md:text-base leading-relaxed">
          {article.description}
        </p>
        <p className="opacity-40 text-xs md:text-sm tracking-wide mt-auto">
          {readableDate(article.published_at)} · {article.reading_time_minutes}{" "}
          min read
        </p>
      </div>
    </a>
  )
}
