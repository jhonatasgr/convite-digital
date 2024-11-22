'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'

import { events } from 'core'
import { DashboardEvent } from '@/components/event/event-dashboard'
import { useQuery } from '@tanstack/react-query'

export default function EventAdminPage() {
	const params = useParams()
	const todo = params.todo as string[]

	const id = todo[0]

	const [password, _] = useState<string | null>(todo[1] ?? null)

	const data = useQuery({
		queryKey: ['event'],
		queryFn: () => {
			const response = events.find(e => e.id === id && e.password === password)
			return response
		},
	})

	return data ? <DashboardEvent /> : null
}
