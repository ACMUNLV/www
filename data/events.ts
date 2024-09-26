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
    title: 'SoCal Region ICPC',
    date: new Date('2024-11-16T00:00:00'), // Nov 16
    description:
      'UNLV is planning to compete at the South California Internation Competitive Programming Competition (ICPC)',
    location: 'Riverside College',
    type: 'Competition',
  },
  {
    title: 'Dynamic Programming',
    date: new Date('2024-09-18T00:00:00'), // September 18, 2024
    startTime: new Date('2024-09-18T17:00:00'), // 5:00pm  PST
    endTime: new Date('2024-09-18T18:00:00'),   // 6:00pm PST
    description: 'General Event',
    location: 'TBE-B 361',
    type: 'General',
  },
  {
    title: 'Graph Theory',
    date: new Date('2024-09-25T00:00:00'), // September 25, 2024
    startTime: new Date('2024-09-25T17:00:00'), // 5:00pm  PST
    endTime: new Date('2024-09-25T18:00:00'), // 6:00pm PST
    description: 'General Event',
    location: 'TBE-B 361',
    type: 'General',
  },
  {
    title: 'Hashmaps',
    date: new Date('2024-10-02T00:00:00'), // September 18, 2024
    startTime: new Date('2024-10-02T17:00:00'), //5:00 - 6:00pm PSt,
    endTime: new Date('2024-10-02T18:00:00'), //5:00 - 6:00pm PSt,
    description: 'General Event',
    location: 'TBE-B 361',
    type: 'General',
  },
]