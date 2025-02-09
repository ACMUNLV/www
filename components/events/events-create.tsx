'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createEvent } from '@/server/events'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Dispatch, SetStateAction } from 'react'

const eventSchema = z.object({
  title: z.string().min(2, { message: 'Title must be at least 2 characters.' }),
  date: z.string().nonempty({ message: 'Date is required.' }),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  description: z.string().min(5, { message: 'Description must be at least 5 characters.' }),
  location: z.string().optional(),
  type: z.enum(['General', 'Competition', 'Workshop']),
})

interface EventsCreateProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  onEventChange: () => void
}

const EventsCreate = ({ setOpen, onEventChange }: EventsCreateProps) => {
  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      description: '',
      location: '',
      type: 'General',
    },
  })

  async function onSubmit(values: z.infer<typeof eventSchema>) {
    try {
      await createEvent({
        ...values,
        date: new Date(values.date),
        startTime: values.startTime ? new Date(`${values.date}T${values.startTime}`) : null,
        endTime: values.endTime ? new Date(`${values.date}T${values.endTime}`) : null,
      })

      form.reset()
      setOpen(false)
      onEventChange()
    } catch (error) {
      console.error('Error creating event:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 animate-fade-in">
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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

        <Button type="submit">Create Event</Button>
      </form>
    </Form>
  )
}

export default EventsCreate
