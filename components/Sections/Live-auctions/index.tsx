"use client"

import AuctionCard from "./auction-card"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import { AUCTIONS } from "@/lib/data"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"


export default function AuctionsSection() {


    return (
        <section className="relative py-20">
            <div className="container px-4">
                {/* Header */}
                <h2 className="mb-12 text-2xl font-semibold text-white sm:text-3xl text-center">Latest live auctions</h2>


                <Carousel plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}>
                    <CarouselContent>
                        {AUCTIONS.map((auction, i) => (
                            <CarouselItem key={i} className="basis-1/4 min-w-[280px] md:w-full">
                                <AuctionCard {...auction} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-white/10 bg-white/5 text-white transition-all hover:bg-white/10" />
                    <CarouselNext className={cn(
                        "absolute right-4 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-white/10 bg-white/5 text-white transition-all hover:bg-white/10",
                    )} />
                </Carousel>


            </div>
        </section>
    )
}

