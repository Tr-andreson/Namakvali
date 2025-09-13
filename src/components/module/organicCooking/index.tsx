import { SideCardLeft, SideCardRight } from "@/components/ui/SideCard"

export const OrganicCooking = () => {
  let youtubeUrl = "https://www.youtube.com/watch?v=qzN7UY4D8VQ"
  return (
    <div>
      <h2>Organic Cooking & More</h2>
      <iframe className="w-full h-[50vh]" src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
      <SideCardLeft />
      <SideCardRight />

    </div>
  )
}
