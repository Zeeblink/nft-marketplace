"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "#", label: "Auctions" },
    { href: "#", label: "Roadmap" },
    { href: "#", label: "Discover" },
    { href: "#", label: "Community" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#060714]/80 backdrop-blur-lg">
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
          <nav className="hidden lg:flex md:gap-6 lg:gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden text-sm text-white/70 hover:text-white lg:inline-flex">
            Contact
          </Button>
          <Button className="hidden text-sm font-medium text-white lg:inline-flex">My account</Button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-l border-white/5 bg-[#060714]/95 p-0 backdrop-blur-xl sm:max-w-md"
            >
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>
              <div className="flex h-full flex-col">
                {/* Mobile Menu Header */}
                <div className="flex h-16 items-center justify-between border-b border-white/5 px-6">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                    <div className="relative h-16 w-24">
                      <Image src="/Logo.svg" alt="Logo" fill className="object-contain" />
                    </div>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6 text-white" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col space-y-2 p-6">
                    <AnimatePresence>
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center rounded-lg px-4 py-3 text-lg font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </nav>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t border-white/5 p-6">
                  <div className="flex flex-col space-y-4">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-white/70 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Button>
                    <Button className="w-full justify-center" onClick={() => setIsOpen(false)}>
                      My account
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

