export const MembersWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {children} {/* Stuf */}
        </div>
      </div>
    </section>
  )
}
