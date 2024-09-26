import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { texts } from '@/data/text'
import { socials } from '@/data/links'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto my-20 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse">
        <Image
          src={texts.aboutPage['about-us'].src}
          alt={texts.aboutPage['about-us'].alt}
          width={1124}
          height={1124}
          className="h-64 w-64 transition hover:scale-105 lg:h-96 lg:w-96"
        />
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold">{texts.aboutPage['about-us'].title}</h1>
          <p className="max-w-[400px] text-left">{texts.aboutPage['about-us'].description}</p>
        </div>
      </section>

      {/* <section className="mx-auto my-16 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse">
        <div className="flex w-64 items-center justify-center gap-5 lg:w-96 lg:flex-col"> */}
          
          <section className="mx-auto my-16 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse">
        <div className="hidden lg:flex w-64 items-center justify-center gap-5 lg:w-96 lg:flex-col">
          {texts.aboutPage['why-join'].images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-auto max-w-[300px] rounded-md transition hover:scale-105"
            />
          ))}
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold">{texts.aboutPage['why-join'].title}</h1>
          <div className="space-y-10">
            {texts.aboutPage['why-join'].sections.map((section, index) => (
              <div key={index} className="mb-2">
                <h3 className="max-w-[400px] text-left text-xl font-medium">{section.header}</h3>
                <p className="max-w-[400px] text-left">{section.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto my-20 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse lg:items-start">
        <div className="flex shrink-0 flex-col items-center gap-4">
          <Image
            src={texts.aboutPage.involvement.src}
            alt={texts.aboutPage.involvement.alt}
            width={500}
            height={500}
            className="h-auto w-64 rounded-md lg:w-96"
          />
          <a
            href="https://involvementcenter.unlv.edu/organization/unlv-acm"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 lg:mb-0"
          >
            <Button size="lg">Involvement Center</Button>
          </a>
        </div>
        <div className="justify-start space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold">{texts.aboutPage.involvement.title}</h1>
          <p className="max-w-[400px] text-left">{texts.aboutPage.involvement.description}</p>
        </div>
      </section>
    </>
  )
}
