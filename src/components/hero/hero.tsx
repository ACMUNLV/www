import { texts } from '@/data/text'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="w-full bg-primary py-32">
      <div className="flex flex-col items-center space-y-4 text-center">
        <Image src={texts.hero.img.src} alt={texts.hero.img.alt} className="h-64 w-auto" width={400} height={400} />
        <div className="flex flex-col items-center justify-center space-y-2">
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
