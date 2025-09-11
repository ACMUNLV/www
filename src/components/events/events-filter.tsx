'use client'

import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { EventsContainer } from './events-container'
import type { Event } from '@/generated/prisma'
import { useAuth } from '@/contexts/auth'
import EventsSettings from '@/components/events/events-settings'
import { parseEventsArray } from '@/lib/events'

const EventTypes = ['General', 'Competition', 'Workshop', 'All']

export const EventsFilter = () => {
  const { user } = useAuth()

  const [selectedType, setSelectedType] = useState<'General' | 'Competition' | 'Workshop' | 'All'>('All')
  const [loading, setLoading] = useState<boolean>(true)
  const [events, setEvents] = useState<Event[]>([])

  const fetchEvents = async (showLoading: boolean = true) => {
    if (showLoading) setLoading(true)
    try {
      const res = await fetch('/api/events', { cache: 'no-store' })
      const data = await res.json()
      setEvents(parseEventsArray(data))
    } catch (e) {
      console.error('Failed to fetch events', e)
    } finally {
      if (showLoading) setLoading(false)
    }
  }

  useEffect(() => {
    fetchEvents(true)
  }, [])

  const handleToggleChange = (value: string) => {
    setSelectedType(value as 'General' | 'Competition' | 'Workshop' | 'All')
  }

  return (
    <>
      <div className="mx-4 flex w-full max-w-sm  justify-between lg:max-w-3xl">
        <h1 className="text-2xl md:text-5xl">Events</h1>
        <div className="hidden lg:flex">
          <ToggleGroup type="single" variant="outline" value={selectedType} onValueChange={handleToggleChange}>
            {EventTypes.map((type) => (
              <ToggleGroupItem key={type} value={type} aria-label={`Toggle ${type}`} className="font-semibold">
                {type}
              </ToggleGroupItem>
            ))}
            {user && <EventsSettings events={events} onEventChange={fetchEvents} />}
          </ToggleGroup>
        </div>
        <div className="lg:hidden">
          <Select value={selectedType} onValueChange={handleToggleChange}>
            <SelectTrigger className="font-semibold">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {EventTypes.map((type) => (
                  <SelectItem key={type} value={type} className="font-semibold">
                    {type}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <EventsContainer selectedType={selectedType} events={events} loading={loading} onChange={() => fetchEvents(false)} />
    </>
  )
}
