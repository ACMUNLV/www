'use client'

import InfoCard from '@/components/whatwedo/info-card'
import { SectionWrapper } from '@/components/whatwedo/wrapper'
import { texts } from '@/data/text'
import { useEffect, useRef } from 'react'

export default function WhatWedo() {
  // const [tab, setTab] = useState<number>(1)
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <SectionWrapper>
      {/* header */}
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
        <h1 className="h2 mb-4" data-aos="fade-up" data-aos-delay="150">
          {texts.whatwedo.title}
        </h1>
        <p className="text-xl text-body-color dark:text-slate-300" data-aos="fade-up" data-aos-delay="150">
          {texts.whatwedo.description}
        </p>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
        <InfoCard
          header={texts.whatwedo.tabs.first.title}
          linkText={texts.whatwedo.tabs.first.linkText}
	  image={texts.whatwedo.tabs.first.img}
	  description={texts.whatwedo.tabs.first.description}
        />
        <InfoCard
          header={texts.whatwedo.tabs.third.title}
          linkText={texts.whatwedo.tabs.third.linkText}
          image={texts.whatwedo.tabs.third.img}
          description={texts.whatwedo.tabs.third.description}
        />
        <InfoCard
          header={texts.whatwedo.tabs.second.title}
          linkText={texts.whatwedo.tabs.second.linkText}
          image={texts.whatwedo.tabs.second.img}
          description={texts.whatwedo.tabs.second.description}
        />
      </div>
    </SectionWrapper>
  )
}
