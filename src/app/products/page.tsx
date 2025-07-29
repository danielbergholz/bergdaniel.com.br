import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - Daniel Bergholz",
  description:
    "Projects built by Daniel Bergholz - TechSchool free tech education platform and more developer tools",
  keywords: [
    "Daniel Bergholz",
    "Projects",
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
        {/* TechSchool - Main Project */}
        <a
          href="https://techschool.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="block border-2 border-gray-500 rounded-md p-4 hover:opacity-70 transition-opacity"
        >
          <div className="flex justify-between items-start mb-4">
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

        {/* Coming Soon Project */}
        <div className="block border-2 border-gray-500 rounded-md p-4">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">???</h2>
            <span className="text-yellow-500 border-yellow-500 border rounded-sm px-2 text-sm">
              Coming Soon
            </span>
          </div>

          <p className="mb-4 leading-relaxed">
            The evolution of TechSchool. Building on what we've learned from creating 
            a free education platform, this next project will take the learning experience 
            to a whole new level for self-taught developers.
          </p>

          <div>
            <p className="font-semibold mb-2">What's coming:</p>
            <ul className="list-disc list-inside space-y-1 opacity-60">
              <li>Enhanced learning experience beyond just course curation</li>
              <li>Community-driven features for learners</li>
              <li>Better ways to discover and organize learning content</li>
              <li>Tools to help track and share your learning journey</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
