'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Footer from '@/components/layout/footer'
import AnimatedSVG from '@/components/animated-svg'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      disable: 'phone',
      easing: 'ease-out-sine',
    })
  }, [])

  return (
    <>
      {/* <AnimatedSVG /> */}
      <main className="mt-20 grow">{children}</main>
      <Footer />
    </>
  )
}
