export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    const formatted = (num / 1_000_000).toFixed(1)
    return `${formatted.replace(/\.0$/, "")}M`
  }
  if (num >= 1_000) {
    const formatted = (num / 1_000).toFixed(1)
    return `${formatted.replace(/\.0$/, "")}K`
  }
  return num.toString()
}

export function readableDate(date: string) {
  const parsedDate = new Date(date)
  const currentYear = new Date().getFullYear()
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric"
  }

  if (parsedDate.getFullYear() !== currentYear) {
    options.year = "numeric"
  }

  // Pin the locale so server and client format identically (the site is in
  // English); passing `undefined` uses each runtime's default and can trigger
  // a hydration mismatch for visitors whose browser locale differs.
  return parsedDate.toLocaleDateString("en-US", options)
}
