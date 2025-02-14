import Navigation from "@/components/Sections/Navigation"
import Hero from "@/components/Sections/Hero"
import EmojiFeatureSection from "@/components/Sections/emoji-feature-section";
import FeatureSection from "@/components/Sections/feature-sections";
import AuctionsSection from "@/components/Sections/Live-auctions";
import SalesOffers from "@/components/Sections/Sale-Offers";
import PopularAuctions from "@/components/Sections/Popular-Auctions";
import Cursus from "@/components/Sections/Cursus";
import Marquee from "@/components/Sections/Marquee";
import Footer from "@/components/Sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation/>
      <Hero/>
      <AuctionsSection/>
      <FeatureSection/>
      <SalesOffers/>
      <EmojiFeatureSection/>
      <hr />
      <PopularAuctions/>
      <Cursus/>
      <Marquee/>
      <Footer/>
    </>
  );
}
