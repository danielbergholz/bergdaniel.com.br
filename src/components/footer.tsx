import { ExternalLink } from "@/components/icons"
import Link from "next/link"

const footerLinks = [
  { href: "/videos", label: "Videos" },
  { href: "/courses", label: "Courses" },
  { href: "/products", label: "Products" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/links", label: "Links" }
]

const socialLinks = [
  {
    href: "https://www.youtube.com/@DanielBergholz",
    label: "YouTube"
  },
  {
    href: "https://twitter.com/danielbergholz",
    label: "X"
  },
  {
    href: "https://www.linkedin.com/in/daniel-gobbi-bergholz/",
    label: "LinkedIn"
  },
  {
    href: "https://github.com/danielbergholz",
    label: "GitHub"
  }
]

const sectionLabel =
  "mb-3 text-[10px] uppercase tracking-[0.2em] text-foreground/50"

const internalLinkStyle =
  "text-sm normal-case tracking-normal font-medium text-foreground/60 hover:text-foreground transition-colors"

const externalLinkStyle =
  "inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-foreground/60 hover:text-foreground border border-current/15 dark:border-current/25 rounded-sm px-2.5 py-1.5 transition-colors"

export function Footer() {
  return (
    <footer className="mt-20 md:mt-28 pt-8 border-t border-current/10 dark:border-current/20">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm uppercase tracking-[0.15em]">
              Daniel Bergholz
            </p>
            <a
              href="mailto:bergholz.daniel@gmail.com"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors w-max"
            >
              bergholz.daniel@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16">
            <nav aria-label="Site pages">
              <p className={sectionLabel}>Pages</p>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={internalLinkStyle}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Social media">
              <p className={sectionLabel}>Social</p>
              <ul className="flex flex-col gap-2.5">
                {socialLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={externalLinkStyle}
                      aria-label={`${label} (opens in a new tab)`}
                    >
                      {label}
                      <ExternalLink />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="text-xs text-foreground/50">
          &copy; {new Date().getFullYear()} Daniel Bergholz
        </p>
      </div>
    </footer>
  )
}
