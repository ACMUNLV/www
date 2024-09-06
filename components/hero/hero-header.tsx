import Link from 'next/link'
import { texts } from '@/data/text'

export const HeroHeader = () => {
  return (
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[900px] text-center" data-wow-delay=".2s">
            {/* header */}
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Welcome to <span className="text-red-600">{`UNLV ACM'`}</span>s Web Page!
            </h1>
            <p className="mb-5 text-base !leading-relaxed text-body-color dark:text-slate-300 sm:text-lg md:text-xl">
              {texts.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="#"
                className="inline-block min-w-56 transform rounded-lg border border-gray-300 bg-red-700 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:-translate-y-1 hover:bg-red-800 dark:border-none"
              >
                {texts.hero.firstOption}
              </Link>

              <Link
                href="#"
                className="inline-block min-w-56 transform rounded-lg border-slate-300 bg-slate-50 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-100 "
              >
                {texts.hero.secondOption}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
