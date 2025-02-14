import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Navigation() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-lg">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6 lg:gap-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-20 w-32">
                            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
                        </div>
                    </Link>
                </div>

                <div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:gap-6 lg:gap-10">
                        <Link href="#" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                            Auctions
                        </Link>
                        <Link href="#" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                            Roadmap
                        </Link>
                        <Link href="#" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                            Discover
                        </Link>
                        <Link href="#" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                            Community
                        </Link>
                    </nav>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="hidden text-sm text-white/70 hover:text-white md:inline-flex">
                        Contact
                    </Button>
                    <Button variant="secondary" className="bg-[#4F46E5] text-sm font-medium text-white hover:bg-[#4F46E5]/90">
                        My account
                    </Button>
                </div>
            </div>
        </header>
    )
}

