'use client'

import { Button } from '@/components/common/custom-button'
import { cn } from '@/libs/util'
import { useTheme } from 'next-themes'
import { WiDaySunny } from 'react-icons/wi'
import { BsStars } from 'react-icons/bs'

function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const currentTheme = theme || 'light'

  const handleToggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }

  const rotationClass = currentTheme === 'dark' ? 'rotate-0' : 'rotate-720'

  return (
    <Button variant="ghost" size="sm" onClick={handleToggleTheme} rel="noreferrer">
      <div className="flex items-center justify-center">
        <div className={`cursor-pointer rounded-full transition-transform duration-1000 ${rotationClass}`}>
          {currentTheme === 'dark' ? (
            <BsStars
              className={cn('h-7 w-7')}
              // stuff here
            />
          ) : (
            <WiDaySunny
              className={cn('h-9 w-9')}
              // stuff here
            />
          )}
        </div>
      </div>
    </Button>
  )
}

export default ThemeToggle
