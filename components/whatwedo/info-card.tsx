'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { AboutModal } from '@/components/whatwedo/modal'
import { cn } from '@/lib/utils'

type InfoCardProps = {
  image?: string
  header?: string
  description?: string
  linkText?: string
}

const InfoCard = ({ description, header, image }: InfoCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <div>
      <div className="flex h-[375px] flex-col rounded-lg bg-white p-6 drop-shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3">
          <Image src={image ?? ''} alt="image" className="h-28 w-auto" width={100} height={100} />
          <h3 className="font-dosis font-semibold text-gray-900">{header}</h3>
          <p className="font-dosis flex-wrap text-center text-sm text-gray-900">{description}</p>
        </div>
        <div className="mt-3 flex flex-grow flex-col items-center justify-end">
          <button
            type="button"
            className={cn(
              'font-dosis inline-flex items-center',
              'rounded-lg border border-gray-300 bg-white px-3 py-2',
              'text-sm font-medium leading-4 text-gray-700 shadow-sm',
              'hover:bg-gray-50 hover:text-gray-900'
            )}
            onClick={handleModalToggle}
          >
            Learn more
          </button>
        </div>
      </div>
      <AboutModal isOpen={isModalOpen} onClose={handleModalToggle} activity={header} />
    </div>
  )
}

export default InfoCard
