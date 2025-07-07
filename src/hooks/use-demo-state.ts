import { useEffect, useRef, useState } from 'react'

interface DemoState {
	demoStep: number
	queuePosition: number
	userReason: string
	userSymptoms: string
	doctorAvailable: boolean
	callDuration: number
	stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
}

interface DemoActions {
	handleJoinQueue: () => void
	handleCancelQueue: () => void
	resetDemo: () => void
	goToStep3: () => void
	goToStep4: () => void
	setUserReason: (reason: string) => void
	setUserSymptoms: (symptoms: string) => void
	formatCallDuration: (seconds: number) => string
	smoothScrollToElement: (element: HTMLElement, offset?: number) => void
}

export function useDemoState(): DemoState & DemoActions {
	const [demoStep, setDemoStep] = useState(0)
	const [queuePosition, setQueuePosition] = useState(4)
	const [userReason, setUserReason] = useState('')
	const [userSymptoms, setUserSymptoms] = useState('')
	const [doctorAvailable, setDoctorAvailable] = useState(false)
	const [callDuration, setCallDuration] = useState(201) // Start at 3:21 (201 seconds)
	const stepRefs = useRef<(HTMLDivElement | null)[]>([])

	// Custom smooth scroll function with better easing
	const smoothScrollToElement = (element: HTMLElement, offset: number = 0) => {
		try {
			const rect = element.getBoundingClientRect()
			const targetPosition = window.pageYOffset + rect.top - (window.innerHeight / 2) + (rect.height / 2) + offset
			const startPosition = window.pageYOffset
			const distance = targetPosition - startPosition
			const duration = 1200
			let start: number | null = null

			const easeOutCubic = (t: number): number => {
				return 1 - Math.pow(1 - t, 3)
			}

			const animation = (currentTime: number) => {
				if (start === null) start = currentTime
				const timeElapsed = currentTime - start
				const progress = Math.min(timeElapsed / duration, 1)
				
				const ease = easeOutCubic(progress)
				window.scrollTo(0, startPosition + distance * ease)
				
				if (timeElapsed < duration) {
					requestAnimationFrame(animation)
				}
			}

			requestAnimationFrame(animation)
		} catch {
			console.log('Custom scroll failed, using fallback')
			element.scrollIntoView({ 
				behavior: 'smooth', 
				block: 'center',
				inline: 'center'
			})
		}
	}

	// Queue position animation
	useEffect(() => {
		if (demoStep >= 1 && queuePosition > 2) {
			const timer = setTimeout(() => {
				setQueuePosition(prev => Math.max(2, prev - 1))
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [demoStep, queuePosition])

	// Doctor becomes available after queue countdown
	useEffect(() => {
		if (demoStep >= 1 && queuePosition === 2) {
			const timer = setTimeout(() => {
				setDoctorAvailable(true)
			}, 1000)
			return () => clearTimeout(timer)
		}
	}, [demoStep, queuePosition])

	// Call duration timer
	useEffect(() => {
		let timer: NodeJS.Timeout
		if (demoStep === 3) {
			timer = setInterval(() => {
				setCallDuration(prev => prev + 1)
			}, 1000)
		}
		return () => {
			if (timer) clearInterval(timer)
		}
	}, [demoStep])

	// Intersection observer for step refs
	useEffect(() => {
		const observers = stepRefs.current.map((ref) => {
			if (!ref) return null
			
			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						// Observer logic here if needed
					}
				},
				{ threshold: 0.6 }
			)
			
			observer.observe(ref)
			return observer
		})

		return () => {
			observers.forEach(observer => observer?.disconnect())
		}
	}, [])

	// Format call duration from seconds to MM:SS
	const formatCallDuration = (seconds: number): string => {
		const mins = Math.floor(seconds / 60)
		const secs = seconds % 60
		return `${mins}:${secs.toString().padStart(2, '0')}`
	}

	const handleJoinQueue = () => {
		const reason = userReason.trim() || "Need a medical certificate for work absence due to flu symptoms"
		const symptoms = userSymptoms.trim() || "Mild fever, headache, fatigue for 2 days"
		
		setUserReason(reason)
		setUserSymptoms(symptoms)
		setDemoStep(1)
		setQueuePosition(4)
		
		setTimeout(() => {
			if (stepRefs.current[1]) {
				smoothScrollToElement(stepRefs.current[1])
			}
		}, 100)
	}

	const handleCancelQueue = () => {
		setDemoStep(0)
		setQueuePosition(4)
		setDoctorAvailable(false)
		
		setTimeout(() => {
			if (stepRefs.current[0]) {
				smoothScrollToElement(stepRefs.current[0])
			}
		}, 100)
	}

	const resetDemo = () => {
		setDemoStep(0)
		setQueuePosition(4)
		setUserReason('')
		setUserSymptoms('')
		setDoctorAvailable(false)
		setCallDuration(201)
		
		setTimeout(() => {
			if (stepRefs.current[0]) {
				smoothScrollToElement(stepRefs.current[0])
			}
		}, 100)
	}

	const goToStep3 = () => {
		setDemoStep(3)
		
		setTimeout(() => {
			if (stepRefs.current[2]) {
				smoothScrollToElement(stepRefs.current[2])
			}
		}, 100)
	}

	const goToStep4 = () => {
		setDemoStep(4)
		
		setTimeout(() => {
			if (stepRefs.current[3]) {
				smoothScrollToElement(stepRefs.current[3])
			}
		}, 100)
	}

	return {
		// State
		demoStep,
		queuePosition,
		userReason,
		userSymptoms,
		doctorAvailable,
		callDuration,
		stepRefs,
		// Actions
		handleJoinQueue,
		handleCancelQueue,
		resetDemo,
		goToStep3,
		goToStep4,
		setUserReason,
		setUserSymptoms,
		formatCallDuration,
		smoothScrollToElement,
	}
} 