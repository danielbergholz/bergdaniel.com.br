import type { Metadata } from "next"

import { getCourses } from "@/data-access/youtube"
import { Video } from "@/components/video"

export const metadata: Metadata = {
  title: "Courses | Daniel Bergholz",
  description: "Free and premium fullstack web development courses",
  openGraph: {
    type: "website",
    siteName: "Daniel Bergholz",
    title: "Courses | Daniel Bergholz",
    url: "https://bergdaniel.com.br/courses",
    description: "Free and premium fullstack web development courses",
    images: {
      url: "https://bergdaniel.com.br/og_courses.png",
      width: 1200,
      height: 630
    }
  },
  twitter: {
    site: "@danielbergholz",
    creator: "@danielbergholz",
    card: "summary_large_image",
    title: "Courses | Daniel Bergholz",
    description: "Free and premium fullstack web development courses",
    images: {
      url: "https://bergdaniel.com.br/og_courses.png",
      width: 1200,
      height: 630
    }
  }
}

export const revalidate = 60 * 60 * 24 // 1 day

export default async function Courses() {
  const { englishCourses, portugueseCourses } = await getCourses()

  return (
    <main className="my-14 md:my-28 max-w-[978px] m-auto flex flex-col items-center">
      {englishCourses.map((playlist) => (
        <Video video={playlist} key={playlist.id} locale="en" featured />
      ))}

      <div className="flex flex-wrap gap-4 justify-center lg:justify-between mt-4 sm:mt-6">
        {portugueseCourses.map((playlist) => (
          <Video video={playlist} key={playlist.id} locale="pt" />
        ))}
      </div>
    </main>
  )
}
