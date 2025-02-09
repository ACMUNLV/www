import Hero from '@/components/hero/hero'
import WhatWedo from '@/components/whatwedo/whatwedo'
import MemberList from '@/components/members/members'
import { UpcomingEvents } from '@/components/events/upcoming-events'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWedo />
      <UpcomingEvents />
      <MemberList />
    </>
  )
}
