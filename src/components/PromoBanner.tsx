'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

/**
 * Promotional Banner Component
 * Sticky banner for opening special offers
 *
 * Color scheme options:
 * - 'navy' (default): Your brand navy (#1C1B3A)
 * - 'teal': Complementary teal (#0D9488) - recommended for promos
 * - 'lightblue': Light medical blue (#3B82F6) - contrasts with page bg
 * - 'gradient': Navy to teal gradient
 */

interface PromoBannerProps {
  scheme?: 'navy' | 'teal' | 'lightblue' | 'gradient'
  dismissible?: boolean
}

const colorSchemes = {
  navy: {
    bg: 'bg-[#1C1B3A]',
    hoverBg: 'hover:bg-[#2A2951]',
    text: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-[#1C1B3A]',
    buttonHover: 'hover:bg-opacity-90',
  },
  teal: {
    bg: 'bg-[#0D9488]',
    hoverBg: 'hover:bg-[#0F766E]',
    text: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-[#0D9488]',
    buttonHover: 'hover:bg-opacity-90',
  },
  lightblue: {
    bg: 'bg-blue-500/20 backdrop-blur-md border-b border-blue-200/30',
    hoverBg: '',
    text: 'text-slate-900',
    buttonBg: 'bg-blue-500',
    buttonText: 'text-white',
    buttonHover: 'hover:bg-blue-600',
  },
  gradient: {
    bg: 'bg-gradient-to-r from-[#1C1B3A] to-[#0D9488]',
    hoverBg: '',
    text: 'text-white',
    buttonBg: 'bg-white',
    buttonText: 'text-[#1C1B3A]',
    buttonHover: 'hover:bg-opacity-90',
  },
}

export default function PromoBanner({
  scheme = 'teal',
  dismissible = true
}: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true)
  const colors = colorSchemes[scheme]

  if (!isVisible) return null

  return (
    <div
      className={`${colors.bg} ${colors.text} py-2.5 sm:py-3 px-3 sm:px-4 shadow-sm`}
      role="banner"
      aria-label="Promotional offer"
    >
      <div className="max-w-7xl mx-auto relative pr-8">
        <div className="flex items-center justify-center text-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm font-medium leading-relaxed">
            First-time patients save $39 with code: <span className="font-bold">WELCOME10</span>
          </p>
          {/* CTA Button - Desktop/Tablet only (hidden on mobile < 768px) - Enhanced Glassmorphism */}
          <a
            href="/register?type=patient"
            className="group relative items-center justify-center px-5 py-2 bg-gradient-to-r from-blue-500/75 to-blue-600/75 hover:from-blue-600/85 hover:to-blue-700/85 backdrop-blur-md text-white rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_6px_30px_rgb(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgb(59,130,246,0.7)] whitespace-nowrap border border-white/30"
            style={{
              display: 'none'
            }}
          >
            <style jsx>{`
              @media (min-width: 768px) {
                a[href="/register?type=patient"] {
                  display: inline-flex !important;
                }
              }
            `}</style>
            <span className="relative z-10">Book Now</span>
            {/* Glass shine effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close promotional banner"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}

// Usage Examples:
// <PromoBanner /> // Default berry scheme
// <PromoBanner scheme="green" /> // Green scheme
// <PromoBanner scheme="navy" dismissible={false} /> // Navy, can't dismiss
