import Image from "next/image"

export default function Cursus() {
    return (
        <section className="px-4 sm:px-8 md:px-12 lg:px-24 py-8">
            {/* Stats section with responsive layout */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full mb-12 md:mb-20 lg:mb-28">
                <div className="flex flex-col items-center">
                    <Image src="/icons/icon4.svg" alt="" width={32} height={32} className="mb-3" />
                    <h3 className="text-2xl lg:text-4xl font-bold text-center mb-2">300k</h3>
                    <p className="text-xs text-muted">Users Active</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/icons/icon5.svg" alt="" width={32} height={32} className="mb-3" />
                    <h3 className="text-2xl lg:text-4xl font-bold text-center mb-2">52,5k</h3>
                    <p className="text-xs text-muted">Artworks</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/icons/icon6.svg" alt="" width={32} height={32} className="mb-3" />
                    <h3 className="text-2xl lg:text-4xl font-bold text-center mb-2">17,5k</h3>
                    <p className="text-xs text-muted">Artists</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/icons/icon7.svg" alt="" width={32} height={32} className="mb-3" />
                    <h3 className="text-2xl lg:text-4xl font-bold text-center mb-2">35.38</h3>
                    <p className="text-xs text-muted">ETH Spent</p>
                </div>
            </div>

            {/* Folder div with responsive adjustments */}
            <div className="bg-gradient-to-b from-[#1D1E29] to-[#060714] min-h-auto text-white pl-4 sm:pl-8 md:pl-12 lg:pl-20 py-8 sm:py-12 lg:py-16 relative border rounded-b-lg rounded-tr-lg">
                {/* Pleat image with responsive positioning */}
                <div className="hidden md:block">
                    <Image src="/Pleat2.svg" alt="pleat01" width={200} height={500} className="relative top-[-5.4rem] left-[-5rem] " />
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
                            <button className="px-4 sm:px-6 py-3 bg-[#4F46E5] rounded-lg font-medium hover:bg-[#4F46E5]/90 transition-colors">
                                Get started
                            </button>
                            <button className="px-4 sm:px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                Learn more
                            </button>
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