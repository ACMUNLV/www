import { EventsContainer } from '@/components/events/events-container'
import { EventsFilter } from '@/components/events/events-filter'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
}

export default function EventsPage() {

  return (
    <section className="mx-auto flex max-w-[850px] flex-col items-center justify-between">
      <EventsFilter />
    </section>
  )
}
