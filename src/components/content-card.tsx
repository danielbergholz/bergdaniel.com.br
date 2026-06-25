import { Play, Read } from "@/components/icons"
import type { ContentItem } from "@/lib/types"
import { formatDuration, readableDate } from "@/lib/utils"
import Image from "next/image"

const CARD_BASE =
  "group flex rounded-lg border border-current/10 dark:border-current/20 hover:border-current/30 dark:hover:border-current/40 transition-all duration-300"

function Thumbnail({
  item,
  featured
}: {
  item: ContentItem
  featured: boolean
}) {
  const { title, thumbnailUrl, videoUrl, articleUrl, durationSeconds } = item
  const isArticleOnly = !videoUrl && !!articleUrl

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 440px"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        }
        className="object-cover"
      />
      {isArticleOnly && (
        <span className="absolute left-2 top-2 rounded-sm border border-current/20 bg-background px-1.5 py-0.5 text-[10px] uppercase tracking-widest opacity-70">
          Article
        </span>
      )}
      {videoUrl && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span
            className={`flex items-center justify-center rounded-full bg-black/55 text-white transition-transform duration-300 group-hover:scale-110 ${
              featured ? "h-16 w-16" : "h-11 w-11"
            }`}
          >
            <Play width={featured ? 24 : 18} height={featured ? 24 : 18} />
          </span>
        </span>
      )}
      {videoUrl && durationSeconds != null && (
        <span className="absolute bottom-2 right-2 rounded-sm bg-black/80 px-1.5 py-0.5 text-[11px] font-medium tabular-nums text-white">
          {formatDuration(durationSeconds)}
        </span>
      )}
    </div>
  )
}

function Actions({ item, featured }: { item: ContentItem; featured: boolean }) {
  const { videoUrl, articleUrl, readingMinutes } = item

  if (featured) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-sm bg-foreground px-4 py-2 text-xs uppercase tracking-widest text-background hover:opacity-80 transition-opacity"
          >
            <Play width={14} height={14} /> Watch
          </a>
        )}
        {articleUrl && (
          <a
            href={articleUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-sm border border-current/30 px-4 py-2 text-xs uppercase tracking-widest hover:border-current/60 transition-colors"
          >
            <Read width={14} height={14} /> Read
          </a>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 rounded-sm border border-current/20 px-2 py-1 text-[11px] uppercase tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          <Play width={12} height={12} /> Watch
        </a>
      )}
      {articleUrl && (
        <a
          href={articleUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 rounded-sm border border-current/20 px-2 py-1 text-[11px] uppercase tracking-wide opacity-70 hover:opacity-100 transition-opacity"
        >
          <Read width={12} height={12} /> Read
          {readingMinutes != null && (
            <span className="opacity-60">· {readingMinutes}m</span>
          )}
        </a>
      )}
    </div>
  )
}

type Props = {
  item: ContentItem
  featured?: boolean
}

export function ContentCard({ item, featured = false }: Props) {
  const { title, date, description, readingMinutes, videoUrl, articleUrl } =
    item

  // Videos-first: the thumbnail/title open the video when there is one.
  const primary = videoUrl ?? articleUrl
  if (!primary) return null

  if (featured) {
    return (
      <article
        className={`${CARD_BASE} flex-col md:flex-row gap-5 md:gap-6 p-5 md:p-6`}
      >
        <a
          href={primary}
          target="_blank"
          rel="noreferrer noopener"
          title={title}
          className="block md:w-[440px] md:shrink-0"
        >
          <Thumbnail item={item} featured />
        </a>
        <div className="flex flex-1 flex-col gap-3">
          <a
            href={primary}
            target="_blank"
            rel="noreferrer noopener"
            title={title}
          >
            <h2 className="text-xl md:text-2xl font-bold leading-tight group-hover:opacity-80 transition-opacity">
              {title}
            </h2>
          </a>
          {description && (
            <p className="opacity-50 text-sm md:text-base leading-relaxed line-clamp-3">
              {description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-x-2 text-xs uppercase tracking-widest opacity-40">
            <span>{readableDate(date)}</span>
            {readingMinutes != null && <span>· {readingMinutes} min read</span>}
          </div>
          <div className="mt-1 md:mt-auto">
            <Actions item={item} featured />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className={`${CARD_BASE} flex-col gap-3 p-4`}>
      <a
        href={primary}
        target="_blank"
        rel="noreferrer noopener"
        title={title}
        className="flex flex-col gap-3"
      >
        <Thumbnail item={item} featured={false} />
        <h2 className="font-bold text-base md:text-lg leading-snug line-clamp-2 group-hover:opacity-80 transition-opacity">
          {title}
        </h2>
      </a>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs uppercase tracking-widest opacity-40">
          {readableDate(date)}
        </span>
        <Actions item={item} featured={false} />
      </div>
    </article>
  )
}
