import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frontend Fundamentals: Become a Productive React Developer",
  description:
    "Whether you're a complete beginner or a backend developer looking to transition to fullstack, this course will take you from zero to building professional-grade React applications. You'll learn to navigate the traditional methods of React development before diving into the latest modern techniques, equipping you with the skills needed to work confidently on real-world projects.",
  openGraph: {
    title: "Frontend Fundamentals: Become a Productive React Developer",
    description:
      "Whether you're a complete beginner or a backend developer looking to transition to fullstack, this course will take you from zero to building professional-grade React applications. You'll learn to navigate the traditional methods of React development before diving into the latest modern techniques, equipping you with the skills needed to work confidently on real-world projects."
  }
}

export default function FrontendFundamentals() {
  return (
    <section
      className="container mx-auto my-10 md:my-20"
      aria-labelledby="course-title"
    >
      <div className="bg-background shadow-md rounded-lg">
        <h1 id="course-title" className="text-2xl md:text-3xl font-bold mb-4">
          Frontend Fundamentals: Become a Productive React Developer
        </h1>
        <p className="text-lg mb-4">
          Whether you&apos;re a complete beginner or a backend developer looking
          to transition to fullstack, this course will take you from zero to
          building professional-grade React applications. You&apos;ll learn to
          navigate the traditional methods of React development before diving
          into the latest modern techniques, equipping you with the skills
          needed to work confidently on real-world projects.
        </p>

        <h2
          id="course-overview"
          className="text-xl md:text-2xl font-semibold mb-2"
        >
          Course Overview
        </h2>
        <div className="space-y-4 mb-8" aria-labelledby="course-overview">
          <p className="text-lg">
            This course is structured in two comprehensive parts:
          </p>
          <ul
            className="list-disc list-inside space-y-2"
            aria-label="Course Structure"
          >
            <li>
              <strong>Part 1: Master the Fundamentals of React</strong> - Start
              by building a traditional Single Page Application (SPA) from the
              ground up. You&apos;ll learn core concepts like components, state
              management, hooks, and more.
            </li>
            <li>
              <strong>
                Part 2: Modernize Your Application with React Router
              </strong>{" "}
              - Transform the SPA into a more robust and modern React app using
              advanced React Router features like data-fetching APIs, nested
              routing, and code splitting.
            </li>
          </ul>
        </div>

        <h2 id="approach" className="text-xl md:text-2xl font-semibold mb-2">
          Why This Approach?
        </h2>
        <p className="mb-4">
          Most production React applications are traditional SPAs paired with
          backend APIs. By starting with this approach, you&apos;ll gain
          essential skills before learning how to modernize with React Router,
          preparing you for real-world React codebases.
        </p>

        <h2 id="project" className="text-xl md:text-2xl font-semibold mb-2">
          What are we building?
        </h2>
        <p className="mb-4">
          In this course, we&apos;re building <strong>Book Club</strong>, a
          social platform where users can log in, browse personalized book
          reviews, and manage their reading journey by adding books to different
          categories.
        </p>

        <h2 id="tech-stack" className="text-xl md:text-2xl font-semibold mb-2">
          Tech Stack
        </h2>
        <ul
          className="list-disc list-inside space-y-2 mb-8"
          aria-labelledby="tech-stack"
        >
          <li>
            <strong>TypeScript:</strong> Add static typing for better
            maintainability.
          </li>
          <li>
            <strong>React:</strong> Build a SPA using Vite for faster
            development.
          </li>
          <li>
            <strong>React Router:</strong> Client-side routing for seamless
            navigation.
          </li>
          <li>
            <strong>React Context:</strong> Share state globally without prop
            drilling.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Utility-first CSS for rapid UI
            development.
          </li>
          <li>
            <strong>Zod:</strong> Validate and parse data for safer
            applications.
          </li>
          <li>
            <strong>Playwright:</strong> E2E testing simulating real user
            interactions.
          </li>
          <li>
            <strong>Vercel:</strong> Automatic deployments from GitHub.
          </li>
        </ul>

        <h2
          id="honorable-mentions"
          className="text-xl md:text-2xl font-semibold mb-2"
        >
          Honorable Mentions
        </h2>
        <ul
          className="list-disc list-inside space-y-2 mb-8"
          aria-labelledby="honorable-mentions"
        >
          <li>
            <strong>React Hook Form:</strong> Simplify form handling.
          </li>
          <li>
            <strong>Styled Components:</strong> Use CSS-in-JS for dynamic
            styling.
          </li>
          <li>
            <strong>Redux:</strong> Centralized state management for complex
            apps.
          </li>
        </ul>

        <h2
          id="additional-skills"
          className="text-xl md:text-2xl font-semibold mb-2"
        >
          Additional Skills
        </h2>
        <ul
          className="list-disc list-inside space-y-2"
          aria-labelledby="additional-skills"
        >
          <li>
            <strong>Figma Basics:</strong> Follow design systems and download
            assets.
          </li>
          <li>
            <strong>Backend Integration:</strong> Use Swagger to understand REST
            APIs.
          </li>
        </ul>
      </div>
    </section>
  )
}
