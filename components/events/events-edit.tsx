'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { editEvent } from '@/server/events'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState, type Dispatch, type SetStateAction } from 'react'
import type { Event } from '@prisma/client'

const eventSchema = z.object({
  id: z.string().min(1, { message: 'Event selection is required.' }),
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  date: z.string().nonempty({ message: 'Date is required.' }),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  description: z.string().min(5, { message: 'Description must be at least 5 characters.' }),
  location: z.string().optional(),
  type: z.enum(['General', 'Competition', 'Workshop']),
})

interface EventsEditProps {
  events: Event[]
  setOpen: Dispatch<SetStateAction<boolean>>
  onEventChange: () => void
}

const EventsEdit = ({ events, setOpen, onEventChange }: EventsEditProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      id: '',
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
      location: '',
      type: 'General',
    },
  })

  const onEventSelect = (eventId: string) => {
    const selectedEvent = events.find((event) => event.id.toString() === eventId)
    if (selectedEvent) {
      setIsSelected(true)
      form.reset({
        id: selectedEvent.id.toString(),
        title: selectedEvent.title,
        date: selectedEvent.date.toISOString().split('T')[0],
        startTime: selectedEvent.startTime?.toTimeString().slice(0, 5) || '',
        endTime: selectedEvent.endTime?.toTimeString().slice(0, 5) || '',
        description: selectedEvent.description,
        location: selectedEvent.location || '',
        type: selectedEvent.type,
      })
    }
  }

  async function onSubmit(values: z.infer<typeof eventSchema>) {
    try {
      await editEvent(values.id, {
        title: values.title,
        date: values.date,
        startTime: values.startTime || undefined,
        endTime: values.endTime || undefined,
        description: values.description,
        location: values.location,
        type: values.type,
      })

      form.reset()
      setOpen(false)
      onEventChange() // Trigger a refetch of events
    } catch (error) {
      console.error('Error editing event:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Event to Edit</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value)
                  onEventSelect(value)
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Event" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.id} value={event.id.toString()}>
                      {event.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {isSelected && (
          <>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Event Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Event Location (optional)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex space-x-4">
              <FormField
                control={form.control}
                name="startTime"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endTime"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Event Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="Competition">Competition</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Update Event</Button>
          </>
        )}
      </form>
    </Form>
  )
}

export default EventsEdit
