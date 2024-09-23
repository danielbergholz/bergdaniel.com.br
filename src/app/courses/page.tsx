import type { Metadata } from "next"

import { getCourses } from "@/data-access/youtube"
import { Video } from "@/components/video"

export const metadata: Metadata = {
  title: "Courses | Daniel Bergholz",
  description: "Daniel Bergholz's courses"
}

export const revalidate = 60 * 60 * 24 * 7 // one week

export default async function Courses() {
  const { englishCourses, portugueseCourses } = await getCourses()

  return (
    <main className="my-14 md:my-16 w-[72%] m-auto flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl mb-2 md:mb-6 w-max">🇺🇸</h1>
      <ul
        aria-label="Courses in English"
        className="flex flex-wrap gap-4 md:gap-6 items-center"
      >
        {englishCourses.map((playlist) => (
          <Video video={playlist} key={playlist.id} />
        ))}
      </ul>
      <h1 className="text-4xl md:text-5xl mb-2 md:mb-6 mt-8 md:mt-10 w-max">
        🇧🇷
      </h1>
      <ul
        aria-label="Courses in Brazilian Portuguese"
        className="flex flex-wrap gap-4 md:gap-6 items-center justify-center"
      >
        {portugueseCourses.map((playlist) => (
          <Video video={playlist} key={playlist.id} />
        ))}
      </ul>
    </main>
  )
}
