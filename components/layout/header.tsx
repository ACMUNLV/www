'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { socials } from '@/components/common/socials'
import Image from 'next/image'

export const Header = () => {
  const [top, setTop] = useState<boolean>(true)

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top ? 'bg-background shadow-lg backdrop-blur-sm' : ''
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* */}
          <div className="mr-4 shrink-0">
            <a href="/">
              <span style={{ fontSize: '1.3em' }}>
                <Image
                  src="/img/logo.png"
                  className="dark:invert"
                  alt={'logo-unlvacm'}
                  width={50}
                  height={30}
                  style={{ display: 'inline-block', marginRight: '16px' }}
                />
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex grow">
            <ul className="flex grow flex-wrap items-center justify-end">
              {/* Join us */}
              <li className="md:order-2">
                <Link
                  href="#"
                  className="btn rounded-xl bg-black px-4 py-2 text-sm font-medium text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 sm:ml-4"
                >
                  <span>Join Us</span>
                  <svg
                    className="text-muted-foreground -mr-1 ml-2 h-3 w-3 shrink-0 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>

              {/* Socials */}
              <li className="mb-4 hidden md:mb-0 md:ml-4 md:flex">
                {socials.socialLinks.map((socialLink, index) => (
                  <span className={index !== 0 ? 'ml-4' : ''} key={index}>
                    <Link
                      href={socialLink.href}
                      
                      className="hover:bg-tertiary flex items-center justify-center rounded-full p-2 text-gray-400 transition duration-150 ease-in-out hover:text-red-400"
                      aria-label={socialLink.alt}
                    >
                      {socialLink.icon}
                    </Link>
                  </span>
                ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
