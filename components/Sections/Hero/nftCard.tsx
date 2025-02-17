import Image from "next/image"

interface NFTCardProps {
  className: string
  price: string
  src: string
}

const NFTCard = ({ className, price, src }: NFTCardProps) => (
  <div className={`absolute ${className}`}>
    <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative w-full h-full">
        <Image
          src={src || "/placeholder.svg"}
          alt="NFT Card"
          layout="fill"
          objectFit="cover"
          className="rounded-lg xs:rounded-xl sm:rounded-2xl"
        />
      </div>
    </div>
    <div className="mt-1 text-center text-[8px] xs:text-[10px] sm:text-xs text-muted">{price} ETH</div>
  </div>
)

export default NFTCard

