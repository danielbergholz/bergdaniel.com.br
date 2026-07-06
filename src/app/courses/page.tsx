import type { Metadata } from "next"

import { Video } from "@/components/video"
import { getCourses } from "@/data-access/youtube"

export const metadata: Metadata = {
  title: "Courses | Daniel Bergholz",
  description: "Free and premium fullstack web development courses",
  alternates: {
    canonical: "/courses"
  },
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

export const revalidate = 86400 // 1 day

export default async function Courses() {
  const { englishCourses, portugueseCourses } = await getCourses()

  return (
    <main
      id="main"
      className="my-14 md:my-28 max-w-[978px] mx-auto flex flex-col"
    >
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight mb-4">
        Courses
      </h1>
      <p className="text-sm md:text-base leading-relaxed opacity-60 mb-4 max-w-2xl">
        Free fullstack web development playlists on YouTube. Start with the
        English courses or browse the Portuguese catalog below.
      </p>
      <hr className="w-12 border-t border-current opacity-20 mb-6 md:mb-8" />

      <section
        aria-labelledby="english-courses-heading"
        className="flex flex-col gap-4"
      >
        <h2
          id="english-courses-heading"
          className="font-serif text-xl md:text-2xl italic tracking-tight"
        >
          English courses
        </h2>
        {englishCourses.length === 0 ? (
          <p className="opacity-60 text-sm md:text-base">
            No English courses available right now. Check back soon.
          </p>
        ) : (
          <div className="flex flex-col items-center sm:items-stretch gap-4">
            {englishCourses.map((playlist, index) => (
              <Video
                video={playlist}
                key={playlist.id}
                newCourse={index === 0}
                locale="en"
                featured
              />
            ))}
          </div>
        )}
      </section>

      <section
        aria-labelledby="portuguese-courses-heading"
        className="flex flex-col gap-4 mt-10 md:mt-12"
      >
        <h2
          id="portuguese-courses-heading"
          className="font-serif text-xl md:text-2xl italic tracking-tight"
        >
          Cursos em português
        </h2>
        {portugueseCourses.length === 0 ? (
          <p className="opacity-60 text-sm md:text-base">
            No Portuguese courses available right now. Check back soon.
          </p>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center lg:justify-between">
            {portugueseCourses.map((playlist) => (
              <Video video={playlist} key={playlist.id} locale="pt" />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
