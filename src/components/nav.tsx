"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

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

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em]">
          <li>
            <Link href="/products" className={activeStyle("/products")}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/courses" className={activeStyle("/courses")} prefetch>
              Courses
            </Link>
          </li>
          <li>
            <Link href="/blog" className={activeStyle("/blog")}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/links" className={activeStyle("/links")}>
              Links
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-current/10 dark:border-current/20 py-6 z-50">
          <ul className="flex flex-col space-y-4 text-xs uppercase tracking-[0.2em]">
            <li>
              <Link
                href="/products"
                className={`block ${activeStyle("/products")}`}
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block ${activeStyle("/courses")}`}
                onClick={closeMenu}
                prefetch
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block ${activeStyle("/blog")}`}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/links"
                className={`block ${activeStyle("/links")}`}
                onClick={closeMenu}
              >
                Links
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
