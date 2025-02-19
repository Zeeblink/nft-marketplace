import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

interface TopNFTItemsProps {
    image: string
    title: string
    time: string
    price: string
    biddersCount: string
    liked: boolean
}

export default function TopNFTItems({ image, title, time, price, biddersCount, liked }: TopNFTItemsProps) {
    return (
        <div className="flex gap-3 w-full">
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg h-20 md:h-24 w-20 md:w-24">
                <Image 
                    src={image} 
                    alt="hero-image" 
                    fill
                    className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105" 
                />
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-xs mb-1">{title}</h3>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[0.65rem]">{time}</span>
                    <span className="flex-shrink-0 text-[0.65rem] rounded-[4px] font-semibold bg-[#635bff] bg-opacity-20 px-2 py-1 text-[#4F46E5]">{price}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{biddersCount}</span>
                    <Heart className={`h-3 w-3 ${liked ? "fill-red-600 text-red-600" : ""}`} />
                </div>
            </div>
        </div>
    )
}