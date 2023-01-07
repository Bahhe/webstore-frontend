import Categories from "./sections/Categories"
import Slider from "./sections/slider/Slider"
import VideoSection from "./sections/VideoSection"
import SectionTitle from "../../components/SectionTitle"
import SecondSlider from "./sections/secondSlider/SecondSlider"
import DoubleProduct from "./sections/DoubleProduct"
import ProductSlider from "./sections/lastSlider.js/ProductSlider"
import AfterSale from "./sections/AfterSale"
import Brands from "./sections/Brands"

const Home = () => {
  return (
    <>
      <Slider />
      <VideoSection />
      <SectionTitle sectionTitle={"categories"} />
      <Categories />
      <SecondSlider />
      <DoubleProduct />
      <SectionTitle sectionTitle={"top on this week"} />
      <ProductSlider />
      <AfterSale />
      <Brands />
    </>
  )
}

export default Home
