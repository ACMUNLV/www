import Hero from '@/components/hero/hero'
import WhatWedo from '@/components/whatwedo/whatwedo'
import MemberList from '@/components/members/members'

export async function generateMetadata() {
  return {
    title: 'Events',
  }
}


export default function EventsPage() {
  return (
    <>
      <h1>Events</h1>
    </>
  )
}
