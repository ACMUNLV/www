import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components//ui/button'
import { Event } from '@/data/events'

interface EventCardProps {
  event: Event
}

export const EventCard = ({ event }: EventCardProps) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(event.date)

  const dayOfWeek = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(event.date)

  const formattedTime = event.time
    ? new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }).format(event.time)
    : 'N/A'

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>
          {`${formattedDate} | ${dayOfWeek}`} {event.time ? `at ${formattedTime}` : ''}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
        <p className="text-sm font-light text-gray-500">{event.type}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Add to Calendar</Button>
      </CardFooter>
    </Card>
  )
}
