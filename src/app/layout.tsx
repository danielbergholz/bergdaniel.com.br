import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Nav } from "@/components/nav"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Bergholz",
  description: "Daniel Bergholz is a Fullstack Developer and Content Creator",
  keywords: [
    "Daniel Bergholz",
    "Fullstack Developer",
    "Content Creator",
    "React.js",
    "Next.js",
    "Elixir",
    "Phoenix",
    "Programming",
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
    title: "Daniel Bergholz",
    url: "https://bergdaniel.com.br",
    description: "Daniel Bergholz is a Fullstack Developer and Content Creator",
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
    title: "Daniel Bergholz",
    description: "Daniel Bergholz is a Fullstack Developer and Content Creator",
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
  jobTitle: "Fullstack Developer",
  description: "Fullstack Developer and Content Creator from Brazil",
  nationality: "Brazilian",
  knowsAbout: [
    "Web Development",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Elixir",
    "Phoenix",
    "Node.js"
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
