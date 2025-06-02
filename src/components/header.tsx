"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full bg-orange-50 border-b border-orange-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - bigger size */}
          <div className="flex items-center">
            <Image
              src="/logos/heydoc-edit.png"
              alt="heydoc"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </div>

          {/* Simple CTA button */}
          <div className="flex items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-semibold"
            >
              See a doctor now
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 