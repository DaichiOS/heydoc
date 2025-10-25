'use client'

import { cn } from '@/lib/utils'
import { Calendar, Mail, Sparkles, ArrowRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface DisplayCardProps {
	className?: string
	icon?: React.ReactNode
	title?: string
	description?: string
	date?: string
	iconClassName?: string
	titleClassName?: string
	href?: string
	isButton?: boolean
}

function DisplayCard({
	className,
	icon = <Sparkles className="size-4 text-blue-300" />,
	title = "Featured",
	description = "Discover amazing content",
	date = "Just now",
	iconClassName = "text-blue-500",
	titleClassName = "text-blue-500",
	href,
	isButton = false,
}: DisplayCardProps) {
	const content = (
		<>
			<div>
				<span className={cn("relative inline-block rounded-full p-1.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6", iconClassName)}>
					{icon}
				</span>
				<p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
			</div>
			<p className="whitespace-nowrap text-lg text-[#1C1B3A]">{description}</p>
			<p className="text-sm text-gray-600 font-medium">{date}</p>
		</>
	)

	const cardClassName = cn(
		"relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 backdrop-blur-sm px-4 py-3 transition-all duration-300 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] hover:shadow-2xl [&>*]:flex [&>*]:items-center [&>*]:gap-2 group",
		isButton && "cursor-pointer",
		className
	)

	if (href && isButton) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={cardClassName}
			>
				{content}
			</a>
		)
	}

	return <div className={cardClassName}>{content}</div>
}

interface DisplayCardsProps {
	cards?: DisplayCardProps[]
}

function DisplayCards({ cards }: DisplayCardsProps) {
	const defaultCards = [
		{
			className: "[grid-area:stack] hover:-translate-y-10 hover:shadow-xl transition-all duration-300",
		},
		{
			className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300",
		},
		{
			className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 hover:shadow-xl transition-all duration-300",
		},
	]

	const displayCards = cards || defaultCards

	return (
		<div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 -ml-8 lg:-ml-16">
			{displayCards.map((cardProps, index) => (
				<DisplayCard key={index} {...cardProps} />
			))}
		</div>
	)
}

export function NotificationCardsSection() {
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 0.85", "start 0.2"]
	})

	// Animations for title - MUCH more dramatic
	const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
	const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
	const titleScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1])

	// Animations for cards with staggered effect - more dramatic
	const cardsOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1])
	const cardsY = useTransform(scrollYProgress, [0.3, 0.8], [120, 0])
	const cardsScale = useTransform(scrollYProgress, [0.3, 0.8], [0.85, 1])

	const cards = [
		{
			icon: <ArrowRight className="size-4 text-white" />,
			title: "Book Your Consultation Now!",
			description: "Start your fertility journey today 🌟",
			date: "10m ago",
			iconClassName: "bg-emerald-500",
			titleClassName: "text-emerald-600",
			className: "[grid-area:stack] bg-gradient-to-br from-emerald-50 to-white border-emerald-400 hover:border-emerald-500 hover:bg-emerald-50 hover:-translate-y-10 hover:shadow-2xl transition-all duration-300",
			href: "https://app.heydochealth.com.au/register?type=patient",
			isButton: true,
		},
		{
			icon: <Calendar className="size-4 text-white" />,
			title: "Your GP is Ready!",
			description: "Jump into your consultation now 🚀",
			date: "7m ago",
			iconClassName: "bg-blue-500",
			titleClassName: "text-blue-600",
			className: "[grid-area:stack] bg-gradient-to-br from-blue-50 to-white border-blue-300 hover:border-blue-400 hover:bg-blue-50 translate-x-16 translate-y-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300",
		},
		{
			icon: <Mail className="size-4 text-white" />,
			title: "Referral Sent to Email!",
			description: "Your fertility referral is in your inbox 💌",
			date: "5m ago",
			iconClassName: "bg-rose-500",
			titleClassName: "text-rose-600",
			className: "[grid-area:stack] bg-gradient-to-br from-rose-50 to-white border-rose-300 hover:border-rose-400 hover:bg-rose-50 translate-x-32 translate-y-20 hover:translate-y-10 hover:shadow-xl transition-all duration-300",
		},
		{
			icon: <Sparkles className="size-4 text-white" />,
			title: "Your specialist is ready to see you!",
			description: "Take the next step in your fertility journey ✨",
			date: "2m ago",
			iconClassName: "bg-purple-500",
			titleClassName: "text-purple-600",
			className: "[grid-area:stack] bg-gradient-to-br from-purple-50 to-white border-purple-300 hover:border-purple-400 hover:bg-purple-50 translate-x-48 translate-y-30 hover:translate-y-20 hover:shadow-xl transition-all duration-300",
		},
	]

	return (
		<section ref={ref} className="py-20 sm:py-28 md:py-36 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
			{/* Decorative elements */}
			<motion.div
				className="absolute top-1/4 right-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"
				style={{ opacity: titleOpacity }}
			></motion.div>
			<motion.div
				className="absolute bottom-1/4 left-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl"
				style={{ opacity: titleOpacity }}
			></motion.div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Title */}
				<motion.div
					className="text-center mb-16 sm:mb-20 md:mb-24"
					style={{ opacity: titleOpacity, y: titleY, scale: titleScale }}
				>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#1C1B3A] mb-4 sm:mb-5" style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}>
						From inquiry to specialist<br />in minutes, not months!
					</h2>
					<p className="text-base sm:text-lg text-blue-600 max-w-3xl mx-auto" style={{ fontFamily: 'Satoshi, sans-serif' }}>
						Receive your referral direct to your inbox before your consultation ends
					</p>
				</motion.div>

				{/* Cards Display */}
				<motion.div
					className="pb-12"
					style={{ opacity: cardsOpacity, y: cardsY, scale: cardsScale }}
				>
					<DisplayCards cards={cards} />
				</motion.div>
			</div>
		</section>
	)
}
