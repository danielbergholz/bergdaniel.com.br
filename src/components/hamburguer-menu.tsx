"use client"

import Link from "next/link"
import { useState } from "react"
import { Hamburguer, X } from "./icons"

type Props = React.HTMLAttributes<HTMLDivElement> & {
  pathname: string
}

export function HamburguerMenu({ pathname, ...rest }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const activeStyle = (path: string) =>
    pathname === path ? "" : "opacity-60 dark:opacity-70"

  return (
    <div className="sm:hidden flex" {...rest}>
      <button
        type="button"
        onClick={toggleMenu}
        className="text-2xl bg-transparent border-none cursor-pointer"
      >
        <Hamburguer />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background shadow-lg transform transition-transform duration-200 ease-in-out z-50 border-l border-l-gray-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 text-xl md:text-2xl">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-2xl bg-transparent border-none cursor-pointer"
          >
            <X />
          </button>
        </div>

        <ul className="p-6 space-y-4">
          <li>
            <Link
              href="/links"
              onClick={toggleMenu}
              className={activeStyle("/links")}
            >
              Links
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className={activeStyle("/blog")}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              onClick={toggleMenu}
              className={activeStyle("/courses")}
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close the menu when clicking outside */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-black opacity-50 z-40 border-none cursor-pointer"
          onClick={toggleMenu}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              toggleMenu()
            }
          }}
          aria-label="Close menu"
        />
      )}
    </div>
  )
}
