type Props = {
  href: string
  title: string
  children: React.ReactNode
}

export function Link({ href, title, children }: Props) {
  return (
    <a
      className="border-2 rounded-md border-gray-500 px-4 py-2 flex items-center gap-2 hover:opacity-70 transition-opacity w-40 justify-center"
      href={href}
      title={title}
      target="_blank"
      rel="noopener"
    >
      {children}
      <span>{title}</span>
    </a>
  )
}