import {
  DevTo,
  GitHub,
  LinkedIn,
  Thunder,
  Twitter,
  YouTube
} from "@/components/icons"

export default function Home() {
  return (
    <main className="text-left w-auto md:w-[500px] mx-auto my-48 md:my-56 flex flex-col gap-3">
      <h1 className="text-2xl md:text-3xl font-bold">Hello</h1>
      <h2 className="text-base md:text-xl">
        My name is <span>Daniel Bergholz</span>, I&apos;m a Senior Frontend
        Engineer and Content Creator from Brazil
      </h2>
      <a
        className="opacity-60 underline w-max text-base md:text-xl"
        href="mailto:bergholz.daniel@gmail.com"
        title="Send email to Daniel Bergholz"
        target="_blank"
        rel="noopener"
      >
        Contact me
      </a>
      <section aria-label="Social Media" className="flex items-center gap-2">
        <a
          href="https://www.youtube.com/@DanielBergholz"
          title="YouTube"
          target="_blank"
          rel="noopener"
        >
          <YouTube width={28} height={28} />
        </a>

        <a
          href="https://twitter.com/danielbergholz"
          title="X (Formerly Twitter)"
          target="_blank"
          rel="noopener"
        >
          <Twitter width={24} height={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-gobbi-bergholz/"
          title="LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn width={25} height={25} />
        </a>

        <a
          href="https://github.com/danielbergholz"
          title="GitHub"
          target="_blank"
          rel="noopener"
        >
          <GitHub width={28} height={28} />
        </a>
      </section>
    </main>
  )
}
