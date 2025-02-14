import Image from "next/image"
import { Heart } from "lucide-react"

interface AuctionCardProps {
    image: string
    title: string
    price: string
    timeLeft: string
    biddersCount: number
    liked: boolean
    // likes: number
}

export default function AuctionCard2({ image, title, price, timeLeft, biddersCount, liked }: AuctionCardProps) {
    return (
        <div className="group relative flex h-full w-full flex-col overflow-hidden p-2 sm:p-4 rounded-2xl transition-all snap-center">
            {/* Image */}
            <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md h-[200px] sm:h-[280px] md:h-[320px] lg:h-80">
                <Image
                    src={image || "/auction-image2.png"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-2 sm:gap-3">
                <div className="flex items-start justify-between gap-4 sm:gap-6">
                    <h3 className="line-clamp-2 text-sm font-medium text-white">{title}</h3>
                </div>

                {/* Time Left */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        {/* <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4F46E5]" /> */}
                        <span className="text-xs text-white">{timeLeft}</span>
                    </div>
                    <span className="flex-shrink-0 text-xs rounded-[4px] font-semibold bg-[#635bff] bg-opacity-20 px-2 py-1 text-[#4F46E5]">{price}</span>
                </div>

                <hr />
                {/* Social Proof */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-white/60">{biddersCount} people are bidding</span>
                    </div>

                    {/* Like Button */}
                    <button className="group/like flex items-center gap-1 rounded-full  px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10">
                        <Heart className={`${liked ? "fill-red-600 text-red-600" : ""} "h-3 w-3 mr-2"`} />
                        {/* <span>{likes}</span> */}
                    </button>
                </div>


            </div>
        </div>
    )
}

