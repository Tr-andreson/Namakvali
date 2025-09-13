import Link from "next/link"

export const Card = () => {
  return (
    <div className="cursor-pointer">
      <Link href={"/collections?id=2"}>
        <img className=" h-[296px] object-cover rounded-lg" src="/product/1.avif" />
      </Link>
      <p className="mt-2">Flavoured Seasoning Salt</p>
    </div>
  )
}
