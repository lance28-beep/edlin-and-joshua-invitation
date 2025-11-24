"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { siteConfig } from "@/content/site"
import { ChevronDown, Mail, MapPin, Sparkles } from "lucide-react"

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
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section
      id="faq"
      className="relative bg-[#FCF8EC] py-12 sm:py-16 md:py-20 overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/40 after:to-transparent"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#B28383] mb-3">Frequently Asked</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#A26C63] mb-4">
            FAQs
          </h2>
          <p className="text-sm sm:text-base text-[#73594F] max-w-2xl mx-auto">
            A quick guide for our guests. If you need more details, please message Edlin Mae at 0939 903 8910.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const Icon = item.icon ?? Sparkles
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="bg-white/90 backdrop-blur border border-[#E3C6B5] rounded-2xl shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EDD6AC]/70 text-[#8A5A50]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-[#7A4D45]">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-[#B28383] transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#5C3D2E] whitespace-pre-line border-t border-[#F0DFD2]">
                    {item.answer}
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
