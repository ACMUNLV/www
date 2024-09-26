import type { Metadata } from 'next'
import { EventsFilter } from '@/components/events/events-filter'
import { EventsCalendar } from '@/components/events/events-calendar'


export const metadata: Metadata = {
  title: 'Events',
}

export default function EventsPage() {

  return (
    <section className="mx-auto flex max-w-[900px] flex-col items-center justify-between">
      {/* <EventsCalendar /> */}
      <EventsFilter />
    </section>
  )
}
