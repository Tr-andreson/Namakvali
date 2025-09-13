import Link from "next/link"

export const Card = () => {
  return (
    <div className="cursor-pointer">
      <Link href={"/collections?id=2"}>
        <img className=" h-[296px] object-cover rounded-lg" src="/masala/1.png" />
      </Link>
      <p className="mt-2 ">Flavoured Seasoning Salt</p>
      {/* <h4>Icon</h4> */}
    </div>
  )
}
