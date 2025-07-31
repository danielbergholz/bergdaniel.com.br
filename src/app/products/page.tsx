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
    <main className="w-auto md:max-w-4xl mx-auto my-16 md:my-24 px-4">
      <div className="space-y-6 md:space-y-8">
        {/* CourseShelf - New Project */}
        <a
          href="https://thecourseshelf.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-gray-500 rounded-md p-4 hover:opacity-70 transition-opacity"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">CourseShelf</h2>
            <span className="text-yellow-500 border-yellow-500 border rounded-sm px-2 text-sm">
              Beta Available
            </span>
          </div>

          <p className="mb-4 leading-relaxed">
            The community where self-taught learners discover, review, and
            recommend online courses across every subject. Think of it as your
            personal learning library, curated by people who've actually taken
            the courses.
          </p>

          <div>
            <h3 className="font-semibold mb-2">What CourseShelf offers:</h3>
            <ul className="list-disc list-inside space-y-1 opacity-60">
              <li>Community-driven course reviews and recommendations</li>
              <li>Personal learning library and playlist creation</li>
              <li>Courses across all subjects - from coding to cooking</li>
              <li>
                Connect with fellow self-taught learners and share your journey
              </li>
            </ul>
          </div>
        </a>

        {/* TechSchool - Main Project */}
        <a
          href="https://techschool.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-gray-500 rounded-md p-4 hover:opacity-70 transition-opacity"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">TechSchool</h2>
            <span className="text-green-light dark:text-green-dark border-green-light dark:border-green-dark border rounded-sm px-2 text-sm">
              Live
            </span>
          </div>

          <p className="mb-4 leading-relaxed">
            Free technology education platform for everyone. TechSchool curates
            the best free programming courses from across the internet, helping
            developers go from zero to their first job without any financial
            burden.
          </p>

          <div>
            <h3 className="font-semibold mb-2">What TechSchool offers:</h3>
            <ul className="list-disc list-inside space-y-1 opacity-60">
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
