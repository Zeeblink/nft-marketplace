import Image from "next/image"
import { Heart } from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

interface AuctionCardProps {
  image: string
  title: string
  price: string
  timeLeft: string
  bidders: string[]
  biddersCount: number
  liked: boolean
  likes: number
}

export default function AuctionCard({ image, title, price, timeLeft, bidders, biddersCount, liked, likes }: AuctionCardProps) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden border-2 p-4 rounded-2xl transition-all snap-center">
      {/* Image */}
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md h-auto md:h-80">
        <Image
          src={image || "/auction-image2.png"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-start justify-between gap-6">
          <h3 className="line-clamp-2 text-sm font-medium text-white">{title}</h3>
          <span className="flex-shrink-0 text-xs rounded-[4px] font-semibold bg-[#635bff] bg-opacity-20 px-2 py-1 text-[#4F46E5]">{price}</span>
        </div>

        {/* Time Left */}
        <div className="flex items-center gap-1.5">
          {/* <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4F46E5]" /> */}
          <span className="text-xs text-white">{timeLeft}</span>
        </div>

        <hr />
        {/* Social Proof */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Bidders Avatars */}
            <div className="flex -space-x-2">
              {bidders.slice(0, 3).map((bidder, i) => (
                <Avatar key={i} className="h-9 w-9 border-2 border-[#060714]">
                  <AvatarImage src={bidder} />
                </Avatar>
              ))}
            </div>
            <span className="text-xs text-white/60">{biddersCount} people are bidding</span>
          </div>

          {/* Like Button */}
          <button className="group/like flex items-center gap-1 rounded-full  px-2 py-1 text-xs text-white/60 transition-colors hover:bg-white/10">
            <Heart className={`${liked ? "fill-red-600 text-red-600" : ""} "h-3 w-3 mr-2"`} />
            <span>{likes}</span>
          </button>
        </div>

        
      </div>
    </div>
  )
}

