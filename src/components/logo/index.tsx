import Link from "next/link"

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img src="/logo1.png" className="w-[40px]" />
        INDU
      </Link>
    </div>
  )
}
