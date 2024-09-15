import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Projects',
}
export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-6">
        <h1 className="text-2xl lg:text-6xl">Projects</h1>
        <div className="grid grid-cols-2 gap-4 justify-center items-center my-4">
          <div className="h-72 w-96 bg-gray-200">Card to be made</div>
          <div className="h-72 w-96 bg-gray-200">Card to be made</div>
          <div className="h-72 w-96 bg-gray-200">Card to be made</div>
          <div className="h-72 w-96 bg-gray-200">Card to be made</div>
          <div className="h-72 w-96 bg-gray-200">Card to be made</div>
        </div>
      </section>
    </>
  )
}
