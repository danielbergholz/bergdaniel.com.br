type Props = {
  href: string
  title: string
  children: React.ReactNode
}

export function Link({ href, title, children }: Props) {
  return (
    <a
      className="group border border-current/10 dark:border-current/20 rounded-lg px-5 py-3 flex items-center gap-3 hover:border-current/30 dark:hover:border-current/40 transition-all duration-300 w-52 justify-center"
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer noopener"
    >
      <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {children}
      </span>
      <span className="text-base tracking-wide">{title}</span>
    </a>
  )
}
