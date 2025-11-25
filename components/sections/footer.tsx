"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { Instagram, Twitter, Facebook, MapPin, Calendar, Clock, Heart, Music2 } from "lucide-react"
import { siteConfig } from "@/content/site"

export function Footer() {
  const year = new Date().getFullYear()
  const ceremonyDate = siteConfig.ceremony.date
  const ceremonyTime = siteConfig.ceremony.time
  const receptionTime = siteConfig.reception.time
  const ceremonyVenue = siteConfig.ceremony.venue
  const receptionVenue = siteConfig.reception.venue

  const [ceremonyMonth = "December", ceremonyDayRaw = "22", ceremonyYear = "2025"] = ceremonyDate.split(" ")
  const ceremonyDayNumber = ceremonyDayRaw.replace(/[^0-9]/g, "") || "22"
  const parsedCeremonyDate = new Date(`${ceremonyDate} ${ceremonyTime}`)
  const ceremonyDayDisplay = (
    siteConfig.ceremony.day ||
    (Number.isNaN(parsedCeremonyDate.getTime())
      ? "Monday"
      : parsedCeremonyDate.toLocaleDateString("en-US", { weekday: "long" }))
  ).toUpperCase()
  const ceremonyMonthDisplay = ceremonyMonth.toUpperCase()
  const ceremonyTimeStyled = ceremonyTime.toUpperCase()

  const quotes = [
    "In every love story, there's a moment when two hearts become one, and ours is just beginning.",
    "Two souls, one heart—forever entwined in the journey of love and faith together.",
    "Love is not about finding the perfect person, but learning to see an imperfect person perfectly."
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
      }, 3000)
      return () => clearTimeout(pauseTimeout)
    }

    if (isDeleting) {
      if (displayedText.length > 0) {
        const deleteTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30)
        return () => clearTimeout(deleteTimeout)
      } else {
        setIsDeleting(false)
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
      }
    } else {
      const currentQuote = quotes[currentQuoteIndex]
      if (displayedText.length < currentQuote.length) {
        const typeTimeout = setTimeout(() => {
          setDisplayedText(currentQuote.slice(0, displayedText.length + 1))
        }, 50)
        return () => clearTimeout(typeTimeout)
      } else {
        setIsPaused(true)
        setIsDeleting(true)
      }
    }
  }, [displayedText, isDeleting, isPaused, currentQuoteIndex, quotes])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerChildren = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  }

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Our Story", href: "#narrative" },
    { label: "Events", href: "#details" },
    { label: "Gallery", href: "#gallery" },
    { label: "Snap & Share", href: "#snap-share" },
    { label: "RSVP", href: "#guest-list" },
  ] as const

  return (
    <footer 
      className="relative z-20 mt-16 w-full text-white overflow-hidden bg-[#FCF8EC]"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#EDD6AC]/20 via-[#EDD6AC]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#B28383]/20 via-[#B28383]/5 to-transparent" />
        
        {/* Floating decorative circles */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-[#C2D3C3]/15 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-20 right-16 w-24 h-24 bg-[#A78256]/12 rounded-full blur-xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.08, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 left-20 w-28 h-28 bg-[#B28383]/18 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-12 w-20 h-20 bg-[#EDD6AC]/15 rounded-full blur-xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 z-0">
          <Image
            src="/decoration/corner_right-top.png"
            alt=""
            width={300}
            height={300}
            className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-auto opacity-75 scale-x-[-1]"
            priority={false}
          />
        </div>
        
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/decoration/corner_right-top.png"
            alt=""
            width={300}
            height={300}
            className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-auto opacity-75"
            priority={false}
          />
        </div>
        
        <div className="absolute bottom-0 left-0 z-0">
          <Image
            src="/decoration/corner_right-top.png"
            alt=""
            width={300}
            height={300}
            className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-auto opacity-75 scale-x-[-1] scale-y-[-1]"
            priority={false}
          />
        </div>
        
        <div className="absolute bottom-0 right-0 z-0">
          <Image
            src="/decoration/corner_right-top.png"
            alt=""
            width={300}
            height={300}
            className="w-40 sm:w-52 md:w-64 lg:w-80 xl:w-96 h-auto opacity-75 scale-y-[-1]"
            priority={false}
          />
        </div>
        
        {/* Decorative horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#A78256]/20" />
      </div>
      
      {/* Monogram - centered at top */}
      <div className="relative flex justify-center pt-8 sm:pt-10 md:pt-12 mb-6 sm:mb-8 md:mb-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/invitation/newMonogram.png"
            alt={`${siteConfig.couple.groomNickname} & ${siteConfig.couple.brideNickname} Monogram`}
            width={350}
            height={350}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            priority={false}
            style={{ 
              filter: "brightness(0) saturate(100%) invert(55%) sepia(23%) saturate(633%) hue-rotate(356deg) brightness(92%) contrast(86%) drop-shadow(0 4px 20px rgba(167, 130, 86, 0.4))" 
            }}
          />
          {/* Glow effect behind monogram */}
          <div className="absolute inset-0 blur-3xl bg-[#A78256]/25 -z-10 scale-125" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-8 pb-8 sm:pb-10 md:pb-12">
        {/* Wedding date presentation */}
        <motion.div className="flex justify-center px-2 sm:px-4 mb-8 sm:mb-10 md:mb-12" variants={fadeInUp}>
          <div className="w-full max-w-3xl text-center text-[#9A6757]" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.2)" }}>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="h-px w-10 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent via-[#C19A86]/60 to-[#9A6757]/30" />
                <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.45em] sm:tracking-[0.55em]">
                  Save The Date
                </span>
                <span className="h-px w-10 sm:w-12 lg:w-16 bg-gradient-to-l from-transparent via-[#C19A86]/60 to-[#9A6757]/30" />
              </div>
              <span className="text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.3em] text-[#B88676]">
                {siteConfig.ceremony.location}
              </span>
            </div>

            <div className="w-full mt-5 sm:mt-6 text-[#8B5A4A]">
              <div className="flex flex-col items-center gap-2.5 sm:gap-3.5 uppercase">
                <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.45em] sm:tracking-[0.65em]">
                  {ceremonyMonthDisplay}
                </span>
                <div className="flex w-full flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
                  <div className="flex flex-1 items-center gap-2 sm:gap-3">
                    <span className="hidden sm:block h-px flex-1 bg-[#8B5A4A]/30" />
                    <span className="text-[9px] sm:text-xs md:text-sm tracking-[0.35em] sm:tracking-[0.5em]">
                      {ceremonyDayDisplay}
                    </span>
                    <span className="hidden sm:block h-px w-8 sm:w-10 md:w-12 bg-[#8B5A4A]/30" />
                  </div>
                  <div className="relative flex items-center justify-center px-2 sm:px-4 md:px-8">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 mx-auto h-[80%] max-h-[220px] w-[120px] sm:w-[170px] md:w-[220px] rounded-full bg-gradient-to-b from-[#FFF6DD] via-[#FFE0B1] to-[#F3AF66] blur-[32px] opacity-80"
                    />
                    <span
                      className="relative font-tiktok text-[2.85rem] sm:text-[4.1rem] md:text-[5rem] lg:text-[5.75rem] leading-none tracking-[0.06em]"
                      style={{
                        color: "#FFF8E1",
                        backgroundImage: "linear-gradient(180deg, #FFFDF4 10%, #FFE6AF 60%, #F5C368 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        textShadow:
                          "0 0 30px rgba(255,255,255,0.75), 0 0 70px rgba(253,215,155,0.6), 0 0 120px rgba(253,193,113,0.45), 0 18px 45px rgba(0,0,0,0.35)",
                        filter: "drop-shadow(0 0 15px rgba(255, 218, 154, 0.45))",
                      }}
                    >
                      {ceremonyDayNumber.padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 items-center gap-2 sm:gap-3 justify-center">
                    <span className="hidden sm:block h-px w-8 sm:w-10 md:w-12 bg-[#8B5A4A]/30" />
                    <span className="text-[9px] sm:text-xs md:text-sm tracking-[0.28em] sm:tracking-[0.45em]">
                      {ceremonyTimeStyled}
                    </span>
                    <span className="hidden sm:block h-px flex-1 bg-[#8B5A4A]/30" />
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.4em] sm:tracking-[0.65em]">
                  {ceremonyYear}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12" variants={staggerChildren} initial="initial" animate="animate">
          {/* Couple Info */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#EDD6AC]/40 rounded-full flex items-center justify-center border border-[#A78256]/40 flex-shrink-0">
                  <Heart className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-[#A78256]" fill="#B28383" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#A78256] drop-shadow-lg" style={{ fontFamily: "var(--font-serif)" }}>{siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}</h3>
              </div>
              <div className="space-y-3 sm:space-y-3.5 md:space-y-4">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 font-lora text-[#B28383]">
                  <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#A78256] flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg font-medium">{ceremonyDate}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 font-lora text-[#B28383]">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#A78256] flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base">{ceremonyVenue}</span>
                </div>
              </div>
            </div>

            <motion.div className="bg-[#EDD6AC]/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#A78256]/30" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <blockquote className="font-lora text-[#B28383] italic text-sm sm:text-base md:text-lg leading-relaxed min-h-[60px] sm:min-h-[70px] md:min-h-[80px]">
                "{displayedText}
                <span className="inline-block w-0.5 h-4 sm:h-5 md:h-6 bg-[#A78256] ml-1 animate-pulse">|</span>"
              </blockquote>
              <div className="flex items-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A78256]/80 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#B28383]/60 rounded-full" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A78256]/80 rounded-full" />
              </div>
            </motion.div>
          </motion.div>

          {/* Event Details quick tiles */}
          <motion.div className="space-y-4 sm:space-y-5 md:space-y-6" variants={fadeInUp}>
            <motion.div className="bg-[#EDD6AC]/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#A78256]/30 hover:bg-[#EDD6AC]/50 transition-all duration-300" whileHover={{ y: -5 }}>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-3.5 md:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#A78256]/20 rounded-full flex items-center justify-center border border-[#A78256]/40 flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#A78256]" />
                </div>
                <h4 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-[#A78256]">Ceremony</h4>
              </div>
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3 font-lora text-[#B28383] text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78256] flex-shrink-0" />
                  <span>{ceremonyVenue}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78256] flex-shrink-0" />
                  <span>{ceremonyTime}</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="bg-[#EDD6AC]/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-[#A78256]/30 hover:bg-[#EDD6AC]/50 transition-all duration-300" whileHover={{ y: -5 }}>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-3 sm:mb-3.5 md:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#A78256]/20 rounded-full flex items-center justify-center border border-[#A78256]/40 flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#A78256]" fill="#B28383" />
                </div>
                <h4 className="font-playfair font-bold text-base sm:text-lg md:text-xl text-[#A78256]">Reception</h4>
              </div>
              <div className="space-y-2 sm:space-y-2.5 md:space-y-3 font-lora text-[#B28383] text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78256] flex-shrink-0" />
                  <span>{receptionVenue}</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A78256] flex-shrink-0" />
                  <span>{receptionTime}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact + Quick Links */}
          <motion.div className="space-y-6 sm:space-y-7 md:space-y-8" variants={fadeInUp}>
            <div>
              <h4 className="font-playfair font-bold text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-2.5 md:gap-3 text-[#A78256]">
                <div className="w-1.5 sm:w-2 h-6 sm:h-7 md:h-8 bg-[#A78256]/60 rounded-full" /> Follow Us
              </h4>
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 flex-wrap">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#EDD6AC]/40 ring-1 ring-[#A78256]/30 hover:bg-[#EDD6AC]/60 hover:ring-[#A78256]/50 transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78256]" />
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#EDD6AC]/40 ring-1 ring-[#A78256]/30 hover:bg-[#EDD6AC]/60 hover:ring-[#A78256]/50 transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78256]" />
                </a>
                <a 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#EDD6AC]/40 ring-1 ring-[#A78256]/30 hover:bg-[#EDD6AC]/60 hover:ring-[#A78256]/50 transition-all duration-200 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Music2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78256]" />
                </a>
                <a 
                  href="https://x.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#EDD6AC]/40 ring-1 ring-[#A78256]/30 hover:bg-[#EDD6AC]/60 hover:ring-[#A78256]/50 transition-all duration-200 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#A78256]" />
                </a>
              </div>
            </div>

            <div>
              <h5 className="font-playfair font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4 text-[#A78256]">Quick Links</h5>
              <div className="space-y-1.5 sm:space-y-2">
                {nav.map((item) => (
                  <a key={item.href} href={item.href} className="block text-[#B28383] hover:text-[#A78256] transition-colors duration-200 font-lora text-xs sm:text-sm">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div className="border-t border-[#A78256]/30 pt-6 sm:pt-7 md:pt-8" variants={fadeInUp}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 md:gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#B28383] font-lora text-xs sm:text-sm">© {year} {siteConfig.couple.groomNickname} & {siteConfig.couple.brideNickname}. All rights reserved.</p>
              <p className="text-[#A78256] font-lora text-xs sm:text-sm mt-0.5 sm:mt-1">
                Made with 💕 for our special day
              </p>
            </div>
            
            <div className="text-center md:text-right space-y-0.5 sm:space-y-1">
              <p className="text-[#B28383] font-lora text-[10px] sm:text-xs">
                Developed by{" "}
                <a 
                  href="https://lance28-beep.github.io/portfolio-website/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A78256] hover:text-[#B28383] transition-colors duration-200 underline decoration-[#A78256]/60 hover:decoration-[#B28383]/80"
                >
                  Lance Valle
                </a>
              </p>
              <p className="text-[#B28383] font-lora text-[10px] sm:text-xs">
                Want a website like this? Visit{" "}
                <a 
                  href="https://www.facebook.com/WeddingInvitationNaga" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#A78256] hover:text-[#B28383] transition-colors duration-200 underline decoration-[#A78256]/60 hover:decoration-[#B28383]/80"
                >
                  Wedding Invitation Naga
                </a>
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}
