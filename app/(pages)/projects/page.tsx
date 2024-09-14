import Hero from '@/components/hero/hero'
import WhatWedo from '@/components/whatwedo/whatwedo'
import MemberList from '@/components/members/members'

export async function generateMetadata() {
  return {
    title: 'Projects',
  }
}

export default function ProjectsPage() {
  return (
    <>
      <Hero />
      <WhatWedo />
      <MemberList />
    </>
  )
}
