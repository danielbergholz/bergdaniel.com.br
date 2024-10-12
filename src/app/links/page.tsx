import type { Metadata } from "next"
import {
  Diamond,
  DevTo,
  GitHub,
  LinkedIn,
  Thunder,
  Twitter,
  YouTube
} from "@/components/icons"
import { Link } from "@/components/link"

export const metadata: Metadata = {
  title: "Links | Daniel Bergholz",
  description: "Social media links: YouTube, Twitter, Blog and GitHub"
}

export default function Links() {
  return (
    <main className="my-20 md:my-36">
      <section
        aria-label="Social Media Links"
        className="flex flex-col items-center gap-4"
      >
        <Link
          title="Premium"
          href="https://www.youtube.com/@DanielBergholz/join"
        >
          <Diamond width={28} height={28} />
        </Link>

        <Link title="TechSchool" href="https://techschool.dev/">
          <Thunder width={28} height={28} />
        </Link>

        <Link href="https://www.youtube.com/@DanielBergholz" title="YouTube">
          <YouTube width={28} height={28} />
        </Link>

        <Link href="https://twitter.com/danielbergholz" title="Twitter">
          <Twitter width={25} height={25} />
        </Link>

        <Link
          href="https://www.linkedin.com/in/daniel-gobbi-bergholz/"
          title="LinkedIn"
        >
          <LinkedIn width={28} height={28} />
        </Link>

        <Link href="https://dev.to/danielbergholz" title="Blog">
          <DevTo width={23} height={23} />
        </Link>

        <Link href="https://github.com/danielbergholz" title="GitHub">
          <GitHub width={28} height={28} />
        </Link>
      </section>
    </main>
  )
}
