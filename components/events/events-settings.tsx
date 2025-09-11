'use client'

import { useState } from 'react'
import { Settings } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs'
import EventsCreate from './event-create'
import EventsDelete from './event-delete'
import type { Event } from '@/generated/prisma'
import EventsEdit from './event-edit'

interface EventsEditProps {
  events: Event[]
  onEventChange: () => void
}

const EventsSettings = ({ events, onEventChange }: EventsEditProps) => {
  const [activeTab, setActiveTab] = useState('create')
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild> 
        <Button size={'icon'}>
          <Settings />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Manage Events</DialogTitle>
          <DialogDescription>Select an action below.</DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Tab Buttons */}
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="create">Create</TabsTrigger>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="delete">Delete</TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="create">
            <EventsCreate setOpen={setOpen} onEventChange={onEventChange} />
          </TabsContent>
          <TabsContent value="edit">
            <EventsEdit events={events} setOpen={setOpen} onEventChange={onEventChange} />
          </TabsContent>
          <TabsContent value="delete">
            <EventsDelete setOpen={setOpen} events={events} onEventChange={onEventChange} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export default EventsSettings
