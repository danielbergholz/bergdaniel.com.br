import assert from "node:assert/strict"
import fs from "node:fs"
import path from "node:path"
import { test } from "node:test"

type Json = string | number | boolean | null | Json[] | { [key: string]: Json }

function loadDictionary(name: string): Json {
  const file = path.join(import.meta.dirname, `${name}.json`)
  return JSON.parse(fs.readFileSync(file, "utf8"))
}

// Compare structure, not content: same keys at every level, arrays of the
// same length. A key added to one dictionary but not the other fails here
// instead of rendering a missing string in production.
function assertSameShape(a: Json, b: Json, at: string) {
  if (Array.isArray(a) || Array.isArray(b)) {
    assert.ok(
      Array.isArray(a) && Array.isArray(b),
      `${at}: one dictionary has an array, the other does not`
    )
    assert.equal(a.length, b.length, `${at}: arrays differ in length`)
    a.forEach((item, index) => {
      assertSameShape(item, b[index], `${at}[${index}]`)
    })
    return
  }

  if (
    typeof a === "object" &&
    a !== null &&
    typeof b === "object" &&
    b !== null
  ) {
    assert.deepEqual(
      Object.keys(a).sort(),
      Object.keys(b).sort(),
      `${at}: keys differ`
    )
    for (const key of Object.keys(a)) {
      assertSameShape(
        a[key],
        (b as { [key: string]: Json })[key],
        `${at}.${key}`
      )
    }
    return
  }

  assert.equal(typeof a, typeof b, `${at}: value types differ`)
}

test("en and pt dictionaries have the same shape", () => {
  const en = loadDictionary("en")
  const pt = loadDictionary("pt")
  assertSameShape(en, pt, "dictionary")
})

test("interpolation placeholders match across locales", () => {
  const placeholderPattern = /\{[a-zA-Z]+\}/g

  function collectPlaceholders(
    value: Json,
    at: string,
    out: Map<string, string[]>
  ) {
    if (typeof value === "string") {
      const found = value.match(placeholderPattern)
      if (found) out.set(at, found.sort())
      return
    }
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        collectPlaceholders(item, `${at}[${index}]`, out)
      })
      return
    }
    if (typeof value === "object" && value !== null) {
      for (const key of Object.keys(value)) {
        collectPlaceholders(value[key], `${at}.${key}`, out)
      }
    }
  }

  const enPlaceholders = new Map<string, string[]>()
  const ptPlaceholders = new Map<string, string[]>()
  collectPlaceholders(loadDictionary("en"), "dictionary", enPlaceholders)
  collectPlaceholders(loadDictionary("pt"), "dictionary", ptPlaceholders)

  assert.deepEqual(
    Object.fromEntries(enPlaceholders),
    Object.fromEntries(ptPlaceholders)
  )
})
