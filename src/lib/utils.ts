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

// 977 -> "16:17", 3723 -> "1:02:03"
export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const pad = (n: number) => n.toString().padStart(2, "0")
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`
}

// ISO-8601 video duration ("PT16M17S", "PT1H2M3S") -> seconds.
export function parseIsoDuration(iso: string): number {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 0
  return (
    Number(match[1] || 0) * 3600 +
    Number(match[2] || 0) * 60 +
    Number(match[3] || 0)
  )
}
