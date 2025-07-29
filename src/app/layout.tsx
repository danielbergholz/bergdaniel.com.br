import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Nav } from "@/components/nav"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Bergholz - Software Engineer, Content Creator & Solopreneur",
  description:
    "Daniel Bergholz is a Software Engineer, Content Creator and Solopreneur from Brazil building SaaS products and teaching programming to developers",
  keywords: [
    "Daniel Bergholz",
    "Software Engineer",
    "Content Creator",
    "Solopreneur",
    "SaaS Products",
    "CourseShelf",
    "Programming",
    "Software Development",
    "React.js",
    "Next.js",
    "Elixir",
    "Phoenix",
    "Web Development",
    "JavaScript",
    "TypeScript"
  ],
  authors: [{ name: "Daniel Bergholz", url: "https://bergdaniel.com.br" }],
  creator: "Daniel Bergholz",
  publisher: "Daniel Bergholz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    siteName: "Daniel Bergholz",
    title: "Daniel Bergholz - Software Engineer, Content Creator & Solopreneur",
    url: "https://bergdaniel.com.br",
    description:
      "Daniel Bergholz is a Software Engineer, Content Creator and Solopreneur from Brazil building SaaS products and teaching programming",
    images: {
      url: "https://bergdaniel.com.br/og.png",
      width: 1200,
      height: 630
    }
  },
  twitter: {
    site: "@danielbergholz",
    creator: "@danielbergholz",
    card: "summary_large_image",
    title: "Daniel Bergholz - Software Engineer, Content Creator & Solopreneur",
    description:
      "Daniel Bergholz is a Software Engineer, Content Creator and Solopreneur from Brazil building SaaS products and teaching programming",
    images: {
      url: "https://bergdaniel.com.br/og.png",
      width: 1200,
      height: 630
    }
  }
}

// JSON-LD structured data for Person schema
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Bergholz",
  url: "https://bergdaniel.com.br",
  image: "https://bergdaniel.com.br/og.png",
  jobTitle: ["Software Engineer", "Content Creator", "Solopreneur"],
  description:
    "Software Engineer, Content Creator and Solopreneur from Brazil, building SaaS products while teaching programming to developers",
  nationality: "Brazilian",
  knowsAbout: [
    "Software Engineering",
    "Programming",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Elixir",
    "Phoenix",
    "Node.js",
    "SaaS Development",
    "Content Creation",
    "Product Development"
  ],
  sameAs: [
    "https://www.youtube.com/@DanielBergholz",
    "https://twitter.com/danielbergholz",
    "https://www.linkedin.com/in/daniel-gobbi-bergholz/",
    "https://github.com/danielbergholz",
    "https://dev.to/danielbergholz"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "bergholz.daniel@gmail.com",
    contactType: "Personal"
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="canonical" href="https://bergdaniel.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="color-scheme" content="light dark" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Safe JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema)
          }}
        />

        {/* Analytics */}
        <script
          defer
          data-domain="bergdaniel.com.br"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={`${poppins.className} px-6 md:px-10 py-5 md:py-6`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
