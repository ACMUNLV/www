import Hero from '@/components/hero/hero'
import WhatWedo from '@/components/whatwedo/whatwedo'
import MemberList from '@/components/members/members'

export async function generateMetadata() {
  return {
    title: 'ICPC',
  }
}


export default function ICPCPage() {
  return (
    <>
      <Hero />
      <WhatWedo />
      <MemberList />
    </>
  )
}
