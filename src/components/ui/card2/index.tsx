import Link from "next/link"
import { YellowButton } from "../yellowButton"

export const Card2 = () => {
  return (
    <div>
      <Link href="/product/Product1">
        <img className="scale-90" src="/masala/2.png" />

      </Link>
      <h3>Flaboured Salt</h3>
      <div>
        <h4>Star</h4>
        <span>1299 Reviews</span>
        <h6>Rs. 429.00</h6>
        <YellowButton label="Add To Cart" />
      </div>
    </div>
  )
}
