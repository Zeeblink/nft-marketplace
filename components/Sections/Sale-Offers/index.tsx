"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import TopNFTItems from "./top-nft-items"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import AuctionCard2 from "./auction-card2"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"


export default function SalesOffers() {

  const Auctions = [
    {
      image: "/topNFTs/image.png",
      title: "Vulputate felis purus viverra morbi feget",
      price: "2.55 ETH",
      timeLeft: "22:59 min left",
      biddersCount: 35,
      liked: true,
      likes: 120,
    },
    {
      image: "/auctions/auction-image2.png",
      title: "Dui accumsan leo vestibulum ornare eu",
      price: "3.19 ETH",
      timeLeft: "2:41 min left",
      biddersCount: 101,
      liked: false,
      likes: 570,
    },
    {
      image: "/auctions/auction-image3.png",
      title: "Senectus adipiscing nascetur accumsan etiam",
      price: "1.11 ETH",
      timeLeft: "22:59 min left",
      biddersCount: 12,
      liked: true,
      likes: 98,
    },

  ]

  const items = [
    {
      image: "/topNfts/image1.png",
      title: "Vulputate felis purus viverra morbi feget",
      time: "22:59 min left",
      price: "2.55 ETH",
      biddersCount: "101 people are bidding",
      liked: true,
    },
    {
      image: "/topNfts/image2.png",
      title: "Vulputate felis purus viverra morbi feget",
      time: "22:59 min left",
      price: "2.55 ETH",
      biddersCount: "101 people are bidding",
      liked: false,
    },
    {
      image: "/topNfts/image3.png",
      title: "Vulputate felis purus viverra morbi feget",
      time: "22:59 min left",
      price: "2.55 ETH",
      biddersCount: "101 people are bidding",
      liked: false,
    },
    {
      image: "/topNfts/image4.png",
      title: "Vulputate felis purus viverra morbi feget",
      time: "22:59 min left",
      price: "2.55 ETH",
      biddersCount: "101 people are bidding",
      liked: true,
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-28 relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Card */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Check out the hottest Sale offers</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel 
                plugins={[Autoplay({ delay: 2000 })]}
                className="w-full"
              >
                <CarouselContent>
                  {Auctions.map((auction, i) => (
                    <CarouselItem key={i} className="basis-full">
                      <AuctionCard2 {...auction} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 rounded-full border-white/10 bg-white/5 text-white transition-all hover:bg-white/10" />
                <CarouselNext className="absolute right-2 sm:right-4 top-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 rounded-full border-white/10 bg-white/5 text-white transition-all hover:bg-white/10" />
              </Carousel>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Show me more</Button>
            </CardFooter>
          </Card>
          
          {/* Middle Section */}
          <div className="bg-gradient-to-b from-[#1D1E29] to-[#060714] min-h-auto text-white px-4 sm:px-8 lg:pl-20 py-8 sm:py-12 lg:py-16 relative border rounded-b-lg rounded-tr-lg">
            <Image 
              src="/Pleat1.svg" 
              alt="pleat01" 
              width={150} 
              height={300} 
              className="relative top-[-2rem] sm:top-[-3rem] lg:top-[-4.7rem] left-[-2rem] sm:left-[-3rem] lg:left-[-5rem]" 
            />
            <div className="flex items-center justify-center w-full h-[250px] sm:h-[300px] lg:h-[60%]">
              <div className="relative w-full h-full">
                <Image 
                  src="/hand-image.png" 
                  alt="hand-image" 
                  fill 
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Card */}
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-start mb-8  lg:pr-8 tracking-wide">
                Top NFTs at a lower price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 lg:gap-1">
                {items.map((item, i) => (
                  <TopNFTItems key={i} {...item} />
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Show me more</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}