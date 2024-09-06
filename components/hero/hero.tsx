import { HeroDeco1 } from '@/components/hero/decoration-1'
import { HeroDeco2 } from '@/components/hero/decoration-2'
import { HeroHeader } from '@/components/hero/hero-header'
import { HeroVideo } from '@/components/hero/hero-video'
import { cn } from '@/libs/util'

const Hero = () => {
  return (
    <section
      id="hero"
      className={cn(
        'pb-12 pt-[120px] md:pb-20',
        'border-b-[1px] dark:border-slate-500',
        'relative z-10 overflow-hidden',
        'md:pt-[150px] xl:pt-[180px] 2xl:pt-[210px]'
      )}
    >
      <HeroDeco1 />
      <HeroDeco2 />
      <HeroHeader />
      <HeroVideo />
    </section>
  )
}

export default Hero
