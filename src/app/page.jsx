import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import Footer from "@/components/Footer";
import MarqueeSection from "@/components/MarqueeSection";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
      <FeaturedTiles></FeaturedTiles>
      <Footer></Footer>
    </div>
  );
}
