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
    <main className="my-16 md:my-36 w-[72%] m-auto flex flex-col items-center">
      <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
        {englishCourses.map((playlist) => (
          <Video video={playlist} key={playlist.id} locale="en" />
        ))}
        {portugueseCourses.map((playlist) => (
          <Video video={playlist} key={playlist.id} locale="pt" />
        ))}
      </div>
    </main>
  )
}
