import { texts } from '@/data/text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="w-full bg-primary py-48">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            {texts.hero.title}
          </h1>
          <p className="mx-auto max-w-[700px] text-neutral-300 md:text-xl">{texts.hero.subtitle}</p>
        </div>
        <div className="space-x-4">
          <a href="https://involvementcenter.unlv.edu/organization/unlv-acm" target="_blank">
            <Button variant="outline">Join ACM</Button>
          </a>
          <Link href="/about">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
