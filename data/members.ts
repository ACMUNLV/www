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
    title: 'President',
    titles: ['FullStack Engineer', 'Algorithms', 'Design'],
  },
  {
    name: 'Athansios Tassiadamis',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/tbd.png',
    link: 'https://github.com/tbd',
    title: 'Vice President of ICPC Competition',
    titles: ['Algorithms', 'tbd'],
  },
  {
    name: 'Daniel Mamuza',
    school: 'University of Nevada, Las Vegas',
    src: 'https://danielmamuza.com/assets/profile/portrait.webp',
    link: 'https://danielmamuza.com/',
    title: 'Vice President of Open Source Projects',
    titles: ['Algorithms', 'Fullstack Engineer', 'smh'],
  },
  {
    name: 'Sean Cuenca',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/tbd.png',
    link: 'https://github.com/tbd',
    title: 'Vice President of Internship Opportunities',
    titles: ['Algorithms', 'tbd'],
  },
  {
    name: 'Daniel Gladstein',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/tbd.png',
    link: 'https://github.com/tbd',
    title: 'Treasurer',
    titles: ['Algorithms', 'tbd'],
  },
  {
    name: 'Kat...',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/tbd.png',
    link: 'https://github.com/tbd',
    title: 'Secretary',
    titles: ['Algorithms', 'tbd'],
  },
  {
    name: 'Miguel',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/BitsyBirb.png',
    link: 'https://github.com/BitsyBirb',
    title: 'Liaison',
    titles: ['Algorithms', 'Design'],
  },
  {
    name: 'Tina...',
    school: 'University of Nevada, Las Vegas',
    src: 'https://github.com/tbd.png',
    link: 'https://github.com/tbd',
    title: 'Officer',
    titles: ['Algorithms', 'tbd'],
  },
]
