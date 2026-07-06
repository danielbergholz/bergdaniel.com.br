"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useId, useRef, useState } from "react"

const navLinks = [
  { href: "/videos", label: "Videos", prefetch: true },
  { href: "/courses", label: "Courses", prefetch: true },
  { href: "/products", label: "Products" },
  { href: "/work-with-me", label: "Work with me" }
]

const JOIN_URL = "https://www.youtube.com/@DanielBergholz/join"

const joinButtonStyle =
  "inline-block text-violet-600 dark:text-violet-400 border border-violet-400/60 dark:border-violet-700/60 rounded-sm px-3 py-1.5 hover:border-violet-500 dark:hover:border-violet-500 transition-colors"

export function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const isActive = (path: string) => pathname === path

  const linkStyle = (path: string) => {
    if (isActive(path)) {
      return "font-bold underline underline-offset-4 decoration-current/40"
    }
    return "opacity-60 dark:opacity-70 hover:opacity-100 transition-opacity"
  }

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  const toggleMenu = () => setIsMenuOpen((open) => !open)

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu()
        toggleRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    focusable?.[0]?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMenuOpen, closeMenu])

  return (
    <nav className="relative pb-5 border-b border-current/10 dark:border-current/20">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-lg md:text-xl tracking-[0.15em]"
          onClick={closeMenu}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          BERGHOLZ
        </Link>

        <ul className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em]">
          {navLinks.map(({ href, label, prefetch }) => (
            <li key={href}>
              <Link
                href={href}
                className={linkStyle(href)}
                prefetch={prefetch}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noreferrer noopener"
              className={joinButtonStyle}
            >
              Join
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 -mr-2 space-y-1.5 cursor-pointer"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
        >
          <span
            className={`block w-5 h-[1px] bg-current transition-all duration-300 motion-reduce:transition-none ${
              isMenuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1px] bg-current transition-all duration-300 motion-reduce:transition-none ${
              isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="md:hidden fixed inset-0 bg-black/40 dark:bg-black/60 z-40 cursor-default"
            onClick={closeMenu}
            tabIndex={-1}
          />
          <div
            ref={menuRef}
            id={menuId}
            className="md:hidden fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top,0px))] bottom-0 bg-white dark:bg-black border-b border-current/10 dark:border-current/20 py-6 z-50 overflow-y-auto"
            style={{
              paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))"
            }}
          >
            <ul className="flex flex-col space-y-4 text-xs uppercase tracking-[0.2em] px-6 md:px-10">
              {navLinks.map(({ href, label, prefetch }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-1 ${linkStyle(href)}`}
                    onClick={closeMenu}
                    prefetch={prefetch}
                    aria-current={isActive(href) ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={JOIN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={closeMenu}
                  className={`inline-block ${joinButtonStyle}`}
                >
                  Join
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}
