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
    label: "X (Twitter)"
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

export function Footer() {
  return (
    <footer className="mt-20 md:mt-28 pt-8 border-t border-current/10 dark:border-current/20">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-sm uppercase tracking-[0.15em]">
              Daniel Bergholz
            </p>
            <a
              href="mailto:bergholz.daniel@gmail.com"
              className="text-sm opacity-60 hover:opacity-100 transition-opacity w-max"
            >
              bergholz.daniel@gmail.com
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em]">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs uppercase tracking-[0.2em] opacity-60">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:opacity-100 transition-opacity"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p>&copy; {new Date().getFullYear()} Daniel Bergholz</p>
        </div>
      </div>
    </footer>
  )
}
