/* 
  Edit events within here
*/

export interface Event {
  title: string
  date: Date
  startTime?: Date
  endTime?: Date
  description: string
  location?: string
  type: 'General' | 'Competition' | 'Workshop'
}

export const Events: Event[] = [
  {
    title: 'Code-a-thon with GWC',
    date: new Date('2025-04-30T00:00:00'),
    startTime: new Date('2025-04-30T17:30:00'),
    endTime: new Date('2025-04-30T00:00:00'),
    description: `Join us for a HackerRank style Code-a-thon in collaboration with GWC! Get ready to test your coding skills!`,
    location: `AEB Flexatorium`,
    type: 'Competition',
  },
  {
    title: 'IDE Workshop',
    date: new Date('2025-01-29T00:00:00'),
    startTime: new Date('2025-01-29T17:30:00'),
    endTime: new Date('2025-01-29T20:00:00'),
    description: `We will be assisting 135 students in setting up their IDE's as well as giving some information about ACM and competitive programming!`,
    location: 'AEB 150',
    type: 'Workshop',
  },
  {
    title: 'General Meeting',
    date: new Date('2025-02-03T00:00:00'),
    startTime: new Date('2025-02-03T17:00:00'),
    endTime: new Date('2025-02-03T18:30:00'),
    description: 'General Event',
    location: 'AEB 150',
    type: 'General',
  },
  {
    title: 'Portfolio Workshop',
    date: new Date('2025-03-03T00:00:00'),
    startTime: new Date('2025-03-03T17:30:00'),
    endTime: new Date('2025-03-03T20:00:00'),
    description: `Come learn more about HTML, CSS, and Git and by the end deploy a simple static portfolio site to GitHub pages.`,
    location: 'AEB 150',
    type: 'Workshop',
  },
]
