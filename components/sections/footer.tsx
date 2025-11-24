"use client"

import { Section } from "@/components/section"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <Section
      id="footer"
      className="relative bg-gradient-to-b from-[#FCF8EC] to-[#F5E6D3] py-8 sm:py-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-5 w-5 text-[#B28383] fill-current" />
          <span className="text-lg sm:text-xl font-serif text-[#8A5A50]">
            Edlin & Joshua
          </span>
          <Heart className="h-5 w-5 text-[#B28383] fill-current" />
        </div>
        
        <p className="text-sm sm:text-base text-[#73594F] mb-2">
          Thank you for being part of our special day
        </p>
        
        <div className="text-xs sm:text-sm text-[#A47D73]">
          {new Date().getFullYear()} • Made with love
        </div>
      </div>
    </Section>
  )
}
