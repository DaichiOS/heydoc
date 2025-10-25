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

	if (!hasMounted) {
		return null
	}

	// Mobile Navigation (Clarity Care style)
	if (!isDesktop) {
		return (
			<>
				<div className="fixed top-0 left-0 right-0 z-50 p-3">
					<div className="bg-gradient-to-r from-black/40 via-[#9AD134]/15 to-black/40 backdrop-blur-lg rounded-full px-4 py-2 shadow-lg shadow-[#9AD134]/20 border border-[#9AD134]/30 ring-1 ring-[#9AD134]/20">
						<div className="flex items-center justify-between">
							<Link href="/" className="flex items-center">
								<Image
									src="/logos/heydoc-white.png"
									alt="HeyDoc"
									width={100}
									height={32}
									className="h-6 w-auto"
									priority
								/>
							</Link>
							<button
								onClick={(e) => {
									e.stopPropagation()
									setShowMobileMenu(!showMobileMenu)
								}}
								className="text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors"
								data-mobile-menu-button
							>
								{showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				{showMobileMenu && (
					<div
						className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
						data-mobile-menu
					>
						<div className="fixed top-16 left-3 right-3 bg-gradient-to-r from-black/50 via-[#9AD134]/20 to-black/50 backdrop-blur-lg rounded-3xl shadow-2xl shadow-[#9AD134]/20 border border-[#9AD134]/30 overflow-hidden">
							<div className="p-5 space-y-3">
								<a
									href="https://app.heydochealth.com.au/register?type=patient"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full bg-[#9AD134]/90 text-white text-center py-2.5 rounded-full font-semibold hover:bg-[#9AD134] transition-colors shadow-[0_0_20px_rgba(154,209,52,0.5)]"
									onClick={() => setShowMobileMenu(false)}
								>
									Book Consultation
								</a>
								<a
									href="https://app.heydochealth.com.au/register?type=doctor"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full text-white/90 text-center py-2.5 rounded-full font-medium hover:bg-white/10 transition-colors"
									onClick={() => setShowMobileMenu(false)}
								>
									For Providers
								</a>
								<a
									href="https://app.heydochealth.com.au/login"
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full text-white/90 text-center py-2.5 rounded-full font-medium hover:bg-white/10 transition-colors"
									onClick={() => setShowMobileMenu(false)}
								>
									Sign In
								</a>
							</div>
						</div>
					</div>
				)}
			</>
		)
	}

	// Desktop Navigation
	return (
		<div className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
			<div className="max-w-7xl mx-auto">
				<div className="bg-gradient-to-r from-black/40 via-[#9AD134]/15 to-black/40 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg shadow-[#9AD134]/30 border border-[#9AD134]/30 ring-1 ring-[#9AD134]/20">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Link
								href="/"
								className="group transition-all duration-200 hover:opacity-90"
							>
								<Image
									src="/logos/heydoc-white.png"
									alt="HeyDoc"
									width={140}
									height={48}
									className="h-8 w-auto transition-all duration-200"
									priority
								/>
							</Link>
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center gap-4">
							<nav className="flex items-center gap-1">
								{/* Tools Dropdown */}
								<div className="relative group">
									<button className="flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-white/10 cursor-pointer">
										<span className="text-sm">Tools</span>
									</button>
									{/* Dropdown */}
									<div className="absolute left-0 mt-2 w-56 bg-black/50 backdrop-blur-lg rounded-lg shadow-lg shadow-[#9AD134]/20 border border-white/30 py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
										<Link
											href="/tools/due-date-calculator"
											className="flex items-start px-4 py-2.5 text-sm text-white/95 hover:bg-white/15 hover:text-white transition-colors"
										>
											<div>
												<div className="font-medium">Due Date Calculator</div>
												<div className="text-xs text-white/75 mt-0.5">Calculate your pregnancy due date</div>
											</div>
										</Link>
										<Link
											href="/tools/due-date-calculator/pregnancy-health-guide"
											className="flex items-start px-4 py-2.5 text-sm text-white/95 hover:bg-white/15 hover:text-white transition-colors"
										>
											<div>
												<div className="font-medium">Pregnancy Health Guide</div>
												<div className="text-xs text-white/75 mt-0.5">Essential pregnancy health info</div>
											</div>
										</Link>
									</div>
								</div>
							</nav>

							{/* Right side: CTAs */}
							<div className="flex items-center gap-2">
								<a
									href="https://app.heydochealth.com.au/register?type=doctor"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/80 hover:text-white font-medium transition-all duration-200 px-3 py-1.5 rounded-md text-sm"
								>
									For Providers
								</a>
								<div className="w-px h-4 bg-white/30"></div>
								<a
									href="https://app.heydochealth.com.au/login"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white/90 hover:text-white hover:bg-white/10 font-medium transition-all duration-200 px-3 py-1.5 rounded-md text-sm"
								>
									Sign In
								</a>
								<a
									href="https://app.heydochealth.com.au/register"
									target="_blank"
									rel="noopener noreferrer"
									className="bg-[#9AD134]/90 text-white hover:bg-[#9AD134] font-semibold transition-all duration-200 px-4 py-1.5 rounded-md text-sm shadow-[0_0_20px_rgba(154,209,52,0.5)] hover:shadow-[0_0_25px_rgba(154,209,52,0.7)]"
								>
									Get Started
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
