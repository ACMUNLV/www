'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from '@/components/layout/footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      disable: 'phone',
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <main suppressHydrationWarning className="grow">
        {children}
      </main>
      <Footer />
    </>
  )
}
