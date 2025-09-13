import { GetCollections } from "@/components/module/collections/get-collections"
import { CircularProgress } from "@/components/ui/circular-product"

const Collections = () => {
  return (
    <div className="space-y-8 p-4 contain">
      <div className="flex items-center justify-center gap-4 contain">
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
      </div>
      <h2>Collections</h2>
      <GetCollections />
    </div>
  )
}

export default Collections
