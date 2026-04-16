import { GitHub, LinkedIn, Twitter, YouTube } from "@/components/icons"
import { CourseShelfBanner } from "@/components/courseshelf-banner"

export default function Home() {
  return (
    <main className="text-left w-auto md:w-[560px] mx-auto my-28 md:my-44 flex flex-col gap-5">
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

      <CourseShelfBanner />
    </main>
  )
}
