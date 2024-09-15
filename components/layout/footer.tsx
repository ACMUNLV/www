import { FooterWrapper } from '@/components/common/footer-wrapper'
import { socials } from '@/data/socials'
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
            <div className="mb-4 text-muted-foreground">{texts.footer.gaslighting}</div>
          </div>

          {/* TOP RIGHT */}
          <div className="grid gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-7">
            <div>
              <h6 className="mb-1 font-medium text-foreground">Pages</h6>
              <ul>
                {socials.pageLinks.map((pageLink, index) => (
                  <li className="group mb-1" key={index}>
                    <Link
                      href={pageLink.href}
                      className="flex items-center text-muted-foreground transition duration-150 ease-in-out group-hover:text-foreground"
                    >
                      <div className="mr-2 h-0.5 w-3 bg-primary transition-all group-hover:w-5"></div>
                      {pageLink.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="mb-1 font-medium text-foreground">Reach out at</h6>
              <ul>
                <li className="group mb-1">
                  <Link
                    href="mailto:acm@unlv.edu"
                    className="flex items-center text-muted-foreground transition duration-150 ease-in-out group-hover:text-foreground"
                  >
                    <div className="mr-2 h-0.5 w-3 bg-primary transition-all group-hover:w-5"></div>
                    acm@unlv.edu
                  </Link>
                </li>
              </ul>
            </div>
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
                  className="hover:bg-tertiary flex items-center justify-center rounded-full p-2 text-lg text-gray-400 transition duration-150 ease-in-out hover:text-primary"
                  aria-label={socialLink.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialLink.icon}
                </Link>
              </li>
            ))}
          </ul>

          <span>Copyright &copy; ACM at UNLV {currentYear}</span>

          <div className="mx-auto flex justify-center "></div>
        </div>
      </FooterWrapper>
    </>
  )
}
