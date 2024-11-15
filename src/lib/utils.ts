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

  return parsedDate.toLocaleDateString(undefined, options)
}
