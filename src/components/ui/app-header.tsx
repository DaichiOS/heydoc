'use client'

import Link from 'next/link'
import { X, Menu } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function AppHeader() {
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)
	const [hasMounted, setHasMounted] = useState(false)

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

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement
			const isMobileMenuClick = target.closest('[data-mobile-menu]') || target.closest('[data-mobile-menu-button]')

			if (showMobileMenu && !isMobileMenuClick) {
				setShowMobileMenu(false)
			}
		}

		if (showMobileMenu) {
			setTimeout(() => {
				document.addEventListener('click', handleClickOutside)
			}, 0)
		}

		// Prevent body scroll when mobile menu is open
		if (showMobileMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.removeEventListener('click', handleClickOutside)
			document.body.style.overflow = 'unset'
		}
	}, [showMobileMenu])

	if (!hasMounted || !isDesktop) {
		return null
	}

	return (
		<div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
			<div className="max-w-7xl mx-auto">
				<div className="bg-blue-100/40 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-blue-200/50">
					<div className="flex items-center justify-between">
						<div className="flex items-center flex-1">
							<Link
								href="/"
								className="group transition-all duration-200 hover:opacity-90"
							>
								<Image
									src="/logos/heydoc.png"
									alt="HeyDoc"
									width={140}
									height={48}
									className="h-8 w-auto transition-all duration-200 hover:scale-105"
									priority
								/>
							</Link>
						</div>
						{/* Desktop Menu - Ultra Clean (no dropdown) */}
						<div className="hidden md:flex items-center gap-4 flex-1 justify-center">
							{/* Empty center space for ultra-clean look */}
						</div>

						{/* Right side: CTAs */}
						<div className="flex items-center gap-2 flex-1 justify-end">
							<a
								href="https://app.heydochealth.com.au/register?type=doctor"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 px-3 py-1.5 rounded-md text-sm"
							>
								For Providers
							</a>
							<div className="w-px h-4 bg-gray-300"></div>
							<a
								href="https://app.heydochealth.com.au/login"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-700 hover:text-gray-900 hover:bg-blue-200/40 font-medium transition-all duration-200 px-3 py-1.5 rounded-md text-sm"
							>
								Sign In
							</a>
							<a
								href="https://app.heydochealth.com.au/register"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-blue-500 text-white hover:bg-blue-600 font-semibold transition-all duration-200 px-4 py-1.5 rounded-md text-sm shadow-md"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
