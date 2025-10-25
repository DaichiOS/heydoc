'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { X, User, Users, Activity, FileText } from 'lucide-react'
import { useAuth } from '@/hooks/use-auth'
import { LogOut, Menu } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { NotificationBell } from '@/components/notifications/notification-bell'

import { useEffect, useState } from 'react'
export function AppHeader() {
	const { user, isAuthenticated, logout } = useAuth()
	const [showUserMenu, setShowUserMenu] = useState(false)
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const [isDesktop, setIsDesktop] = useState(false)
	const [hasMounted, setHasMounted] = useState(false)
	const router = useRouter()

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
			
			// Check if click is on the dropdown button or within the dropdown menu
			const isUserMenuClick = target.closest('[data-user-menu]') || target.closest('[data-user-dropdown]')
			const isMobileMenuClick = target.closest('[data-mobile-menu]') || target.closest('[data-mobile-menu-button]')
			
			// Only close if clicking outside the respective menus
			if (showUserMenu && !isUserMenuClick) {
				setShowUserMenu(false)
			}
			if (showMobileMenu && !isMobileMenuClick) {
				setShowMobileMenu(false)
			}
		}
		
		// Add event listener with a slight delay to avoid immediate closure
		if (showUserMenu || showMobileMenu) {
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
	}, [showUserMenu, showMobileMenu])

	if (!hasMounted) {
		return null
	}

	const userDisplayName = isAuthenticated && user ? (
		// Create display name - prefer "Dr [LastName]" for doctors
		user.role === 'doctor' && user.firstName && user.lastName
			? `Dr ${user.lastName}`
			: user.firstName && user.lastName
			? `${user.firstName} ${user.lastName}`
			: user.email
	) : ''

	const handleLogout = async () => {
		setShowUserMenu(false)
		setShowMobileMenu(false)
		await logout()
		// Force a hard refresh to ensure clean state
		window.location.href = '/'
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
						{/* Left side: Navigation Links */}
						<nav className="flex items-center gap-1">
							{/* Tools Dropdown - Always visible */}
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

							{/* Doctor-specific links */}
							{isAuthenticated && user && user.role === 'doctor' && (
								<>
									<Link
										href="/doctor/queue"
										className="flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
									>
										<Activity className="w-4 h-4" />
										<span className="text-sm">Dashboard</span>
									</Link>
									<Link
										href="/doctor/patients"
										className="flex items-center gap-1.5 text-white/90 hover:text-white font-medium transition-all duration-200 px-3 py-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
									>
										<FileText className="w-4 h-4" />
										<span className="text-sm">Patients</span>
									</Link>
								</>
							)}
						</nav>

						{/* Right side: User Controls */}
						{isAuthenticated && user ? (
							<div className="flex items-center gap-2">
								{/* Notification Bell - Only for doctors */}
								{user.role === 'doctor' && <NotificationBell />}

								{/* User Dropdown Menu */}
								<div className="relative" data-user-menu>
									<button
										onClick={(e) => {
											e.stopPropagation()
											setShowUserMenu(!showUserMenu)
										}}
										className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-200 p-1 rounded-lg hover:bg-white/10"
									>
										<div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center ring-2 ring-white/30 hover:ring-white/50 transition-all">
											<User className="w-3.5 h-3.5 text-white" />
										</div>
									</button>
									{/* Dropdown Menu */}
									{showUserMenu && (
										<div className="absolute right-0 mt-2 w-64 bg-black/50 backdrop-blur-lg rounded-lg shadow-lg shadow-[#9AD134]/20 border border-white/30 py-1 z-50" data-user-dropdown>
											{/* User Info Header */}
											<div className="px-4 py-3 border-b border-white/20">
												<p className="text-sm font-semibold text-white/95">{userDisplayName}</p>
												<p className="text-xs text-white/75 mt-0.5 capitalize">{user.role}</p>
											</div>

											{/* Menu Items */}
											<div className="py-1">
												<Link
													href={
														user.role === 'admin' ? '/admin/dashboard' :
														user.role === 'doctor' ? '/doctor/profile' :
														'/patient/profile'
													}
													className="flex items-center px-4 py-2.5 text-sm text-white/95 hover:bg-white/15 hover:text-white transition-colors"
													onClick={() => setShowUserMenu(false)}
												>
													<User className="w-4 h-4 mr-3 text-white/75" />
													My Profile
												</Link>

												{/* Divider before logout */}
												<div className="border-t border-white/20 my-1"></div>

												<button
													onClick={handleLogout}
													className="w-full flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
												>
													<LogOut className="w-4 h-4 mr-3" />
													Sign Out
												</button>
											</div>
										</div>
									)}
								</div>
							</div>
						) : (
							/* Not Authenticated - Clean, minimal design */
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
						)}
					</div>
					{/* Mobile Menu Button - Only show for unauthenticated users */}
					{!isAuthenticated && (
						<button
							onClick={(e) => {
								e.stopPropagation()
								setShowMobileMenu(!showMobileMenu)
							}}
							className="md:hidden p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
							data-mobile-menu-button
						>
							{showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					)}
					</div>
				</div>
			</div>
			{/* Mobile Slide-out Menu */}
			<div className={`
				fixed inset-y-0 right-0 w-full max-w-sm bg-slate-900 shadow-2xl transform transition-transform duration-300 ease-in-out z-50
				${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}
			`} data-mobile-menu>
				<div className="flex flex-col h-full">
					{/* Mobile Menu Header */}
					<div className="flex items-center justify-between p-4 border-b border-slate-800">
						<h2 className="text-lg font-semibold text-white">Menu</h2>
						<button
							onClick={() => setShowMobileMenu(false)}
							className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
						>
							<X className="w-5 h-5" />
						</button>
					</div>
					{/* Mobile Menu Content */}
					<div className="flex-1 overflow-y-auto p-4">
						{isAuthenticated && user ? (
							<div className="space-y-4">
								{/* User Info */}
								<div className="bg-slate-800 rounded-lg p-4">
									<div className="flex items-center gap-3 mb-2">
										<div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center">
											<User className="w-5 h-5 text-slate-300" />
										</div>
										<div>
											<p className="text-white font-medium">{userDisplayName}</p>
											<p className="text-sm text-slate-400">{user.role}</p>
										</div>
									</div>
								</div>
								{/* Navigation Links */}
								<nav className="space-y-2">
									{/* For Healthcare Providers - Only show for non-doctors */}
									{user.role !== 'doctor' && (
										<Link
											href="/register?type=doctor"
											onClick={() => setShowMobileMenu(false)}
											className="flex items-center gap-3 w-full px-4 py-3 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
										>
											<Users className="w-5 h-5" />
											<span>For Healthcare Providers</span>
										</Link>
									)}
									{/* Dashboard and Patients buttons for doctors in mobile menu */}
									{user.role === 'doctor' && (
										<>
											<Link
												href="/doctor/queue"
												onClick={() => setShowMobileMenu(false)}
												className="flex items-center gap-3 w-full px-4 py-3 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
											>
												<Activity className="w-5 h-5" />
												<span>Dashboard</span>
											</Link>
											<Link
												href="/doctor/patients"
												onClick={() => setShowMobileMenu(false)}
												className="flex items-center gap-3 w-full px-4 py-3 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
											>
												<FileText className="w-5 h-5" />
												<span>Patients</span>
											</Link>
										</>
									)}
									<Link
										href={
											user.role === 'admin' ? '/admin/dashboard' :
											user.role === 'doctor' ? '/doctor/profile' :
											'/patient/profile'
										}
										onClick={() => setShowMobileMenu(false)}
										className="flex items-center gap-3 w-full px-4 py-3 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
									>
										<User className="w-5 h-5" />
										<span>View Profile</span>
									</Link>
									<button
										onClick={handleLogout}
										className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:text-red-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
									>
										<LogOut className="w-5 h-5" />
										<span>Sign Out</span>
									</button>
								</nav>
							</div>
						) : (
							<div className="space-y-3">
								<Link
									href="/register?type=doctor"
									onClick={() => setShowMobileMenu(false)}
									className="flex items-center justify-center gap-2 w-full px-4 py-3 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
								>
									<Users className="w-5 h-5" />
									<span>For Healthcare Providers</span>
								</Link>
								<Link
									href="/login"
									onClick={() => setShowMobileMenu(false)}
									className="block w-full px-4 py-3 text-center text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
								>
									Sign In
								</Link>
								<Link
									href="/register"
									onClick={() => setShowMobileMenu(false)}
									className="block w-full px-4 py-3 text-center text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
								>
									Sign Up
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* Mobile Menu Overlay */}
			{showMobileMenu && (
				<div 
					className="fixed inset-0 bg-black/50 z-40 md:hidden"
					onClick={() => setShowMobileMenu(false)}
				/>
			)}
		</div>
	)
} 