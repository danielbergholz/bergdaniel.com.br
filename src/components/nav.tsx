"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/courses", label: "Courses", prefetch: true },
  { href: "/blog", label: "Blog" },
  { href: "/links", label: "Links" },
  { href: "/work-with-me", label: "Work with me" }
]

export function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const activeStyle = (path: string) =>
    pathname === path
      ? ""
      : "opacity-60 dark:opacity-70 hover:opacity-100 transition-opacity"

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="relative pb-5 border-b border-current/10 dark:border-current/20">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-lg md:text-xl tracking-[0.15em]"
          onClick={closeMenu}
        >
          BERGHOLZ
        </Link>

        <ul className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em]">
          {navLinks.map(({ href, label, prefetch }) => (
            <li key={href}>
              <Link
                href={href}
                className={activeStyle(href)}
                prefetch={prefetch}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1px] bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1px] bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-current/10 dark:border-current/20 py-6 z-50">
          <ul className="flex flex-col space-y-4 text-xs uppercase tracking-[0.2em]">
            {navLinks.map(({ href, label, prefetch }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block ${activeStyle(href)}`}
                  onClick={closeMenu}
                  prefetch={prefetch}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
