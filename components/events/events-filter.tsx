'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { EventsContainer } from './events-container'


export const EventsFilter = () => {
  const [selectedType, onTypeChange] = useState< 'General' | 'Competition' | 'Workshop' | 'All'>('All')

  const handleToggleChange = (value: string) => {
    onTypeChange(value as 'General' | 'Competition' | 'Workshop' | 'All')
  }

  return (
    <>
      <div className="flex w-full justify-between">
        <h1 className="text-5xl">Events</h1>
        <div className="hidden lg:flex">
          <ToggleGroup type="single" variant="outline" value={selectedType} onValueChange={handleToggleChange}>
            <ToggleGroupItem value="General" aria-label="Toggle general">
              General
            </ToggleGroupItem>
            <ToggleGroupItem value="Competition" aria-label="Toggle competition">
              Competition
            </ToggleGroupItem>
            <ToggleGroupItem value="Workshop" aria-label="Toggle workshops">
              Workshops
            </ToggleGroupItem>
            <ToggleGroupItem value="All" aria-label="Show all events">
              All
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="lg:hidden">
          <Select value={selectedType} onValueChange={handleToggleChange}>
            <SelectTrigger>
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Competition">Competition</SelectItem>
                <SelectItem value="Workshop">Workshops</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <EventsContainer selectedType={selectedType} />
    </>
  )
}
