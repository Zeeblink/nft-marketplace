import React from 'react';
import SearchBar from "./searchBar";
import Image from "next/image";
import NFTCard from "./nftCard";

export default function Hero() {
  const brands = [
    {
      src: "/brand-Logos/ritter-sport.svg",
      alt: "Ritter Sport",
    },
    {
      src: "/brand-Logos/Nike.svg",
      alt: "Nike",
    },
    {
      src: "/brand-Logos/Adidas.svg",
      alt: "Adidas",
    },
    {
      src: "/brand-Logos/New-Holland.svg",
      alt: "New Holland",
    },
  ];

  const nftCards = [
    {
      className: "left-[8%] top-[30%]",
      price: "2.55",
      src: "/hero/square2.png"
    },
    {
      className: "right-[10%] top-[25%]",
      price: "2.55",
      src: "/hero/square1.png"
    },
    {
      className: "left-[18%] bottom-[28%]",
      price: "2.55",
      src: "/hero/square4.png"
    },
    {
      className: "right-[18%] bottom-[19%]",
      price: "2.55",
      src: "/hero/square5.png"
    },
    {
      className: "left-[-1.5%] bottom-[15%]",
      price: "0.12",
      src: "/hero/square6.png"
    },
    {
      className: "right-[5%] bottom-[40%]",
      price: "0.12",
      src: "/hero/square3.png"
    },
  ];

  return (
    <div className="relative pt-20 bg-[url('/hero/background.svg')] bg-no-repeat bg-cover bg-center overflow-hidden">
      {/* NFT Cards */}
      {nftCards.map((card) => (
        <NFTCard key={card.src} className={card.className} price={card.price} src={card.src} />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen flex-col items-center justify-center pt-16">
          {/* NFT Text */}
          <div className="mb-4 text-center text-sm font-medium uppercase tracking-wider text-white/60">
            NON FUNGIBLE TOKENS
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-center text-4xl font-bold tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="flex items-center justify-center gap-2 mr-20">
              <span>A new NFT</span>
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
          <p className="mb-8 text-center text-base text-white/60 sm:text-lg">
            Discover, collect and sell
          </p>

          {/* Search Bar */}
          <div className="mb-16 w-full max-w-xl px-4">
            <SearchBar />
          </div>

          {/* Brand Logos */}
          <div className="mx-auto mb-16 grid max-w-4xl grid-cols-2 gap-20 opacity-60 md:grid-cols-4">
            {brands.map((brand) => (
              <div key={brand.alt} className="flex items-center justify-center">
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={brand.alt}
                  width="85"
                  height="45"
                  className="max-h-[85px] max-w-[45px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}