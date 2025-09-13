import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/card"

export const ShopByCategory = () => {
  return (
    <div>
      <h2>Shop By Category</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='flex items-center justify-center mt-6'>
        <Button label="View More" />
      </div>
    </div>

  )
}
