import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import Footer from "@/components/Footer";
import MarqueeSection from "@/components/MarqueeSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import About from "@/components/AboutSection";


export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
      <FeaturedTiles></FeaturedTiles>
      <About></About>
      <FAQSection></FAQSection>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </div>
  );
}
