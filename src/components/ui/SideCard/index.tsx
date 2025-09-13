import { Button } from "../Button"

export const SideCardLeft = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
      <img className="" src={"/banner/3.jpg"} />
      <div className="space-y-4 p-10">
        <h2>Try Our Pahadi Flavour Salt</h2>
        <h4>A flavoured salt with Himalayan herbs hand-ground in traditional Sil-Batta by women of the Namakwali community.</h4>
        <Button label="Shop Now" />
      </div>
    </div>
  )
}


export const SideCardRight = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
      <div className="space-y-4 p-10">
        <h2>Try Our A2 Badri Cow Ghee</h2>
        <h4>Badri Cow Ghee is made from the Badri cow's milk, which is a native cattle of the Himalayan region.  These cows feed on fresh grass & herbs present in the hilly areas, which makes their milk and ghee highly nutritious. Badri cow's milk contains A2 Beta Casein.</h4>
        <Button label="Shop Now" />
      </div>

      <img className="" src={"/banner/3.jpg"} />
    </div>
  )
}
