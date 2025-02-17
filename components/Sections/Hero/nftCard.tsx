import Image from 'next/image';

interface NFTCardProps {
    className: string;
    price: string;
    src: string;
  }

const NFTCard = ({ className, price, src }:NFTCardProps) => (
    <div className={`absolute ${className}`}>
      <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105">
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt="NFT Card"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="mt-1 text-center text-xs text-muted">{price} ETH</div>
    </div>
  );

  export default NFTCard;