import { EventCard } from './event-card'
import { EventSkeleton } from './event-skeleton'
import { Event } from '@/generated/prisma'

interface EventsContainerProps {
  selectedType: 'General' | 'Competition' | 'Workshop' | 'All'
  events: Event[]
  loading: boolean
  onChange?: () => void
}

export const EventsContainer = ({ selectedType, events, loading, onChange }: EventsContainerProps) => {
  const filteredEvents = events.filter((event) => selectedType === 'All' || event.type === selectedType)
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to start of the day
  const upcomingEvents = filteredEvents.filter((event) => event.date.getTime() >= today.getTime())
  const sortedEvents = upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="my-6 flex flex-wrap justify-center gap-4 lg:my-12">
      {loading ? (
        Array.from({ length: 4 }).map((_, i) => <EventSkeleton key={i} />)
      ) : sortedEvents.length === 0 ? (
        <p className="mt-10 text-4xl text-neutral-400">No events available</p>
      ) : (
        sortedEvents.map((event, index) => <EventCard key={index} event={event} onChange={onChange} />)
      )}
    </div>
  )
}
