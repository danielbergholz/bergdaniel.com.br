"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useId, useRef, useState } from "react"

import { ExternalLink } from "@/components/icons"

const navLinks = [
  { href: "/videos", label: "Videos", prefetch: true },
  { href: "/courses", label: "Courses", prefetch: true },
  { href: "/products", label: "Products" },
  { href: "/work-with-me", label: "Work with me" }
]

const JOIN_URL = "https://www.youtube.com/@DanielBergholz/join"

const internalLinkBase =
  "text-sm normal-case tracking-normal font-medium transition-colors"

const joinButtonStyle =
  "inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-violet-700 dark:text-violet-300 border border-violet-400/70 dark:border-violet-600/70 rounded-sm px-3 py-1.5 hover:bg-violet-50 dark:hover:bg-violet-950/40 hover:border-violet-500 dark:hover:border-violet-500 transition-colors"

export function Nav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const isActive = (path: string) => pathname === path

  const linkStyle = (path: string) => {
    if (isActive(path)) {
      return `${internalLinkBase} text-foreground underline underline-offset-4 decoration-current/50`
    }
    return `${internalLinkBase} text-foreground/60 hover:text-foreground`
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

  const joinLink = (
    <a
      href={JOIN_URL}
      target="_blank"
      rel="noreferrer noopener"
      onClick={closeMenu}
      className={joinButtonStyle}
      aria-label="Join on YouTube (opens in a new tab)"
    >
      YouTube Members
      <ExternalLink />
    </a>
  )

  return (
    <nav
      className="relative pb-5 border-b border-current/10 dark:border-current/20"
      aria-label="Main"
    >
      <div className="flex justify-between items-center gap-4">
        <Link
          href="/"
          className="font-bold text-lg md:text-xl tracking-[0.15em] shrink-0"
          onClick={closeMenu}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          BERGHOLZ
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
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
          </ul>

          <div
            className="h-5 w-px bg-current/15 dark:bg-current/25 shrink-0"
            aria-hidden="true"
          />

          {joinLink}
        </div>

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
            <div className="flex flex-col gap-6 px-6 md:px-10">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  Pages
                </p>
                <ul className="flex flex-col gap-3">
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
                </ul>
              </div>

              <div className="border-t border-current/10 dark:border-current/20 pt-6">
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                  YouTube
                </p>
                {joinLink}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
