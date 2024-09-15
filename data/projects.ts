/* 
  Edit projects within here
*/

export interface Project {
  id: string
  title: string
  description: string
  src: string
  alt: string
  type: 'General' | 'Competition' | 'Workshop'
}

export const Projects: Project[] = [
  {
    id: 'project-idea', // could use a slug-maker function in the future?
    title: 'Project Idea',
    description:
      'UNLV is planning to compete at the South California Internation Competitive Programming Competition (ICPC)',
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'Competition',
  },
  {
    id: 'led-display', // could use a slug-maker function in the future?
    title: 'Led Display',
    description: `Dispaly balhasdg`,
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'General',
  },
  {
    id: 'smart-mirror', // could use a slug-maker function in the future?
    title: 'Smart Mirror',
    description: `mirror. but smart :)`,
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'General',
  },
]