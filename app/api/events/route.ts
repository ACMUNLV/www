import { NextResponse } from 'next/server'
import { db } from '@/server/db'
import { isAdminRequest, unauthorizedJson } from '@/server/auth'
import { combineDateAndTime } from '@/lib/events'

export async function GET() {
  try {
    const events = await db.event.findMany({
      orderBy: { date: 'asc' },
      take: 100,
    })
    return NextResponse.json(events)
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  const isAdmin = await isAdminRequest(req)
  if (!isAdmin) return unauthorizedJson()
  try {
    const body = await req.json()
    const eventDate = body.date ? new Date(body.date) : null
    const startDateTime = combineDateAndTime(eventDate, typeof body.startTime === 'string' ? body.startTime : null)
    const endDateTime = combineDateAndTime(eventDate, typeof body.endTime === 'string' ? body.endTime : null)
    const created = await db.event.create({
      data: {
        title: body.title,
        date: eventDate!,
        startTime: startDateTime,
        endTime: endDateTime,
        description: body.description,
        location: body.location ?? null,
        type: body.type,
      },
    })
    return NextResponse.json(created, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 })
  }
}
