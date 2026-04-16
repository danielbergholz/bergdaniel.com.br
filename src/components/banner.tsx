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
      <div className="border border-current/10 dark:border-current/20 rounded-lg px-4 py-3 text-center transition-all duration-300 hover:border-current/30 dark:hover:border-current/40">
        <p className="text-sm sm:text-base tracking-wide opacity-70">{text}</p>
      </div>
    </LinkComponent>
  )
}
