import { FooterWrapper } from '@/components/common/footer-wrapper'
import ThemeToggle from '@/components/common/theme-toggle'
import { socials } from '@/components/common/socials'
import { texts } from '@/data/text'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <hr className="" />
      <FooterWrapper>
        {/* TOP SECTION */}
        <div className="mb-8 grid gap-8 md:mb-12 md:grid-cols-12 lg:gap-20">
          {/* TOP LEFT */}
          <div className="md:col-span-4 lg:col-span-5">
            {/* Logo */}
            <div className="mb-2">
              <Link href={socials.logo.link} className="inline-block" aria-label={socials.logo.alt}>
                {/* Logo image, change but imma pick one LMAFO */}
                <Image
                  src={socials.logo.src}
                  className="h-10 dark:invert"
                  alt={socials.logo.alt}
                  priority
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            {/* Gaslighting */}
            <div className="text-muted-foreground mb-4">{texts.footer.gaslighting}</div>
          </div>

          {/* TOP RIGHT */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
            {socials.blocks.map((block, index) => (
              <div className="text-sm" key={index}>
                <h6 className="text-foreground mb-1 font-medium brightness-90">{block.title}</h6>
                <ul>
                  {block.links.map((link, linkIndex) => (
                    <li className="group mb-1" key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground group-hover:text-foreground flex items-center transition duration-150 ease-in-out"
                      >
                        <div className="mr-2 h-0.5 w-3 bg-red-400 transition-all group-hover:w-5"></div>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="md:flex md:items-center md:justify-between">
          {/* Social */}
          <ul className="mb-4 flex md:order-1 md:mb-0 md:ml-4">
            {socials.socialLinks.map((socialLink, index) => (
              <li className={index !== 0 ? 'ml-4' : ''} key={index}>
                <Link
                  href={socialLink.href}
                  className="hover:bg-tertiary flex items-center justify-center rounded-full p-2 text-gray-400 transition duration-150 ease-in-out hover:text-red-400"
                  aria-label={socialLink.alt}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {socialLink.icon}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mr-4 text-sm">
            &copy; {socials.copyright} {/* Adjusted */}
          </div>
          
          <div className="flex justify-center mx-auto ">
            <ThemeToggle />
          </div>
        </div>
      </FooterWrapper>
    </>
  )
}
