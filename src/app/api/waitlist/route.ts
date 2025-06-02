import { waitlistApi } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema - Updated to match your table structure
const waitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(1, 'Name is required')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validationResult = waitlistSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.errors 
        },
        { status: 400 }
      )
    }

    const { email, name } = validationResult.data

    // Check if email already exists
    const emailExists = await waitlistApi.checkEmailExists(email)
    
    if (emailExists) {
      return NextResponse.json(
        { error: 'This email is already on our waitlist' },
        { status: 409 }
      )
    }

    // Add to waitlist
    const newEntry = await waitlistApi.addToWaitlist(email, name)
    
    return NextResponse.json(
      { 
        message: 'Successfully added to waitlist',
        data: newEntry
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Waitlist signup error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Waitlist API is running' },
    { status: 200 }
  )
} 