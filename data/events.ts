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
    title: 'General Meeting',
    date: new Date('2024-10-02T00:00:00'), // September 18, 2024
    startTime: new Date('2024-10-02T17:00:00'), //5:00 - 6:00pm PSt,
    endTime: new Date('2024-10-02T18:00:00'), //5:00 - 6:00pm PSt,
    description: 'General Event',
    location: 'TBE-B 361',
    type: 'General',
  },
  {
    title: 'Python Workshop',
    date: new Date('2024-11-18T00:00:00'), // November 18, 2024
    startTime: new Date('2024-11-18T17:00:00'), //5:00 - 6:00pm PSt,
    endTime: new Date('2024-11-18T18:00:00'), //5:00 - 6:00pm PSt,
    description: 'General Event',
    location: 'TBE-B 361',
    type: 'Workshop',
  },
]