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
    <nav className="relative">
      <div className="flex justify-between items-center text-xl md:text-2xl">
        <Link href="/" className="font-bold" onClick={closeMenu}>
          BERGHOLZ
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/products" className={activeStyle("/products")}>
              products
            </Link>
          </li>
          <li>
            <Link href="/courses" className={activeStyle("/courses")} prefetch>
              courses
            </Link>
          </li>
          <li>
            <Link href="/blog" className={activeStyle("/blog")}>
              blog
            </Link>
          </li>
          <li>
            <Link href="/links" className={activeStyle("/links")}>
              links
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-700 py-4 z-50">
          <ul className="flex flex-col space-y-4 px-0">
            <li>
              <Link
                href="/products"
                className={`block text-lg ${activeStyle("/products")}`}
                onClick={closeMenu}
              >
                products
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className={`block text-lg ${activeStyle("/courses")}`}
                onClick={closeMenu}
                prefetch
              >
                courses
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block text-lg ${activeStyle("/blog")}`}
                onClick={closeMenu}
              >
                blog
              </Link>
            </li>
            <li>
              <Link
                href="/links"
                className={`block text-lg ${activeStyle("/links")}`}
                onClick={closeMenu}
              >
                links
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
