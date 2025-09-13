import { Logo } from "@/components/logo"
import { BsCart3 } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { LuSearch } from "react-icons/lu"

export const Navbar = () => {
  return (
    <div className="h-[7vh] flex items-center contain justify-between">
      <Logo />
      {/* Navbar items */}
      <div className="lg:flex items-center gap-4 hidden ">
        <h4 className="hover:cursor-pointer hover:underline transition">Home</h4>
        <h4>About</h4>
        <h4>Category</h4>
        <h4>Products</h4>
        <h4>Contact Us</h4>
      </div>
      <div className='flex gap-8'>
        <LuSearch size={22} />
        <IoPersonOutline size={22} />
        <BsCart3 size={22} />
      </div>
    </div>
  )
}
