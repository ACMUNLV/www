'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { socials } from '@/data/links'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export const Header = () => {
   const pathname = usePathname()

  return (
    <header className="fixed top-0 z-30 w-full bg-background px-5 shadow-md transition duration-500 ease-in-out md:bg-opacity-90">
      <div className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-row items-center justify-center transition ease-in hover:scale-105">
          <Image src="/img/logo.svg" alt={'ACM UNLV Logo'} width={50} height={65} />
          <span className="ml-2 w-full text-xl font-semibold">ACM UNLV</span>
        </Link>

        {/* Nav */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Pages */}
            {socials.pageLinks.map((pageLink, index) => {
              const isActive = pathname === pageLink.href

              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${isActive ? 'text-primary' : ''}`}
                    href={pageLink.href}
                  >
                    {pageLink.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
            {/* Socials */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Socials</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="gap-3 p-4">
                  <li className="flex">
                    {socials.socialLinks.map((socialLink, index) => (
                      <span className={index !== 0 ? 'ml-4' : ''} key={index}>
                        <Link
                          href={socialLink.href}
                          className="flex items-center justify-center rounded-full p-2 text-gray-400 transition hover:text-primary"
                          aria-label={socialLink.alt}
                        >
                          <span className="mx-2 text-lg">{socialLink.alt}</span>
                          {socialLink.icon}
                        </Link>
                      </span>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Button */}
            <NavigationMenuItem>
              <Button>
                <NavigationMenuLink
                  href="https://involvementcenter.unlv.edu/organization/unlv-acm"
                  target="_blank"
                  className="font-bold"
                >
                  Join Us!
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {socials.pageLinks.map((pageLink, index) => (
                <Link key={index} href={pageLink.href} className="text-lg font-bold">
                  {pageLink.name}
                </Link>
              ))}
              <div>
                <h3 className="mb-2 text-lg font-semibold">Socials</h3>
                <div className="flex flex-wrap gap-2">
                  {socials.socialLinks.map((socialLink, index) => (
                    <Button variant="secondary" size="icon">
                      <Link key={index} href={socialLink.href} aria-label={socialLink.alt} className="text-xl">
                        {socialLink.icon}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
              <Link href="https://involvementcenter.unlv.edu/organization/unlv-acm" className="mt-4" target="_blank">
                <Button className=" w-full" variant="default" size="lg">
                  Join Us!
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
