/* 
  Edit projects within here
*/

export interface Project {
  id: string
  title: string
  subtitle: string
  sections: Section[]
  src: string
  alt: string
}

export interface Section {
  header: string
  paragraph: string
}

export const Projects: Project[] = [
  {
    id: 'lcd-display', // could use a slug-maker function in the future?
    title: 'LCD Display',
    subtitle: 'An interactive LED display showcasing dynamic visuals, perfect for creative and informational displays.',
    sections: [
      {
        header: 'Overview',
        paragraph: `
        This project is a friendly introduction to programming and working on lower level computer systems. 
        `,
      },
      {
        header: 'Materials',
        paragraph: `
          Jumper cables, Arduino UNO 3, variable resistors, breadboard, and an LCD 16x2 display.
        `,
      },
      {
        header: 'Learning Objectives',
        paragraph: `
          Learning how to work with simple circuits and breadboards (including topics such as soldering), low
           level systems programming, smaller computers, and programming on Arduinos.
        `,
      },
      {
        header: 'Future Plans',
        paragraph: `
          Adding more functionality to the system, whether to display the problems of the day, the date, weather, etc.
        `,
      },
    ],
    src: '/img/logo/logo-bordered.png',
    alt: 'LCD Display Image',
  },
  {
    id: 'smart-mirror', // could use a slug-maker function in the future?
    title: 'Smart-Mirror',
    subtitle:
      'A Raspberry Pi-powered smart mirror project that uses the MagicMirror framework to display useful information through a two-way mirror setup.',
    sections: [
      {
        header: 'Overview',
        paragraph: `
         This is a fun interactive project that allows members to create their own personalized display using API’s of
          their choosing to display the relevant information they’d like
        `,
      },
      {
        header: 'Materials',
        paragraph: `
          The materials required are a Raspberry Pi and a two-way mirror housing with an LED monitor behind it.

        `,
      },
      {
        header: 'Learning Objectives',
        paragraph: `
        To allow members to understand better how prebuilt frameworks and APIs can work together to make powerful tools that support real-life products and applications.
        `,
      },
      {
        header: 'Future Plans',
        paragraph: `
        Develop our own club API that can display information about the club on the mirror.
`,
      },
    ],
    src: '/img/logo/logo-bordered.png',
    alt: 'testing out stuff',
  },
]
