'use client'

import { useEffect, useState } from 'react'
import { EventsContainer } from './events-container'
import type { Event } from '@prisma/client'
import { getUpcoming } from '@/server/events'
import { SectionWrapper } from '../whatwedo/wrapper'
import { texts } from '@/data/text'

export const UpcomingEvents = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [events, setEvents] = useState<Event[]>([])

  const fetchEvents = async () => {
    setLoading(true)
    const fetchedEvents = await getUpcoming()
    setEvents(fetchedEvents)
    setLoading(false)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <SectionWrapper>
      {/* header */}
      <div className="mx-auto max-w-3xl pb-6 text-center md:pb-8">
        <h1 className="h2 mb-4">{texts.upcoming.title}</h1>
        <p className="text-xl text-body-color dark:text-slate-300">{texts.upcoming.description}</p>
      </div>
      <EventsContainer selectedType={'All'} events={events} loading={loading} skeleton />
    </SectionWrapper>
  )
}
