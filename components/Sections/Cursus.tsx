import Image from "next/image"
import { Button } from "../ui/button"

export default function Cursus() {
    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-24 py-8">
            {/* Stats section with responsive layout */}
            <div className="w-full mb-12 md:mb-20 lg:mb-28">
                <div className="grid grid-cols-2 gap-x-1 gap-y-6 sm:gap-10 md:gap-y-16 md:gap-x-1 lg:flex lg:flex-wrap lg:justify-center lg:gap-24">
                    {[
                        { icon: "/icons/icon4.svg", value: "300k", label: "Users Active" },
                        { icon: "/icons/icon5.svg", value: "52,5k", label: "Artworks" },
                        { icon: "/icons/icon6.svg", value: "17,5k", label: "Artists" },
                        { icon: "/icons/icon7.svg", value: "35.38", label: "ETH Spent" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image src={item.icon} alt="" width={32} height={32} className="mb-3" />
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
                                {item.value}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Folder div with responsive adjustments */}
            <div className="bg-gradient-to-b from-[#1D1E29] to-[#060714] min-h-auto text-white pl-4 sm:pl-8 md:pl-12 lg:pl-20 py-8 sm:py-12 lg:py-16 relative border rounded-b-lg rounded-tr-lg">
                {/* Pleat image with responsive positioning */}
                <div className="hidden lg:block">
                    <Image src="/Pleat2.svg" alt="pleat01" width={200} height={500} className="relative lg:top-[-5.4rem] lg:left-[-5rem] " />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* Left Column - Always visible */}
                    <div className="pt-4 sm:pt-6 md:pt-8 w-full md:w-[90%] lg:w-[82%] h-auto">
                        <span className="text-sm text-gray-400 tracking-widest">OVERLINE</span>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wider mt-4 mb-6">
                            Cursus vitae sollicitudin donec nascetur. Join now
                        </h1>
                        <p className="text-gray-400 text-sm mb-6 sm:mb-8">
                            Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet
                            tincidunt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button size="lg" className="px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-[#4F46E5]/90 transition-colors">
                                Get started
                            </Button>
                            <Button size="lg" variant="outline" className="px-4 sm:px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Learn more
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - User Cards - Hidden on mobile/tablet */}
                    <div className="hidden lg:block bg-[url('/Users.png')] bg-cover h-full bg-left">
                    </div>
                </div>
            </div>
        </section>
    )
}