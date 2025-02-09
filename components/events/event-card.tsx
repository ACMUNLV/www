import { Button } from '@/components/ui/button'
import { Event } from '@prisma/client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Calendar } from 'lucide-react'

interface EventCardProps {
  event: Event
}

export const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(date)

  const dayOfWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    timeZone: 'UTC',
  }).format(event.date)

  const formatTime = (time: Date) =>
    new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(time)

  const formattedDate = formatDate(event.date)
  const formattedStartTime = event.startTime ? formatTime(event.startTime) : 'N/A'
  const formattedEndTime = event.endTime ? formatTime(event.endTime) : 'N/A'

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startTime ? `${event.startTime.toISOString().replace(/[-:.]/g, '')}Z/${event.endTime ? event.endTime.toISOString().replace(/[-:.]/g, '') + 'Z' : ''}` : ''}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location || '')}`

  return (
    <Card className="w-[425px] transition hover:scale-105">
      <CardHeader className="pb-3">
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>
          <span className="grid grid-cols-2 grid-rows-2">
            <span className="col-start-1 row-start-1">{`${formattedDate} | ${dayOfWeek}`}</span>
            <span className="col-start-2 row-start-1 ml-auto">{`${event.startTime ? `${formattedStartTime} - ${formattedEndTime}` : ''}`}</span>
            <span className="col-start-2 row-start-2 ml-auto">{event.location}</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span>{event.description}</span>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
          <Button>
            <Calendar className="mr-2 h-5 w-5" />
            Add to Google Calendar
          </Button>
        </a>
      </CardFooter>
    </Card>
  )
}
