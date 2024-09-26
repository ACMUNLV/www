import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Project } from '@/data/projects'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="max-w-[425px] lg:w-[425px] h-[325px] transition hover:scale-105">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0 w-full mx-auto flex justify-center">
        <Image src={project.src} alt={project.alt} className="my-4 rounded-xl h-36 w-auto" height={425} width={425} />
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  )
}
