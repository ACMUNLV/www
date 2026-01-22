'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/contexts/auth'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Dispatch, SetStateAction } from 'react'
import type { Event } from '@/generated/prisma'

const eventSchema = z
  .object({
    event: z.string().min(1, { message: 'Event selection is required.' }),
    confirm: z.string(),
  })
  .refine((data) => data.confirm === 'confirm', {
    message: "Please type 'confirm' to proceed with the deletion.",
    path: ['confirm'],
  })

interface EventsDeleteProps {
  events: Event[]
  setOpen: Dispatch<SetStateAction<boolean>>
  onEventChange: () => void
}

const EventsDelete = ({ events, setOpen, onEventChange }: EventsDeleteProps) => {
  const { user } = useAuth()
  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      event: '',
      confirm: '',
    },
  })

  async function onSubmit(values: z.infer<typeof eventSchema>) {
    try {
      const eventId = Number.parseInt(values.event, 10)
      if (isNaN(eventId)) {
        throw new Error('Invalid event selected')
      }

      if (!user) throw new Error('Unauthorized')
      const res = await fetch(`/api/events/${eventId}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete')

      form.reset()
      setOpen(false)
      onEventChange()
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Select Event */}
        <FormField
          control={form.control}
          name="event"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Event to Delete</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Event" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {events.map((event) => (
                      <SelectItem key={event.id} value={event.id.toString()}>
                        {event.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirmation Input */}
        <FormField
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type &apos;confirm&apos; to Delete</FormLabel>
              <FormControl>
                <Input placeholder="confirm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="bg-primary">
          Delete Event
        </Button>
      </form>
    </Form>
  )
}

export default EventsDelete
