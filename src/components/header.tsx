"use client"

import Image from "next/image"

interface HeaderProps {
	className?: string
}

export function Header({ className = '' }: HeaderProps) {
	return (
		<header className={`px-6 sm:px-8 lg:px-12 pt-8 sm:pt-8 pb-6 sm:pb-4 ${className}`}>
			<div className="flex justify-start">
				<a 
					href="https://app.heydochealth.com.au/" 
					target="_blank" 
					rel="noopener noreferrer"
					className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg active:scale-95"
				>
					<Image
						src="/logos/heydoc.png"
						alt="heydoc"
						width={600}
						height={300}
						className="h-36 sm:h-40 lg:h-48 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110"
						priority
					/>
				</a>
			</div>
		</header>
	)
} 