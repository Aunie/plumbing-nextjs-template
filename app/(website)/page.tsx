import HeroSection from "./components/HeroSection";
import SliderComponent from "./components/SliderComponent";
import Testimonials from "./components/Testimonials";
import TopFeaturedProducts from "./components/TopFeaturedProducts"
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <SliderComponent />
      <HeroSection />
      <TopFeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}