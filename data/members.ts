export interface Person {
  name     : string
  pronouns?: string
  school   : string
  src      : string
  link     : string
  title   ?: string
  titles   : string[]
}

export const members: Person[] = [
  {
    name: 'Thien Nguyen',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/Thienguen.png',
    link: 'https://vankythien.dev',
    title: 'Member',
    titles: ['FullStack Developer', 'Algorithms', 'Design'],
  },
  {
    name: 'Miguel',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/BitsyBirb.png',
    link: 'https://github.com/BitsyBirb',
    title: 'Member',
    titles: ['Algorithms', 'Design'],
  },
]
