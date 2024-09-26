
import AnimatedSVG from '@/components/animated-svg'
import Footer from '@/components/layout/footer'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <AnimatedSVG />
      <main className="mt-48 grow">{children}</main>
      <Footer />
    </>
  )
}
