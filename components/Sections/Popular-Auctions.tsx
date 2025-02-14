"use client"
import { Button } from "@/components/ui/button";
import AuctionCard2 from "../Sections/Sale-Offers/auction-card2";
import { popularAuctions } from "@/lib/data";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"


export default function PopularAuctions() {
    const options = ["Architecture", "Photography", "Games", "Music"]

    return (
        <section className="px-16 lg:px-32 py-20">
            <h4 className="text-center text-[0.7rem] md:text-xs text-gray-500 mb-2 md:mb-4">OVERLINE</h4>

            <h2 className="text-center text-lg sm:text-xl md:text-[1.7rem] font-bold mb-4 sm:mb-6 tracking-wide">
                Most popular live auctions
            </h2>

            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 justify-center">
                {options.map((option, i) => (
                    <Button variant="outline" key={i} className="text-white/60 text-[0.65rem] sm:text-xs font-semibold px-3 sm:px-4">
                        {option}
                    </Button>
                ))}
            </div>


            {/* <div className="flex gap-0 mb-8">

            </div> */}
            <Carousel plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]} className="mb-12">
                <CarouselContent>
                    {popularAuctions.map((auction, i) => (
                        <CarouselItem key={i} className="basis-1/4 min-w-[280px] md:min-w-[320px]3">
                            <AuctionCard2 key={i} {...auction} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-white/10 bg-white/5 text-white transition-all hover:bg-white/10" />
                <CarouselNext className={cn(
                    "absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-white/10 bg-white/5 text-white transition-all hover:bg-white/10",
                )} />
            </Carousel>

            <div className="flex justify-center items-center mb-20">
                <Button variant="outline" className="">Show me more</Button>
            </div>
            <hr />
        </section>
    )
}