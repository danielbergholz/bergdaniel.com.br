import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - Daniel Bergholz",
  description:
    "Projects built by Daniel Bergholz - CourseShelf learning community, TechSchool free tech education platform and more developer tools",
  keywords: [
    "Daniel Bergholz",
    "Projects",
    "CourseShelf",
    "TechSchool",
    "Free Education",
    "Developer Tools",
    "Open Source"
  ]
}

export default function Products() {
  return (
    <main className="w-auto md:max-w-3xl mx-auto my-14 md:my-28">
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight mb-4">
        Products
      </h1>
      <hr className="w-12 border-t border-current opacity-20 mb-6 md:mb-8" />

      <div className="space-y-5 md:space-y-6">
        {/* CourseShelf */}
        <a
          href="https://thecourseshelf.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-current/10 dark:border-current/20 rounded-lg p-5 md:p-6 hover:border-current/30 dark:hover:border-current/40 transition-all duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold group-hover:opacity-80 transition-opacity">
              CourseShelf
            </h2>
            <span className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 border border-violet-300 dark:border-violet-800 rounded-sm px-2 py-0.5">
              Beta
            </span>
          </div>

          <p className="mb-4 leading-relaxed opacity-60 text-sm md:text-base">
            The community where self-taught learners discover, review, and
            recommend online courses across every subject. Think of it as your
            personal learning library, curated by people who've actually taken
            the courses.
          </p>

          <div>
            <h3 className="text-sm font-semibold mb-2 tracking-wide">
              What CourseShelf offers:
            </h3>
            <ul className="list-disc list-inside space-y-1 opacity-40 text-sm">
              <li>Community-driven course reviews and recommendations</li>
              <li>Personal learning library and playlist creation</li>
              <li>Courses across all subjects - from coding to cooking</li>
              <li>
                Connect with fellow self-taught learners and share your journey
              </li>
            </ul>
          </div>
        </a>

        {/* TechSchool */}
        <a
          href="https://techschool.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-current/10 dark:border-current/20 rounded-lg p-5 md:p-6 hover:border-current/30 dark:hover:border-current/40 transition-all duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold group-hover:opacity-80 transition-opacity">
              TechSchool
            </h2>
            <span className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 rounded-sm px-2 py-0.5">
              Live
            </span>
          </div>

          <p className="mb-4 leading-relaxed opacity-60 text-sm md:text-base">
            Free technology education platform for everyone. TechSchool curates
            the best free programming courses from across the internet, helping
            developers go from zero to their first job without any financial
            burden.
          </p>

          <div>
            <h3 className="text-sm font-semibold mb-2 tracking-wide">
              What TechSchool offers:
            </h3>
            <ul className="list-disc list-inside space-y-1 opacity-40 text-sm">
              <li>
                189+ curated free courses in multiple programming languages
              </li>
              <li>Bootcamp-style learning paths</li>
              <li>
                Courses in Go, Elixir, Python, Ruby, React, Node.js and more
              </li>
              <li>Community-driven platform with open source contributions</li>
            </ul>
          </div>
        </a>
      </div>
    </main>
  )
}
