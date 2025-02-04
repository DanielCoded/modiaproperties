"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { libreFranklin, jetbrainsMono } from "@/app/fonts"
import { motion, AnimatePresence } from "framer-motion"

type NavItem = {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleGetStarted = () => {
    const message = encodeURIComponent("Hey, I just saw your website and I need a property.")
    const whatsappUrl = `https://wa.me/2348083351686?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-2-removebg-preview-Xu15eAGzwS2CjP4fB412BQu3gPntaH.png"
              alt="Modia Properties Logo"
              width={120}
              height={50}
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item: NavItem) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  `${libreFranklin.className} text-sm transition-colors duration-300 hover:text-[#3D0C11]`,
                  isScrolled ? "text-gray-700" : "text-white",
                  "flex items-center",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <Button
              onClick={handleGetStarted}
              className={cn(
                `${jetbrainsMono.className} bg-[#3D0C11] text-white hover:bg-[#2D090D] transition-all duration-300`,
                !isScrolled && "bg-white/10 backdrop-blur-sm hover:bg-white/20",
                "hover:scale-105",
              )}
            >
              Get Started
            </Button>
          </div>
          <button
            className="md:hidden text-[#3D0C11] transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${libreFranklin.className} md:hidden absolute top-full left-0 right-0 bg-white shadow-md overflow-hidden`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#3D0C11] transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={handleGetStarted}
                className={`${jetbrainsMono.className} bg-[#3D0C11] text-white hover:bg-[#2D090D] transition-colors w-full`}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

