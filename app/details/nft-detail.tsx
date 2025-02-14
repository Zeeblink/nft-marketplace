"use client"

import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, Copy, Share2, Maximize2 } from "lucide-react"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { time: "12:00", price: 2.1 },
  { time: "13:00", price: 2.3 },
  { time: "14:00", price: 2.5 },
  { time: "15:00", price: 2.65 },
  { time: "16:00", price: 2.85 },
]

interface NFTDetailProps {
  image: string
  title: string
  description: string
  creator: {
    avatar: string
    username: string
  }
  collection: {
    avatar: string
    name: string
  }
  currentPrice: number
  timeLeft: string
  timestamp: string
  bidders: number
}

export default function NFTDetail({
  image = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7NqYiGF2y2r909LH9QxdAir0yhy95z.png",
  title = "Dui accumsan leo vestibulum ornare",
  description = "Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.",
  creator = {
    avatar: "/placeholder.svg",
    username: "brook_sim",
  },
  collection = {
    avatar: "/placeholder.svg",
    name: "Afterlife",
  },
  currentPrice = 5.25,
  timeLeft = "22:59 min",
  timestamp = "(01.01.2022 - 01:40:47)",
  bidders = 12,
}: NFTDetailProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B0C17]/60 backdrop-blur-xl">
        <div className="grid lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square">
            <div className="absolute right-4 top-4 z-10 flex gap-2">
              <button className="rounded-full bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10">
                <Maximize2 className="h-6 w-6 text-white" />
              </button>
            </div>
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
          </div>

          {/* Content Section */}
          <div className="flex flex-col p-8">
            <div className="mb-8 flex justify-end gap-2">
              <button
                className="rounded-full bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`} />
              </button>
              <button className="rounded-full bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10">
                <Copy className="h-6 w-6 text-white" />
              </button>
              <button className="rounded-full bg-white/5 p-3 backdrop-blur-sm transition-colors hover:bg-white/10">
                <Share2 className="h-6 w-6 text-white" />
              </button>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-white">{title}</h1>
            <p className="mb-8 text-lg text-white/60">{description}</p>

            <div className="mb-8 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/60">Creator</span>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={creator.avatar} />
                  </Avatar>
                  <span className="text-sm font-medium text-white">@{creator.username}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-white/60">Collection</span>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={collection.avatar} />
                  </Avatar>
                  <span className="text-sm font-medium text-white">{collection.name}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-[#0B0C17] p-6">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-1 text-sm text-white/60">Current price</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{currentPrice}</span>
                    <span className="text-lg text-white">ETH</span>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-sm text-white/60">Time left</div>
                  <div className="text-2xl font-bold text-white">{timeLeft}</div>
                  <div className="text-sm text-white/40">{timestamp}</div>
                </div>
              </div>

              <Button className="w-full bg-[#514CFF] py-6 text-base font-medium text-white hover:bg-[#514CFF]/90">
                Place a bid
              </Button>
            </div>

            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-white">History of bids ({bidders} people are bidding)</h3>
                <span className="rounded-full bg-[#514CFF]/10 px-3 py-1 text-sm font-medium text-[#514CFF]">
                  2.55 ETH
                </span>
              </div>

              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <XAxis dataKey="time" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis
                      stroke="#ffffff40"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `${value} ETH`}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#0B0C17",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                      itemStyle={{ color: "#fff" }}
                      labelStyle={{ color: "#ffffff99" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#514CFF"
                      strokeWidth={2}
                      dot={{ fill: "#514CFF", strokeWidth: 2 }}
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

