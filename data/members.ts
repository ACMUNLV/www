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
    src: 'https://media.licdn.com/dms/image/v2/D4E03AQHBdLREUaF4LQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1696988737861?e=1732147200&v=beta&t=791EVvnyqd118YXn4hpuRAGNg8Dsrs3Tk2pzuClXC8g',
    link: 'https://www.linkedin.com/in/athanasios-t-8a17b4294/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    title: 'Vice President of ICPC Competition',
    titles: ['Goose Farmer', 'Duke of Arrakis'],
  },
  {
    name: 'Daniel Mamuza',
    school: 'University of Nevada, Las Vegas',
    src: 'https://danielmamuza.com/assets/profile/portrait.webp',
    link: 'https://danielmamuza.com/',
    title: 'Vice President of Projects',
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
    src: 'https://media.licdn.com/dms/image/v2/D5603AQHr1GDcOR-C4g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715378785228?e=1732147200&v=beta&t=8DMl9X4NBbxfF7jpIWU8V1bJKDzrPf_sSRQTen_ttck',
    link: 'https://www.linkedin.com/in/daniel-gladstein-1b1ba0207/',
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
