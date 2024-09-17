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
  type: 'General' | 'Competition' | 'Workshop'
}

export interface Section {
  header: string
  paragraph: string
}

export const Projects: Project[] = [
  {
    id: 'project-idea', // could use a slug-maker function in the future?
    title: 'Project Idea',
    subtitle:
      'a very long subtitle in order to test how it may look on the project dynamic page otherwise how are you doing today',
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
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'Competition',
  },
  {
    id: 'boop-idea', // could use a slug-maker function in the future?
    title: 'Boop Idea',
    subtitle:
      'a very long subtitle in order to test how it may look on the project dynamic page otherwise how are you doing today',
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
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'Competition',
  },
  {
    id: 'doop-idea', // could use a slug-maker function in the future?
    title: 'Doop Idea',
    subtitle:
      'a very long subtitle in order to test how it may look on the project dynamic page otherwise how are you doing today',
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
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'Competition',
  },
  {
    id: 'testing-idea', // could use a slug-maker function in the future?
    title: 'Testing Idea',
    subtitle:
      'a very long subtitle in order to test how it may look on the project dynamic page otherwise how are you doing today',
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
    src: '/img/img3.jpg',
    alt: 'testing out stuff',
    type: 'Competition',
  },
  
]