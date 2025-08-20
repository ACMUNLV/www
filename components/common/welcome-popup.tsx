'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { texts } from '@/data/text'

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!texts.interestForm.showPopup) {
      return
    }

    const hasSeenPopup = localStorage.getItem('acm-welcome-popup-seen')

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('acm-welcome-popup-seen', 'true')
  }

  const handleFormClick = () => {
    window.open(texts.interestForm.form.url, '_blank')
    handleClose()
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleClose()
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center ">
            <Image src="/img/logo/logo.png" alt="ACM UNLV Logo" width={64} height={64} />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">{texts.interestForm.popup.title}</DialogTitle>
          <DialogDescription className="mt-2 text-base text-gray-600">
            {texts.interestForm.popup.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <Button
            onClick={handleFormClick}
            className="w-full bg-primary py-3 text-base font-semibold text-white hover:bg-primary/80"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            {texts.interestForm.popup.acceptButtonText}
          </Button>

          <Button variant="outline" onClick={handleClose} className="w-full">
            {texts.interestForm.popup.maybeLaterButtonText}
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500">{texts.interestForm.popup.maybeLaterText}</p>
      </DialogContent>
    </Dialog>
  )
}
