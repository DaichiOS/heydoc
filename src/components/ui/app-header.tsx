'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function AppHeader() {
	const [isDesktop, setIsDesktop] = useState(false)
	const [hasMounted, setHasMounted] = useState(false)
	const [isPartnersOpen, setIsPartnersOpen] = useState(false)

	// Detect if desktop on mount and window resize
	useEffect(() => {
		const checkDesktop = () => {
			setIsDesktop(window.innerWidth >= 768) // md breakpoint is 768px
		}
		checkDesktop()
		setHasMounted(true)
		window.addEventListener('resize', checkDesktop)
		return () => window.removeEventListener('resize', checkDesktop)
	}, [])

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			if (!target.closest('[data-dropdown]')) {
				setIsPartnersOpen(false)
			}
		}

		if (isPartnersOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [isPartnersOpen])

	if (!hasMounted || !isDesktop) {
		return null
	}

	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-white py-[10px]">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							href="/"
							className="transition-opacity duration-200 hover:opacity-80"
						>
							<Image
								src="/logos/heydoc.png"
								alt="HeyDoc"
								width={240}
								height={84}
								className="h-14 w-auto"
								priority
							/>
						</Link>
					</div>

					{/* Right side: Partners dropdown + CTAs */}
					<div className="flex items-center gap-6">
						{/* Partners Dropdown */}
						<div className="relative" data-dropdown>
							<button
								onClick={() => setIsPartnersOpen(!isPartnersOpen)}
								className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base flex items-center gap-1"
							>
								Partners
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className={`transition-transform duration-200 ${isPartnersOpen ? 'rotate-180' : ''}`}
								>
									<path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</button>

							{/* Dropdown Menu */}
							{isPartnersOpen && (
								<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
									<a
										href="https://www.heydochealth.com.au/partners/barangaroo-pharmacy"
										className="block px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
										onClick={() => setIsPartnersOpen(false)}
									>
										<div className="font-medium text-sm">Barangaroo Pharmacy</div>
										<div className="text-xs text-gray-500 mt-0.5">10% off fertility supplements</div>
									</a>
								</div>
							)}
						</div>

						<a
							href="https://app.heydochealth.com.au/login"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base"
						>
							Login
						</a>
						<a
							href="https://app.heydochealth.com.au/register"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all duration-200 px-6 py-2.5 rounded-full text-base shadow-sm hover:shadow-md"
						>
							Get Started
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
