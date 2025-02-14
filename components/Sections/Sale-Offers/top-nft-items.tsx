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
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg h-20 md:h-24  w-[7.5rem] lg:w-36">
                <Image src={image} alt="hero-image" 
                fill
                className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105" />
            </div>
            <div>
                <h3 className="text-xs mb-1">{title}</h3>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[0.65rem]">{time}</span>
                    <span className="flex-shrink-1 text-[0.65rem] rounded-[4px] font-semibold bg-[#635bff] bg-opacity-20 px-2 py-1 text-[#4F46E5]">{price}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-xs text-gray-500">{biddersCount}</span>
                    <Heart className={`${liked ? "fill-red-600 text-red-600" : ""} "h-3 w-3 mr-2"`} />
                </div>
            </div>
        </div>
    )
}