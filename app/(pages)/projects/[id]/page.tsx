import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Projects } from '@/data/projects'
import { Metadata } from 'next'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = Projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params

  const project = Projects.find((project) => project.id === id)
  if (!project) notFound()

  return (
    <section className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-6">
      <h1 className="text-2xl lg:text-6xl">{project.title}</h1>
      <p>{project.description}</p>
      <Image src={project.src} alt={project.alt} className="my-4" height={1000} width={1000} />
      <div className="text-gray-500">
        type: {project.type} id: {project.id} alt: {project.alt}{' '}
      </div>
    </section>
  )
}
