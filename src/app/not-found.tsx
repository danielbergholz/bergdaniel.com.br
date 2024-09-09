import Link from "next/link"

export default function NotFound() {
  return (
    <main className="text-left w-auto md:w-[500px] mx-auto my-48 md:my-56 flex flex-col gap-3">
      <h1 className="text-xl md:text-2xl font-bold">Whoops 👀</h1>
      <h2 className="text-sm md:text-base">
        It seems like you&apos;re lost, let me help you find your way back
      </h2>
      <Link
        href="/"
        className="opacity-60 underline w-max text-sm md:text-base"
        title="Go back to the homepage"
      >
        Home
      </Link>
    </main>
  )
}
