import { Banner } from "@/components/module/banner";
import { BestSelling } from "@/components/module/best-selling";
import { Feature } from "@/components/module/Feature";
import { Footer } from "@/components/module/Footer";
import { Header } from "@/components/module/header";
import { Navbar } from "@/components/module/navbar";
import { OrganicCooking } from "@/components/module/organicCooking";
import { ShopByCategory } from "@/components/module/shop-by-category";

export default function HomePage() {


  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Banner />
      <div className="contain mt-8">
        <ShopByCategory />
        <BestSelling />
        <OrganicCooking />
      </div>
      <Feature />
    </ >
  )
}
