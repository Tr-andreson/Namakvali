import { Logo } from "@/components/logo"
import { BsCart3 } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { LuSearch } from "react-icons/lu"

export const Navbar = () => {
  return (
    <div className="h-[7vh] flex items-center contain justify-between">
      <Logo />
      <div className='flex gap-8'>
        <LuSearch size={22} />
        <IoPersonOutline size={22} />
        <BsCart3 size={22} />
      </div>
    </div>
  )
}
