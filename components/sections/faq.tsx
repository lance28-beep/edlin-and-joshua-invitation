"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { ChevronDown, Mail, MapPin, Sparkles, Users } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "When is the RSVP deadline?",
    answer: `Kindly respond on or before the 28th day of November, 2025. Your response helps us finalize our guest list.\n\nYou can revisit the RSVP section above or send us a note at emaecellona@gmail.com if you have any issues submitting your response.`,
    icon: Mail,
  },
  {
    question: "Where is the ceremony and what time should we arrive?",
    answer: `Ceremony: ${siteConfig.ceremony.venue} (${siteConfig.ceremony.location}).\nWe begin at ${siteConfig.ceremony.time}, so please be seated by 2:30 PM to enjoy the full procession.`,
    icon: MapPin,
  },
  {
    question: "Where is the reception taking place?",
    answer: `Reception follows immediately at ${siteConfig.reception.venue}, ${siteConfig.reception.location}. Simply follow the signage or ask any member of the entourage for assistance.`,
    icon: MapPin,
  },
  {
    question: "Is there a dress code?",
    answer: `We're embracing a "${siteConfig.dressCode.theme}" motif. Ladies, gowns or cocktail dresses in romantic hues; gentlemen, long sleeves or suits in classic tones. Most importantly, come comfortable enough to celebrate with us all night!`,
    icon: Sparkles,
  },
  {
    question: "Can we share photos with you?",
    answer: `Yes, please! Visit the Snap Share section or upload to our shared Google Drive so we can relive the day through your lens.`,
    icon: Sparkles,
  },
  {
    question: "Can I bring my child?",
    answer: `No, unless they are included in the RSVP. We appreciate your understanding as we've planned for a specific number of guests.`,
    icon: Users,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section
      id="faq"
      className="relative bg-[#FCF8EC] py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/backgroundimages/background%20(3).jpg"
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

      {/* Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4">
        {/* Decorative element above title */}
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#A78256]/40" />
          <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#C2D3C3]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-[#A78256]/40" />
        </div>
        
        <div className="inline-block rounded-2xl bg-white/80 px-4 py-3 shadow-lg backdrop-blur-sm">
          <h2 className="imperial-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#A78256] mb-2 sm:mb-3 md:mb-4" style={{
            textShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 6px rgba(167, 130, 86, 0.3)"
          }}>
            Frequently Asked Question
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#7A4F4F] font-light max-w-xl mx-auto leading-relaxed px-2" style={{
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(178, 131, 131, 0.25)"
          }}>
            A quick guide for our guests. If you need more details, please message Edlin Mae at 0939 903 8910.
          </p>
        </div>
        
        {/* Decorative element below subtitle */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#C2D3C3]/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#B28383]/60 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const Icon = item.icon ?? Sparkles
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl border-2 border-white/60 rounded-2xl shadow-[0_4px_20px_rgba(167,130,86,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(167,130,86,0.15)] hover:border-white/80 hover:scale-[1.01] group"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors hover:bg-white/30"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className={`inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#EDD6AC]/80 via-[#EDD6AC]/70 to-[#EDD6AC]/60 text-[#8A5A50] shadow-md transition-all duration-300 ${isOpen ? 'scale-110 ring-2 ring-[#A78256]/30' : 'group-hover:scale-105'}`}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-[#7A4D45] leading-tight">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-[#B28383] transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-180 scale-110" : "rotate-0"} group-hover:text-[#A78256]`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#5C3D2E] whitespace-pre-line border-t border-[#F0DFD2] bg-gradient-to-b from-transparent to-white/20 animate-in slide-in-from-top-2 duration-300">
                    <div className="pt-4 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
