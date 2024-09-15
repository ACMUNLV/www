export interface Event {
  title: string
  date: Date
  time?: Date
  description: string
  type: 'General' | 'Competition' | 'Workshop'
}

export const Events: Event[] = [
  {
    title: 'SoCal Region ICPC',
    date: new Date('2024-11-16T00:00:00'), // Nov 16
    description:
      'UNLV is planning to compete at the South California Internation Competitive Programming Competition (ICPC)',
    type: 'Competition',
  },
  {
    title: 'Dynamic Programming',
    date: new Date('2024-09-18T00:00:00'), // September 18, 2024
    time: new Date('2024-09-18T17:00:00'), //5:00 - 6:00pm PSt,
    description:
      'General Event',
    type: 'General',
  },
]