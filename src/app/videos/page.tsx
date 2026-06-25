import type { Metadata } from "next"

import { ContentFeed } from "@/components/content-feed"
import { MembershipCTA } from "@/components/membership-cta"
import { getContentFeed } from "@/data-access/content"

export const metadata: Metadata = {
  title: "Videos | Daniel Bergholz",
  description:
    "Watch Daniel Bergholz's videos or read the article version — fullstack web development tutorials, programming tips, and developer content",
  alternates: {
    canonical: "/videos"
  },
  openGraph: {
    type: "website",
    siteName: "Daniel Bergholz",
    title: "Videos | Daniel Bergholz",
    url: "https://bergdaniel.com.br/videos",
    description:
      "Watch Daniel Bergholz's videos or read the article version — fullstack web development tutorials, programming tips, and developer content",
    images: {
      url: "https://bergdaniel.com.br/og.png",
      width: 1200,
      height: 630
    }
  },
  twitter: {
    site: "@danielbergholz",
    creator: "@danielbergholz",
    card: "summary_large_image",
    title: "Videos | Daniel Bergholz",
    description:
      "Watch Daniel Bergholz's videos or read the article version — fullstack web development tutorials, programming tips, and developer content",
    images: {
      url: "https://bergdaniel.com.br/og.png",
      width: 1200,
      height: 630
    }
  }
}

export const revalidate = 3600 // 1 hour

export default async function Videos() {
  const items = await getContentFeed()

  return (
    <main className="my-14 md:my-28 max-w-5xl mx-auto flex flex-col">
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight mb-4">
        Videos
      </h1>
      <p className="text-sm md:text-base leading-relaxed opacity-60 mb-4 max-w-2xl">
        Everything I publish, newest first. Most videos come with a written
        version too — watch on YouTube or read the article, whichever you
        prefer.
      </p>
      <hr className="w-12 border-t border-current opacity-20 mb-6 md:mb-8" />

      <ContentFeed items={items} />

      <div className="mt-10 md:mt-14">
        <MembershipCTA />
      </div>
    </main>
  )
}
