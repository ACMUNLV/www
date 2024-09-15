import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto my-16 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse">
        <Image
          src="/img/logo-bordered.png"
          alt={'ACM UNLV Logo'}
          width={1124}
          height={1124}
          className="h-64 w-64 transition hover:scale-105 lg:h-96 lg:w-96"
        />
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold">What is ACM?</h1>
          <p className="max-w-[400px] text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="mx-auto my-16 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse">
        <div className="flex w-64 items-center justify-center gap-5 lg:w-96 lg:flex-col">
          <Image
            src="/img/ICPC.png"
            alt={'ICPC Logo'}
            width={280}
            height={280}
            className="transition hover:scale-105"
          />
          <div className="h-36 w-36 bg-red-500"></div>
          <div className="h-36 w-36 bg-red-500"></div>
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold">Why Join?</h1>
          <p className="max-w-[400px] text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>

      <section className="mx-auto my-16 flex max-w-[850px] flex-col items-center justify-between lg:flex-row-reverse">
        <div className="flex shrink-0 flex-col items-center justify-center gap-4">
          <Image
            src="/img/eh.jpg"
            alt="UNLV Participation"
            width={500}
            height={500}
            className="h-auto w-64 lg:w-96"
          />
          <Button size="lg">
            <Link href="https://involvementcenter.unlv.edu/organization/unlv-acm" target="_blank">
              Involvement Center
            </Link>
          </Button>
        </div>
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold">How To Get Involved?</h1>
          <p className="max-w-[400px] text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
    </>
  )
}
