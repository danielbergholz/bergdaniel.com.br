import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Nav } from "@/components/nav"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daniel Bergholz",
  description:
    "Daniel Bergholz is a Senior Frontend Engineer and Content Creator",
  openGraph: {
    type: "website",
    siteName: "Daniel Bergholz",
    title: "Daniel Bergholz",
    url: "https://danielbergholz.com",
    description:
      "Daniel Bergholz is a Senior Frontend Engineer and Content Creator"
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
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={`${poppins.className} px-6 md:px-10 py-5 md:py-6`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
