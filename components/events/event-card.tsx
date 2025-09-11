import { Button } from '@/components/ui/button'
import { Event } from '@/generated/prisma'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

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
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>
          {`${formattedDate} | ${dayOfWeek} ${event.startTime ? `${formattedStartTime} - ${formattedEndTime}` : ''}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
          <Button>Add to Google Calendar</Button>
        </a>
      </CardFooter>
    </Card>
  )
}
