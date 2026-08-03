import type { Locale } from "@/lib/i18n"
import type en from "./en.json"

// Loaded only from Server Components, so translations never reach the client
// bundle. Client components receive the strings they need as props.
export type Dictionary = typeof en

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((module) => module.default),
  pt: () => import("./pt.json").then((module) => module.default)
}

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]()
}
