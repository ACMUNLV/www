'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import type { Event } from '@/generated/prisma'
import { EventForm } from '../form'
import { toFormValues, toUpdatePayload, type EventFormValues } from '../schema'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const selectionSchema = z.object({ id: z.string().min(1, 'Select an event') })
type Selection = z.infer<typeof selectionSchema>

interface EventsEditProps {
  events: Event[]
  setOpen: Dispatch<SetStateAction<boolean>>
  onEventChange: () => void
}

function EventsEdit({ events, onEventChange, setOpen }: EventsEditProps) {
  const [selected, setSelected] = useState<Event | null>(null)
  const selection = useForm<Selection>({
    resolver: zodResolver(selectionSchema),
    defaultValues: { id: '' },
  })

  function onEventSelect(id: string) {
    selection.setValue('id', id)
    const e = events.find((ev) => ev.id.toString() === id) ?? null
    setSelected(e)
  }

  async function onSubmit(values: EventFormValues) {
    try {
      if (!selected) return
      const payload = toUpdatePayload(values)
      const res = await fetch(`/api/events/${selected.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setOpen(false)
        onEventChange()
      }
    } catch (error) {
      console.error('Error creating event:', error)
    }
  }

  return (
    <div className="space-y-4">
      <Form {...selection}>
        <FormField
          control={selection.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Event to Edit</FormLabel>
              <Select onValueChange={(v) => onEventSelect(v)} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an Event" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {events.map((e) => (
                    <SelectItem key={e.id} value={e.id.toString()}>
                      {e.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </Form>

      {selected && <EventForm defaultValues={toFormValues(selected)} onSubmit={onSubmit} submitLabel="Update Event" />}
    </div>
  )
}

export default EventsEdit
