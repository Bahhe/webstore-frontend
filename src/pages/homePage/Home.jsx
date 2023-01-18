import Categories from "./sections/Categories"
import Slider from "./sections/slider/Slider"
import VideoSection from "./sections/VideoSection"
import SectionTitle from "../../components/SectionTitle"
import SecondSlider from "./sections/secondSlider/SecondSlider"
import DoubleProduct from "./sections/DoubleProduct"
import ProductSlider from "./sections/lastSlider/ProductSlider"
import AfterSale from "./sections/AfterSale"
import Brands from "./sections/Brands"

const Home = () => {
  return (
    <>
      <Slider />
      <SectionTitle sectionTitle={"choose your laptop wisely"} display="none" />
      <VideoSection />
      <SectionTitle sectionTitle={"categories"} />
      <Categories />
      <SecondSlider />
      <DoubleProduct />
      <SectionTitle sectionTitle={"pick what's best for you"} />
      <ProductSlider />
      <AfterSale />
      <Brands />
    </>
  )
}

export default Home
