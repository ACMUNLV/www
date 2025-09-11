import type { Event } from '@/generated/prisma'

export function parseEventDates<T extends Partial<Event>>(raw: T): T {
  const parsed: any = { ...raw }
  if (raw && (raw as any).date) parsed.date = new Date((raw as any).date)
  if (raw && (raw as any).startTime) parsed.startTime = new Date((raw as any).startTime as any)
  if (raw && (raw as any).endTime) parsed.endTime = new Date((raw as any).endTime as any)
  return parsed
}

export function parseEventsArray(rawEvents: any[]): Event[] {
  return (rawEvents || []).map((e) => parseEventDates(e)) as Event[]
}

export function combineDateAndTime(dateInput: string | Date | null | undefined, timeHHmm: string | null | undefined): Date | null {
  if (!dateInput || !timeHHmm) return null
  const base = new Date(dateInput)
  if (Number.isNaN(base.getTime())) return null
  const [h, m] = timeHHmm.split(':')
  const combined = new Date(base)
  combined.setHours(Number.parseInt(h!, 10), Number.parseInt(m!, 10), 0, 0)
  return combined
}


