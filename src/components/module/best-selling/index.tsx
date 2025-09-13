import { Button } from "@/components/ui/Button"
import { Card2 } from "@/components/ui/card2"

export const BestSelling = () => {
  return (
    <div>
      <h2>Best Selling</h2>
      <div className='grid lg:grid-cols-4 gap-8'>
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <div className="flex items-center justify-center">
        <Button label="View All" />

      </div>
    </div>
  )
}
