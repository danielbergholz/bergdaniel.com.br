import type { Metadata } from "next"
import { getChannelStats } from "@/data-access/youtube"
import { formatNumber } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Work With Me - Daniel Bergholz",
  description:
    "Hire Daniel Bergholz as a fullstack developer, contractor, or content collaborator. Specializing in Elixir, Phoenix, React, and AI-driven development for startups.",
  keywords: [
    "Daniel Bergholz",
    "Hire Developer",
    "Fullstack Developer",
    "Elixir Developer",
    "Phoenix Developer",
    "React Developer",
    "Freelance Developer",
    "Contractor",
    "Content Creator",
    "Startup Developer",
    "AI Development",
    "Claude Code"
  ]
}

const track = [
  {
    name: "Gearflow",
    role: "B2B marketplace with AI-powered parts extraction, built with Elixir & Phoenix",
    url: "https://gearflow.com/"
  },
  {
    name: "Nebulab",
    role: "3 years building global Shopify storefronts and e-commerce platforms",
    url: "https://nebulab.com/"
  },
  {
    name: "CourseShelf",
    role: "Founded a community-driven course review platform, built with AI",
    url: "https://thecourseshelf.com/"
  },
  {
    name: "TechSchool",
    role: "Open source education platform with 2K monthly visitors",
    url: "https://techschool.dev/"
  }
]

const stack = [
  "Elixir",
  "Phoenix",
  "React",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "GraphQL",
  "Claude Code"
]

export default async function WorkWithMe() {
  const { subscriberCount } = await getChannelStats()

  const services = [
    {
      title: "Startup Engineering",
      badge: "Available",
      badgeColor:
        "text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800",
      description:
        "Looking for a fullstack developer who can ship fast and own features end-to-end? I thrive in mid-stage startups where speed and quality both matter. 6+ years building products from zero to production.",
      highlights: [
        "Elixir, Phoenix, React, TypeScript, GraphQL",
        "AI integrations (OpenAI, Groq, Claude)",
        "0-to-1 product development and scaling",
        "10x productivity with AI-driven workflows"
      ]
    },
    {
      title: "Contract Work",
      badge: "Available",
      badgeColor:
        "text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800",
      description:
        "Available for focused contract engagements. I deliver fast without cutting corners, leveraging Claude Code to maintain a high level of output. Best for MVPs, AI features, and fullstack web applications.",
      highlights: [
        "MVPs and proof-of-concept builds",
        "AI feature integration into existing products",
        "B2B SaaS and admin dashboards",
        "Phoenix/React fullstack applications"
      ]
    },
    {
      title: "Content & Collabs",
      badge: "Open",
      badgeColor:
        "text-violet-600 dark:text-violet-400 border-violet-300 dark:border-violet-800",
      description: `I run a YouTube channel with ${formatNumber(subscriberCount)}+ subscribers where I teach web development. Always open to podcast appearances, guest videos, co-created content, and sponsorships. I speak English and Portuguese.`,
      highlights: [
        "Podcast and video guest appearances",
        "Technical content collaborations",
        "Sponsorships and partnerships",
        "Bilingual content (English & Portuguese)"
      ]
    }
  ]

  return (
    <main className="w-auto md:max-w-3xl mx-auto my-14 md:my-28">
      <h1 className="font-serif text-3xl md:text-4xl italic tracking-tight mb-3">
        Work with me
      </h1>
      <p className="text-sm md:text-base leading-relaxed opacity-60 mb-4">
        Fullstack developer specializing in AI-driven development. I ship fast,
        build products from scratch, and create content that reaches thousands
        of developers.
      </p>
      <hr className="w-12 border-t border-current opacity-20 mb-6 md:mb-8" />

      <div className="space-y-5 md:space-y-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-current/10 dark:border-current/20 rounded-lg p-5 md:p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">{service.title}</h2>
              <span
                className={`text-xs uppercase tracking-widest border rounded-sm px-2 py-0.5 ${service.badgeColor}`}
              >
                {service.badge}
              </span>
            </div>

            <p className="mb-4 leading-relaxed opacity-60 text-sm md:text-base">
              {service.description}
            </p>

            <ul className="list-disc list-inside space-y-1 opacity-40 text-sm">
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="mt-10 md:mt-14">
        <h2 className="font-serif text-2xl md:text-3xl italic tracking-tight mb-4">
          Track record
        </h2>
        <hr className="w-12 border-t border-current opacity-20 mb-6" />

        <div className="space-y-4">
          {track.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex flex-col gap-0.5 w-max"
            >
              <span className="text-sm md:text-base font-bold group-hover:opacity-80 transition-opacity">
                {item.name}{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 opacity-60">
                  &rarr;
                </span>
              </span>
              <span className="text-sm opacity-40 group-hover:opacity-60 transition-opacity">
                {item.role}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <h2 className="font-serif text-2xl md:text-3xl italic tracking-tight mb-4">
          Tech stack
        </h2>
        <hr className="w-12 border-t border-current opacity-20 mb-6" />

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs uppercase tracking-widest border border-current/10 dark:border-current/20 rounded-sm px-3 py-1.5 opacity-60"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 md:mt-14">
        <hr className="w-12 border-t border-current opacity-20 mb-6" />
        <p className="text-sm md:text-base leading-relaxed opacity-60 mb-4">
          Interested in working together? Send me an email and let&apos;s talk.
        </p>
        <a
          className="group w-max text-xs md:text-sm uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity duration-300"
          href="mailto:bergholz.daniel@gmail.com"
          title="Send email to Daniel Bergholz"
        >
          bergholz.daniel@gmail.com{" "}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </section>
    </main>
  )
}
