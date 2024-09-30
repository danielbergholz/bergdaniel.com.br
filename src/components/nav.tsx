"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { HamburguerMenu } from "./hamburguer-menu"

export function Nav() {
  const pathname = usePathname()

  const activeStyle = (path: string) =>
    pathname === path ? "" : "opacity-60 hover:opacity-100 transition-opacity"

  return (
    <nav className="flex justify-between items-center text-xl md:text-2xl">
      <Link href="/" className="font-bold">
        BERGHOLZ
      </Link>

      <ul className="hidden sm:flex space-x-2 md:space-x-4">
        <li>
          <Link href="/links" className={activeStyle("/links")}>
            links
          </Link>
        </li>
        <li>
          <Link href="/blog" className={activeStyle("/blog")}>
            blog
          </Link>
        </li>
        <li>
          <Link href="/courses" className={activeStyle("/courses")}>
            courses
          </Link>
        </li>
      </ul>

      <HamburguerMenu pathname={pathname} />
    </nav>
  )
}
