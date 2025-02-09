'use server'

import { db } from './db'

export async function createEvent(eventData: {
  title: string
  date: Date
  startTime?: Date | null
  endTime?: Date | null
  description: string
  location?: string | null
  type: 'General' | 'Competition' | 'Workshop'
}) {
  return await db.event.create({
    data: {
      title: eventData.title,
      date: new Date(eventData.date),
      startTime: eventData.startTime ? new Date(eventData.startTime) : null,
      endTime: eventData.endTime ? new Date(eventData.endTime) : null,
      description: eventData.description,
      location: eventData.location || null,
      type: eventData.type,
    },
  })
}

export async function editEvent(
  eventId: string,
  updatedData: {
    title?: string
    date?: string
    startTime?: string
    endTime?: string
    description?: string
    location?: string
    type?: 'General' | 'Competition' | 'Workshop'
  }
) {
  const { date, startTime, endTime, ...otherData } = updatedData

  const eventDate = date ? new Date(date) : undefined

  let startDateTime: Date | undefined
  let endDateTime: Date | undefined

  if (eventDate && startTime) {
    startDateTime = new Date(eventDate)
    const [hours, minutes] = startTime.split(':')
    startDateTime.setHours(Number.parseInt(hours!, 10), Number.parseInt(minutes!, 10))
  }

  if (eventDate && endTime) {
    endDateTime = new Date(eventDate)
    const [hours, minutes] = endTime.split(':')
    endDateTime.setHours(Number.parseInt(hours!, 10), Number.parseInt(minutes!, 10))
  }

  return await db.event.update({
    where: { id: Number.parseInt(eventId, 10) },
    data: {
      ...otherData,
      date: eventDate,
      startTime: startDateTime,
      endTime: endDateTime,
    },
  })
}

export async function deleteEvent(eventId: number) {
  return await db.event.delete({
    where: { id: eventId },
  })
}

export async function getEvents() {
  return await db.event.findMany()
}

export async function getUpcoming() {
  return await db.event.findMany({
    where: {
      date: {
        gte: new Date(),
      },
    },
    orderBy: {
      date: 'asc',
    },
    take: 5,
  })
}
