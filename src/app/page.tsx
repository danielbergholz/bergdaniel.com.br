import { GitHub, LinkedIn, Twitter, YouTube } from "@/components/icons"
import { ContentCard } from "@/components/content-card"
import { MembershipCTA } from "@/components/membership-cta"
import { getChannelStats } from "@/data-access/youtube"
import { getContentFeed } from "@/data-access/content"
import { formatNumber } from "@/lib/utils"
import Link from "next/link"

export const revalidate = 3600 // 1 hour

export default async function Home() {
  const [{ subscriberCount, viewCount }, content] = await Promise.all([
    getChannelStats(),
    getContentFeed()
  ])
  const latestVideos = content.filter((item) => item.videoUrl).slice(0, 3)

  return (
    <main
      id="main"
      className="my-14 md:my-28 max-w-4xl mx-auto flex flex-col gap-14 md:gap-20"
    >
      <section className="w-auto md:w-[560px] mx-auto flex flex-col gap-5 text-left">
        <h1 className="font-serif text-4xl md:text-5xl italic tracking-tight">
          Hello
        </h1>
        <h2 className="text-base md:text-xl leading-relaxed">
          My name is{" "}
          <span className="font-bold tracking-wide">Daniel Bergholz</span>,
          I&apos;m a Software Engineer, Content Creator and Solopreneur from
          Brazil
        </h2>
        <a
          className="group w-max text-xs md:text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none"
          href="mailto:bergholz.daniel@gmail.com"
          aria-label="Get in touch via email"
        >
          Get in touch{" "}
          <span className="inline-block transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
            &rarr;
          </span>
        </a>

        <hr className="w-12 border-t border-current opacity-20 my-1" />

        <section aria-label="Social Media" className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@DanielBergholz"
            aria-label="YouTube"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 motion-reduce:hover:scale-100 transition-all duration-300 motion-reduce:transition-none"
          >
            <YouTube width={24} height={24} aria-hidden />
          </a>

          <a
            href="https://twitter.com/danielbergholz"
            aria-label="X (formerly Twitter)"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 motion-reduce:hover:scale-100 transition-all duration-300 motion-reduce:transition-none"
          >
            <Twitter width={20} height={20} aria-hidden />
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-gobbi-bergholz/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 motion-reduce:hover:scale-100 transition-all duration-300 motion-reduce:transition-none"
          >
            <LinkedIn width={21} height={21} aria-hidden />
          </a>

          <a
            href="https://github.com/danielbergholz"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 motion-reduce:hover:scale-100 transition-all duration-300 motion-reduce:transition-none"
          >
            <GitHub width={24} height={24} aria-hidden />
          </a>
        </section>

        <section
          aria-label="YouTube Stats"
          className="flex items-center gap-8 md:gap-12 py-5 md:py-6 px-1"
        >
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              {formatNumber(subscriberCount)}+
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60">
              Subscribers
            </span>
          </div>
          <div className="w-px h-8 bg-current opacity-10" />
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              {formatNumber(viewCount)}+
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60">
              Views
            </span>
          </div>
        </section>
      </section>

      <section aria-label="Latest videos" className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl md:text-3xl italic tracking-tight">
            Latest videos
          </h2>
          <Link
            href="/videos"
            title="See all videos and articles"
            className="group whitespace-nowrap text-xs md:text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-300 motion-reduce:transition-none"
          >
            View all{" "}
            <span className="inline-block transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
              &rarr;
            </span>
          </Link>
        </div>
        {latestVideos.length === 0 ? (
          <p className="opacity-60 text-sm md:text-base">
            No videos available right now. Check back soon or browse{" "}
            <Link href="/videos" className="underline underline-offset-2">
              all content
            </Link>
            .
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {latestVideos.map((item, index) => (
              <ContentCard key={item.id} item={item} priority={index === 0} />
            ))}
          </div>
        )}
      </section>

      <section aria-label="Channel membership">
        <MembershipCTA />
      </section>
    </main>
  )
}
