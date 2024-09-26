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
    subtitle: 'A futuristic smart mirror that displays real-time information like weather, news, and calendar events.',
    sections: [
      {
        header: 'Header',
        paragraph: `
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        `,
      },
      {
        header: 'Header',
        paragraph: `
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        `,
      },
    ],
    src: '/img/logo/logo-bordered.png',
    alt: 'testing out stuff',
  },
]