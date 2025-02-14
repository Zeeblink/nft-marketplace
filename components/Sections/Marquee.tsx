"use client"
import React from 'react';
import { nfts } from '@/lib/data';
import Image from 'next/image';

const NFTMarquee = () => {

  return (
    <div className="relative w-full overflow-hidden py-4 my-8">
      <div className="flex gap-4 animate-scroll">
        {nfts.map((nft, i) => (
          <div key={i} className="flex flex-col gap-2 flex-shrink-0">
            <Image src={nft.image} alt='nfts' width={80} height={80} className="rounded-2xl" />
            <span className="text-gray-400 text-xs text-center">{nft.price} ETH</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 0.5rem));
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default NFTMarquee;