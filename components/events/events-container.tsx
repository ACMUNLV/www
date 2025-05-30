import { Events } from '@/data/events'
import { EventCard } from './event-card'

interface EventsContainerProps {
  selectedType: 'General' | 'Competition' | 'Workshop' | 'All'
}

export const EventsContainer = ({ selectedType }: EventsContainerProps) => {
  const filteredEvents = Events.filter((event) => selectedType === 'All' || event.type === selectedType)
  const today = new Date()
  today.setHours(0, 0, 0, 0) // Reset time to start of the day
  const upcomingEvents = filteredEvents.filter((event) => event.date.getTime() >= today.getTime())
  const sortedEvents = upcomingEvents.sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="my-6 flex flex-wrap justify-center gap-4 lg:my-12">
      {sortedEvents.length === 0 ? (
        <p className="mt-10 text-4xl text-neutral-400">No events available</p>
      ) : (
        sortedEvents.map((event, index) => <EventCard key={index} event={event} />)
      )}
    </div>
  )
}
