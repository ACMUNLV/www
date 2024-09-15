import { Events } from '@/data/events'
import { EventCard } from './event-card'

interface EventsContainerProps {
  selectedType: 'General' | 'Competition' | 'Workshop' | 'All'
}

export const EventsContainer = ({ selectedType }: EventsContainerProps) => {
  const filteredEvents = Events.filter((event) => selectedType === 'All' || event.type === selectedType)

  return (
    <div className="my-12 flex flex-wrap gap-4">
      {filteredEvents.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  )
}
