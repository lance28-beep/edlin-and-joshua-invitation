"use client"

import { useEffect, useState } from "react"
import { Section } from "@/components/section"
import Counter from "@/components/counter"
import Image from "next/image"
import { motion } from "motion/react"
import { siteConfig } from "@/content/site"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const ceremonyDate = siteConfig.ceremony.date
  const ceremonyTimeDisplay = siteConfig.ceremony.time
  const [ceremonyMonth = "January", ceremonyDayRaw = "23", ceremonyYear = "2026"] = ceremonyDate.split(" ")
  const ceremonyDayNumber = ceremonyDayRaw.replace(/[^0-9]/g, "") || "23"
  
  const parsedTargetDate = new Date(`${ceremonyDate} ${ceremonyTimeDisplay} GMT+0800`)
  const targetTimestamp = Number.isNaN(parsedTargetDate.getTime())
    ? Date.UTC(2026, 0, 23, 8, 0, 0)
    : parsedTargetDate.getTime()
  const ceremonyDayName =
    siteConfig.ceremony.day ||
    parsedTargetDate.toLocaleDateString("en-US", { weekday: "long" })
  const ceremonyMonthDisplay = ceremonyMonth.toUpperCase()
  const ceremonyDayDisplay = (ceremonyDayName || "").toUpperCase()
  const ceremonyTimeStyled = ceremonyTimeDisplay.toUpperCase()

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = targetTimestamp
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetTimestamp])

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5">
      {/* Counter card */}
      <div className="relative group">
        {/* Elegant glow on hover */}
        <div className="absolute -inset-1 bg-[#A78256]/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
        
        {/* Main card - elegant and clean */}
        <div className="relative bg-[#EDD6AC]/98 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3.5 md:px-5 md:py-4 lg:px-6 lg:py-5 border-2 border-[#A78256]/40 shadow-[0_8px_32px_rgba(167,130,86,0.12)] hover:shadow-[0_12px_40px_rgba(167,130,86,0.18)] transition-all duration-300 hover:scale-[1.03] min-w-[52px] sm:min-w-[64px] md:min-w-[76px] lg:min-w-[88px]">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C2D3C3]/40 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C2D3C3]/40 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C2D3C3]/40 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C2D3C3]/40 rounded-br-lg" />
          
          {/* Counter */}
          <div className="relative z-10 flex items-center justify-center">
            <Counter
              value={value}
              places={value >= 100 ? [100, 10, 1] : [10, 1]}
              fontSize={36}
              padding={3}
              gap={2}
              textColor="#A78256"
              fontWeight={900}
              horizontalPadding={2}
              borderRadius={6}
              gradientHeight={6}
              gradientFrom="rgba(167,130,86,0.08)"
              gradientTo="transparent"
              containerStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              counterStyle={{
                fontSize: "clamp(26px, 5.5vw, 48px)",
                fontFamily: "'TikTok Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 900,
                fontVariationSettings: "'slnt' 0, 'wdth' 100",
                letterSpacing: "0.04em",
              }}
            />
          </div>
        </div>
      </div>

      {/* Label - elegant with better contrast */}
      <span className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm font-semibold text-[#A78256] uppercase tracking-[0.15em]" style={{
        textShadow: "0 2px 6px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(167, 130, 86, 0.3)"
      }}>
        {label}
      </span>
    </div>
  )

  return (
    <Section
      id="countdown"
      className="relative py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/decoration/backgroudcountdown.png"
          alt=""
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#EDD6AC]/20 via-[#EDD6AC]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#B28383]/20 via-[#B28383]/5 to-transparent" />
        
        {/* Floating decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C2D3C3]/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-20 right-16 w-24 h-24 bg-[#A78256]/12 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-20 w-28 h-28 bg-[#B28383]/18 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-24 right-12 w-20 h-20 bg-[#EDD6AC]/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Corner decorations - all four corners */}
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
        
        {/* Decorative lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#A78256]/20" />
      </div>

      {/* Content container - paper card effect with subtle top transparency */}
      <div className="relative z-10 mx-auto max-w-6xl px-3 sm:px-4 md:px-6">
        {/* Paper-like card with subtle top transparency */}
        <div className="relative bg-gradient-to-b from-[#FAF8F5]/85 via-[#FCFBF8]/95 to-[#FEFDFB]/98 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl border border-[#E8E0D6]/40">
          {/* Subtle top transparency gradient overlay */}
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent via-[#FAF8F5]/20 to-transparent pointer-events-none rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl" />
          
          {/* Content padding */}
          <div className="relative py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8">

            {/* Monogram - centered at top */}
            <div className="relative flex justify-center mb-6 sm:mb-8 md:mb-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <Image
                  src="/invitation/newMonogram.png"
                  alt="Jay & Cha Monogram"
                  width={350}
                  height={350}
                  className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 opacity-90"
                  style={{
                    filter: 'invert(54%) sepia(18%) saturate(945%) hue-rotate(357deg) brightness(92%) contrast(87%)'
                  }}
                  priority={false}
                />
                {/* Glow effect behind monogram */}
                <div className="absolute inset-0 blur-3xl bg-[#A78256]/25 -z-10 scale-125" />
              </motion.div>
            </div>

            {/* Header */}
            <div className="relative text-center mb-6 sm:mb-8 md:mb-10">
              {/* Decorative element above title */}
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <div className="w-8 sm:w-12 md:w-16 h-px bg-[#A78256]/40" />
                <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
                <div className="w-1.5 h-1.5 bg-[#C2D3C3]/60 rounded-full" />
                <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
                <div className="w-8 sm:w-12 md:w-16 h-px bg-[#A78256]/40" />
              </div>
              
              <h2 className="imperial-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#A78256] mb-2 sm:mb-3 md:mb-4" style={{
                textShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(167, 130, 86, 0.3)"
              }}>
                Countdown to Our Special Day
              </h2>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#B28383] font-light max-w-xl mx-auto leading-relaxed px-2" style={{
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(178, 131, 131, 0.2)"
              }}>
                Every moment brings us closer to forever
              </p>
              
              {/* Decorative element below subtitle */}
              <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
                <div className="w-1.5 h-1.5 bg-[#C2D3C3]/60 rounded-full" />
                <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
              </div>
            </div>

            {/* Countdown Timer - Elegant */}
            <div className="relative mb-7 sm:mb-9 md:mb-11">
              <div className="flex justify-center items-center gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-5 flex-wrap max-w-4xl mx-auto">
                <CountdownUnit value={timeLeft.days} label="Days" />
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                <CountdownUnit value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>

            {/* Save The Date - integrated minimalist layout */}
            <div className="relative">
              <div className="flex justify-center">
                <div className="w-full max-w-3xl px-2 sm:px-4">
                  <div className="flex flex-col items-center gap-3 text-center text-[#A57262]" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
                    <div className="flex items-center gap-2">
                      <span className="h-px w-10 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent via-[#C8A892]/60 to-[#A57262]/40" />
                      <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.45em] sm:tracking-[0.55em]">
                        Save The Date
                      </span>
                      <span className="h-px w-10 sm:w-12 lg:w-16 bg-gradient-to-l from-transparent via-[#C8A892]/60 to-[#A57262]/40" />
                    </div>
                    <span className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#B68C79]">
                      {siteConfig.ceremony.location}
                    </span>
                  </div>

                  <div className="relative mt-5 flex flex-col items-center gap-2 uppercase text-[#A57262]" style={{ textShadow: "0 6px 18px rgba(0,0,0,0.2)" }}>
                    <span className="text-[11px] sm:text-sm md:text-base tracking-[0.65em] sm:tracking-[0.75em]">
                      {ceremonyMonthDisplay}
                    </span>
                    <div className="flex w-full flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-5">
                      <div className="order-2 sm:order-1 flex w-full sm:flex-1 items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.4em]">
                        <span className="hidden sm:block h-px flex-1 bg-[#B7836F]/50" />
                        <span>{ceremonyDayDisplay || "SUNDAY"}</span>
                        <span className="hidden sm:block h-px w-8 bg-[#B7836F]/50" />
                      </div>
                      <div className="order-1 sm:order-2 relative flex items-center justify-center px-3 sm:px-4 md:px-6">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 mx-auto h-[70%] max-h-[180px] w-[130px] sm:w-[170px] md:w-[210px] rounded-full bg-gradient-to-b from-[#FFF6DD] via-[#FFE0B1] to-[#F3AF66] blur-[38px] opacity-80"
                        />
                        <span
                          className="relative font-tiktok text-[3.3rem] sm:text-[4.25rem] md:text-[5rem] leading-none tracking-[0.08em]"
                          style={{
                            color: "#FFF7E3",
                            backgroundImage: "linear-gradient(180deg, #FFFBEF 10%, #FFE3B2 60%, #F2AA5A 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            textShadow:
                              "0 0 28px rgba(255,255,255,0.85), 0 0 60px rgba(255,214,150,0.65), 0 18px 42px rgba(0,0,0,0.55)",
                            filter: "drop-shadow(0 0 14px rgba(255, 203, 142, 0.55))",
                          }}
                        >
                          {ceremonyDayNumber.padStart(2, "0")}
                        </span>
                      </div>
                      <div className="order-3 flex w-full sm:flex-1 items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.35em]">
                        <span className="hidden sm:block h-px w-8 bg-[#B7836F]/50" />
                        <span>{ceremonyTimeStyled}</span>
                        <span className="hidden sm:block h-px flex-1 bg-[#B7836F]/50" />
                      </div>
                    </div>
                    <span className="text-[11px] sm:text-sm md:text-base tracking-[0.6em] sm:tracking-[0.7em] text-[#B68C79]">
                      {ceremonyYear}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
