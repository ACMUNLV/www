import { z } from 'zod'
import type { Event } from '@/generated/prisma'

export const eventSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters.'),
  date: z.string().nonempty('Date is required.'), // yyyy-mm-dd
  startTime: z.string().optional(), // HH:mm
  endTime: z.string().optional(), // HH:mm
  description: z.string().min(5, 'Description must be at least 5 characters.'),
  location: z.string().optional(),
  type: z.enum(['General', 'Competition', 'Workshop']),
})

export type EventFormValues = z.infer<typeof eventSchema>

export function emptyFormValues(): EventFormValues {
  return {
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
    location: '',
    type: 'General',
  }
}

export function toFormValues(e: Event): EventFormValues {
  return {
    title: e.title,
    date: e.date.toISOString().split('T')[0] ?? '',
    startTime: e.startTime ? e.startTime.toTimeString().slice(0, 5) : '',
    endTime: e.endTime ? e.endTime.toTimeString().slice(0, 5) : '',
    description: e.description,
    location: e.location ?? '',
    type: e.type,
  }
}

export function toEventPayload(v: EventFormValues) {
  return {
    title: v.title,
    date: v.date,
    startTime: v.startTime || undefined,
    endTime: v.endTime || undefined,
    description: v.description,
    location: v.location,
    type: v.type,
  }
}

export const toUpdatePayload = toEventPayload
export const toCreatePayload = toEventPayload