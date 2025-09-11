'use client'

import { useState } from 'react'
import type { Event } from '@/generated/prisma'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { SquarePen } from 'lucide-react'
import { EventForm } from '../form'
import { toFormValues, toUpdatePayload } from '../schema'
import { useAuth } from '@/contexts/auth'

interface EditEventCardProps {
  event: Event
  onUpdated?: () => void
}

function EditEventCard({ event, onUpdated }: EditEventCardProps) {
  const { user } = useAuth()
  const [open, setOpen] = useState(false)
  if (!user) return null

  async function handleSubmit(values: any) {
    const payload = toUpdatePayload(values)
    const res = await fetch(`/api/events/${event.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (res.ok) {
      setOpen(false)
      onUpdated?.()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8" aria-label={`Edit ${event.title}`}>
          <SquarePen className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
        </DialogHeader>
        <EventForm
          defaultValues={toFormValues(event)}
          onSubmit={handleSubmit}
          submitLabel="Update Event"
          deleteButton
          onDelete={async () => {
            const res = await fetch(`/api/events/${event.id}`, { method: 'DELETE' })
            if (res.ok) {
              setOpen(false)
              onUpdated?.()
            }
          }}
        />
        <DialogFooter />
      </DialogContent>
    </Dialog>
  )
}

export default EditEventCard
