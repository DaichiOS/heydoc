'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface HeyDocLoaderProps {
  message?: string
  fullScreen?: boolean
  variant?: 'default' | 'pulse' | 'pulse-enhanced' | 'dots' | 'medical'
}

/**
 * Main HeyDoc loading component with multiple variants
 * Use this consistently across the app for loading states
 */
export function HeyDocLoader({
  message = 'Loading...',
  fullScreen = true,
  variant = 'default'
}: HeyDocLoaderProps) {
  const containerClass = fullScreen
    ? 'fixed inset-0 flex flex-col items-center justify-center bg-[#9ad134] z-50'
    : 'flex flex-col items-center justify-center p-8'

  return (
    <div className={containerClass}>
      <div className="text-center">
        {/* Logo with animation */}
        <div className="relative">
          <LogoAnimation variant={variant} />
        </div>
      </div>
    </div>
  )
}

/**
 * Logo animation variants
 */
function LogoAnimation({ variant }: { variant: string }) {
  switch (variant) {
    case 'pulse':
      return <PulseLogoAnimation />
    case 'pulse-enhanced':
      return <PulseEnhancedAnimation />
    case 'medical':
      return <MedicalAnimation />
    case 'dots':
      return <DotsAnimation />
    default:
      return <DefaultLogoAnimation />
  }
}

/**
 * Default: Logo with subtle breathing animation
 */
function DefaultLogoAnimation() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-[#1C1B3A]/10 animate-ping"
           style={{ animationDuration: '2s' }}
      />

      {/* Logo container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="animate-breathe">
          <Image
            src="/logos/heydoc.png"
            alt="HeyDoc"
            width={100}
            height={33}
            priority
          />
        </div>
      </div>
    </div>
  )
}

/**
 * Pulse: Heartbeat-style animation (medical theme)
 * Uses animated GIF logo
 */
function PulseLogoAnimation() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Animated GIF logo */}
      <div className="relative z-10">
        <Image
          src="/logos/heydoc.gif"
          alt="HeyDoc Loading"
          width={200}
          height={67}
          priority
          unoptimized
          className="w-56 h-auto"
          style={{ maxWidth: '280px' }}
        />
      </div>
    </div>
  )
}

/**
 * Pulse Enhanced: Animated logo with subtle ring effects
 */
function PulseEnhancedAnimation() {
  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      {/* Subtle pulse rings */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 rounded-full border border-[#1C1B3A]/20 animate-ping"
             style={{ animationDuration: '2s' }}
        />
      </div>

      {/* Custom animated logo GIF */}
      <Image
        src="/animations/heydoc-loading.gif"
        alt="HeyDoc Loading"
        width={200}
        height={67}
        priority
        unoptimized // Important: prevents Next.js from optimizing GIF
        className="relative z-10 w-56 h-auto"
        style={{ maxWidth: '280px' }}
      />
    </div>
  )
}

/**
 * Medical: Stethoscope listening animation
 */
function MedicalAnimation() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Circular progress */}
      <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#1C1B3A"
          strokeWidth="2"
          strokeDasharray="70 213"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>

      {/* Logo in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/logos/heydoc.png"
          alt="HeyDoc"
          width={80}
          height={27}
          priority
        />
      </div>
    </div>
  )
}

/**
 * Dots: Simple modern loading animation
 */
function DotsAnimation() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image
        src="/logos/heydoc.png"
        alt="HeyDoc"
        width={120}
        height={40}
        priority
      />

      <div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-full bg-[#1C1B3A] animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: '0.6s'
            }}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * Loading dot with staggered animation
 */
function LoadingDot({ delay }: { delay: number }) {
  return (
    <div
      className="w-2 h-2 rounded-full bg-[#1C1B3A] animate-bounce"
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: '1s'
      }}
    />
  )
}

/**
 * Inline loader for buttons and small spaces
 */
export function InlineLoader({
  size = 'default',
  color = 'primary',
  className = ''
}: {
  size?: 'small' | 'default' | 'large'
  color?: 'primary' | 'white' | 'slate'
  className?: string
}) {
  const sizeClasses = {
    small: 'h-4 w-4 border-2',
    default: 'h-6 w-6 border-2',
    large: 'h-8 w-8 border-3'
  }

  const colorClasses = {
    primary: 'border-[#1C1B3A] border-t-transparent',
    white: 'border-white border-t-transparent',
    slate: 'border-slate-400 border-t-transparent'
  }

  return (
    <div
      className={`animate-spin rounded-full ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}

/**
 * Skeleton loader for content placeholders
 */
export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
  )
}

/**
 * Page transition loader (appears at top of page)
 */
export function PageTransitionLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        return prev + 10
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200">
      <div
        className="h-full bg-[#1C1B3A] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/**
 * Content shimmer effect (like Facebook/LinkedIn)
 */
export function ContentShimmer({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded animate-shimmer"
          style={{
            width: i === lines - 1 ? '60%' : '100%'
          }}
        />
      ))}
    </div>
  )
}

/**
 * Full page loading overlay (for blocking operations)
 */
export function LoadingOverlay({ message }: { message?: string }) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm mx-4">
        <HeyDocLoader message={message} fullScreen={false} variant="pulse" />
      </div>
    </div>
  )
}
