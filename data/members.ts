export interface Person {
  name     : string
  pronouns?: string
  school   : string
  src      : string
  link     : string
  title   ?: string
}

export const members: Person[] = [
  {
    name: 'Thien Nguyen',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/van-ky-nguyen.jpg',
    link: 'https://vankythien.dev',
    title: 'President',
  },
  {
    name: 'Athansios Tassiadamis',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/athanasios-tassiadamis.jpg',
    link: 'https://www.linkedin.com/in/athanasios-t-8a17b4294/',
    title: 'Vice President of Competitive Programming',
  },
  {
    name: 'Daniel Mamuza',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/daniel-mamuza.jpeg',
    link: 'https://danielmamuza.com/',
    title: 'Vice President of Project Development',
  },
  {
    name: 'Sean Cuenca',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/sean-cuenco.jpg',
    link: 'https://www.linkedin.com/in/sean-cnc/',
    title: 'Vice President of Professional Development',
  },
  {
    name: 'Daniel Gladstein',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/daniel-gladstein.jpg',
    link: 'https://www.linkedin.com/in/daniel-gladstein-1b1ba0207/',
    title: 'Treasurer',
  },
  {
    name: 'Katrina Parsom',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/katrina-parsom.jpg',
    link: 'https://github.com/tbd',
    title: 'Secretary',
  },
  {
    name: 'Miguel Alvarez Uriarte',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/miguel-alvarez.jpg',
    link: 'https://github.com/BitsyBirb',
    title: 'Liaison',
  },
  {
    name: 'Dorian Akhavan',
    school: 'University of Nevada, Las Vegas',
    src: '/img/members/dorian-akhavan.jpeg',
    link: '',
    title: 'Officer',
  },
]
