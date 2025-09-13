import { GoArrowRight } from "react-icons/go"

export const Header = () => {
  return (
    <div className="bg-[#f60340] h-[4vh] flex items-center   justify-center">
      <div className="flex items-center gap-4">
        <h4 className="text-white text-center underline text-xs">Free Brand Cow Ghee on all Orders Above</h4>
        <GoArrowRight className="text-white" size={18} />
      </div>
    </div>
  )
}
