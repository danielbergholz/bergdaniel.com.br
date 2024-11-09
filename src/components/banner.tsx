import Link from "next/link"

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string
  href: string
}

export function Banner({ text, href, ...rest }: Props) {
  const isExternal = href.startsWith("http")

  const LinkComponent = isExternal ? "a" : Link
  rest = isExternal
    ? { target: "_blank", rel: "noopener noreferrer", ...rest }
    : rest

  return (
    <LinkComponent href={href} className="w-full max-w-3xl mx-auto" {...rest}>
      <div className="border rounded-md px-3 py-2 text-center transition-all duration-300 border-amber-500 dark:border-amber-400 shadow-[0_0_10px_rgba(252,211,77,0.5)] hover:opacity-80">
        <p className="text-amber-500 dark:text-amber-300 text-sm sm:text-base md:text-lg font-medium">
          {text}
        </p>
      </div>
    </LinkComponent>
  )
}
