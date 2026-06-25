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
    <main className="my-14 md:my-28 max-w-4xl mx-auto flex flex-col gap-14 md:gap-20">
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
          className="group w-max text-xs md:text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-300"
          href="mailto:bergholz.daniel@gmail.com"
          title="Send email to Daniel Bergholz"
          target="_blank"
          rel="noreferrer noopener"
        >
          Get in touch{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>

        <hr className="w-12 border-t border-current opacity-20 my-1" />

        <section aria-label="Social Media" className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@DanielBergholz"
            title="YouTube"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <YouTube width={24} height={24} />
          </a>

          <a
            href="https://twitter.com/danielbergholz"
            title="X (Formerly Twitter)"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <Twitter width={20} height={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-gobbi-bergholz/"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <LinkedIn width={21} height={21} />
          </a>

          <a
            href="https://github.com/danielbergholz"
            title="GitHub"
            target="_blank"
            rel="noreferrer noopener"
            className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <GitHub width={24} height={24} />
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
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
              Subscribers
            </span>
          </div>
          <div className="w-px h-8 bg-current opacity-10" />
          <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              {formatNumber(viewCount)}+
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-40">
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
            className="group whitespace-nowrap text-xs md:text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            View all{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestVideos.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section aria-label="Channel membership">
        <MembershipCTA />
      </section>
    </main>
  )
}
