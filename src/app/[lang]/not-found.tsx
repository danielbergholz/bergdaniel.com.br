import Link from "next/link"

import { boundaryStrings } from "@/dictionaries/boundary"
import { localePath, locales } from "@/lib/i18n"

// Server component with no params, headers, or client hooks — anything else
// breaks: client boundaries fall back to Next's default 404 in production,
// and dynamic APIs like headers() would force every route out of static
// generation. Instead it renders both languages and globals.css shows only
// the one matching the layout's <html lang> (see [data-i18n-only]).
export default function NotFound() {
  return (
    <main id="main">
      {locales.map((locale) => {
        const t = boundaryStrings[locale]
        return (
          <div
            key={locale}
            data-i18n-only={locale}
            className="text-left w-auto md:w-[500px] mx-auto my-48 md:my-56 flex-col gap-3 flex"
          >
            <h1 className="text-2xl md:text-3xl font-bold">
              {t.notFoundTitle}
            </h1>
            <h2 className="text-base md:text-xl">{t.notFoundBody}</h2>
            <Link
              href={localePath(locale, "/")}
              className="opacity-60 underline w-max text-base md:text-xl"
              title={t.homeTitle}
            >
              {t.home}
            </Link>
          </div>
        )
      })}
    </main>
  )
}
