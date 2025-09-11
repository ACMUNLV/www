'use client'

import { useAuth } from '@/contexts/auth'
import type { Dispatch, SetStateAction } from 'react'
import { EventForm } from './form'
import { emptyFormValues, toCreatePayload, type EventFormValues } from './schema'

interface EventsCreateProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  onEventChange: () => void
}

const EventsCreate = ({ setOpen, onEventChange }: EventsCreateProps) => {
  const { user } = useAuth()

  async function onSubmit(values: EventFormValues) {
    try {
      if (!user) throw new Error('Unauthorized')
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toCreatePayload(values)),
      })
      if (!res.ok) throw new Error('Failed to create event')
      setOpen(false)
      onEventChange()
    } catch (error) {
      console.error('Error creating event:', error)
    }
  }

  return (
    <EventForm defaultValues={emptyFormValues()} onSubmit={onSubmit} submitLabel="Create Event" />
  )
}

export default EventsCreate
