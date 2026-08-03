import assert from "node:assert/strict"
import { test } from "node:test"
import {
  hasLocale,
  localePath,
  pageAlternates,
  stripLocalePrefix
} from "./i18n.ts"

test("hasLocale accepts supported locales only", () => {
  assert.equal(hasLocale("pt"), true)
  assert.equal(hasLocale("en"), true)
  assert.equal(hasLocale("es"), false)
  assert.equal(hasLocale(""), false)
})

test("localePath leaves the default locale unprefixed", () => {
  assert.equal(localePath("pt", "/"), "/")
  assert.equal(localePath("pt", "/videos"), "/videos")
  assert.equal(localePath("en", "/"), "/en")
  assert.equal(localePath("en", "/videos"), "/en/videos")
})

test("stripLocalePrefix inverts localePath for public URLs", () => {
  assert.equal(stripLocalePrefix("/"), "/")
  assert.equal(stripLocalePrefix("/videos"), "/videos")
  assert.equal(stripLocalePrefix("/en"), "/")
  assert.equal(stripLocalePrefix("/en/videos"), "/videos")
  // The default locale's prefix only exists internally (proxy rewrite), but
  // strip it too so callers can't build double-prefixed paths from it.
  assert.equal(stripLocalePrefix("/pt"), "/")
  assert.equal(stripLocalePrefix("/pt/videos"), "/videos")
  // Not a locale prefix, just a path that starts with "en".
  assert.equal(stripLocalePrefix("/enigma"), "/enigma")
})

test("pageAlternates builds canonical and hreflang pairs", () => {
  assert.deepEqual(pageAlternates("pt", "/videos"), {
    canonical: "/videos",
    languages: {
      "pt-BR": "/videos",
      en: "/en/videos",
      "x-default": "/videos"
    }
  })
  assert.equal(pageAlternates("en", "/videos").canonical, "/en/videos")
})
