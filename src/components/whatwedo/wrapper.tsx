export const WhatWeDoWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative border-b-[1px] dark:border-slate-500">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {children} {/* Stuff and stuff and stuff */}
        </div>
      </div>
    </section>
  )
}
