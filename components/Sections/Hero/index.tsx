import SearchBar from "./searchBar"
import Image from "next/image"
import NFTCard from "./nftCard"
import { brands } from "@/lib/data"

export default function Hero() {
  const nftCards = [
    {
      className: "left-[10%] top-[30%] sm:left-[8%] sm:top-[20%] lg:left-[8%] lg:top-[30%]",
      price: "2.55",
      src: "/hero/square2.png",
    },
    {
      className: "right-[5%] top-[35%] sm:right-[10%] sm:top-[18%] lg:right-[10%] lg:top-[25%]",
      price: "2.55",
      src: "/hero/square1.png",
    },
    {
      className: "left-[12%] bottom-[20%] sm:left-[15%] sm:bottom-[25%] lg:left-[18%] lg:bottom-[28%] hidden lg:block",
      price: "2.55",
      src: "/hero/square4.png",
    },
    {
      className:
        "right-[8%] bottom-[15%] sm:right-[12%] sm:bottom-[18%] lg:right-[18%] lg:bottom-[19%] hidden sm:block",
      price: "2.55",
      src: "/hero/square5.png",
    },
    {
      className:
        "left-[-1%] bottom-[10%] sm:left-[-1.5%] sm:bottom-[12%] lg:left-[-1.5%] lg:bottom-[15%] hidden md:block",
      price: "0.12",
      src: "/hero/square6.png",
    },
    {
      className: "right-[3%] bottom-[30%] sm:right-[4%] sm:bottom-[35%] lg:right-[5%] lg:bottom-[40%] hidden lg:block",
      price: "0.12",
      src: "/hero/square3.png",
    },
  ]

  return (
    <div className="relative pt-24 sm:pt-10 lg:pt-20 bg-[url('/hero/background.svg')] bg-no-repeat bg-cover bg-center overflow-hidden">
      {/* NFT Cards */}
      {nftCards.map((card) => (
        <NFTCard key={card.src} className={card.className} price={card.price} src={card.src} />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center pt-4 sm:pt-8 lg:pt-16">
          {/* NFT Text */}
          <div className="mb-4 text-center text-xs sm:text-sm font-medium uppercase tracking-wider text-white/60">
            NON FUNGIBLE TOKENS
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-normal text-white">
            <span className="flex items-center justify-center gap-2 mr-4 sm:mr-8 lg:mr-20">
              <span>A new NFT</span>
              <Image
                src="/hero/hero-vector1.svg"
                alt="Decorative element"
                width={25}
                height={80}
                className="md:inline w-4 sm:w-5 md:w-6 lg:w-8"
              />
            </span>

            <span className="flex items-center justify-center gap-2 sm:gap-3 ml-2 sm:ml-4 lg:ml-10">
              <Image
                src="/hero/hero-vector2.svg"
                alt="Decorative element"
                width={45}
                height={80}
                className="md:inline w-6 sm:w-8 md:w-10 lg:w-12"
              />
              <span>Experience</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base md:text-lg text-white/60">
            Discover, collect and sell
          </p>

          {/* Search Bar */}
          <div className="mb-8 sm:mb-12 lg:mb-16 w-full max-w-xl px-4">
            <SearchBar />
          </div>

          {/* Brand Logos */}
          <div className="mx-auto mb-8 sm:mb-12 lg:mb-16 grid max-w-4xl grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 opacity-60 md:grid-cols-4">
            {brands.map((brand) => (
              <div key={brand.alt} className="flex items-center justify-center">
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={brand.alt}
                  width="85"
                  height="45"
                  className="max-h-[45px] sm:max-h-[65px] md:max-h-[75px] lg:max-h-[85px] max-w-[25px] sm:max-w-[35px] md:max-w-[40px] lg:max-w-[45px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

