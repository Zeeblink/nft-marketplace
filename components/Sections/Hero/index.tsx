import SearchBar from "./searchBar";
import BrandLogos from "./brandLogos";
import Image from "next/image";


export default function Hero() {
  return (
    <div className="relative pt-20 bg-[url('/hero/background.svg')] bg-no-repeat bg-cover bg-center">
      {/* Vector Decorations */}
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center pt-16">
          {/* NFT Text */}
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-white/60">Non Fungible Tokens</div>
          
          {/* Heading */}
          <h1 className="mb-5 text-center text-4xl font-bold tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">

            <span className="flex items-center justify-center gap-2 mr-20">
              <span> A new NFT </span>
              <Image
                src="/hero/hero-vector1.svg"
                alt="Decorative element"
                width={25}
                height={80}
                className="hidden md:inline"
              />
            </span>

            <span className="flex items-center justify-center gap-3 ml-10">
              <Image
                src="/hero/hero-vector2.svg"
                alt="Decorative element"
                width={45}
                height={80}
                className="hidden md:inline"
              />
              <span>Experience</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 text-center text-base text-white/60 sm:text-lg">Discover, collect and sell</p>

          {/* Search Bar */}
          <div className="mb-16 w-full max-w-xl px-4">
            <SearchBar />
          </div>

          {/* Brand Logos */}
          <BrandLogos />
        </div>
      </div>
    </div>
  )
}