import type { Metadata } from "next"

import { getCourses } from "@/data-access/youtube"
import { Video } from "@/components/video"

export const metadata: Metadata = {
  title: "Courses | Daniel Bergholz",
  description: "Daniel Bergholz's courses"
}

export const revalidate = 60 // 1 minute

export default async function Courses() {
  const { englishCourses, portugueseCourses } = await getCourses()

  return (
    <main className="my-16 md:my-36 max-w-[978px] m-auto flex flex-col items-center">
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
