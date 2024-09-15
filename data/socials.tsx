import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const socials = {
  logo: {
    link: '/',
    alt: 'ACM UNLV',
    src: '/img/logo.svg',
  },
  socialLinks: [
    { href: 'https://discord.gg/Zfd6skWVzj', icon: <FaDiscord />, alt: 'Discord' },
    { href: 'https://github.com/ACMUNLV/', icon: <FaGithub />, alt: 'Github' },
    {
      href: 'https://www.linkedin.com/company/unlv-association-for-computing-machinery/',
      icon: <FaLinkedin />,
      alt: 'LinkedIn',
    },
    { href: 'https://www.instagram.com/unlvacm/', icon: <FaInstagram />, alt: 'Instagram' },
  ],
  pageLinks: [
    { href: '/about', name: 'About', alt: 'About Page' },
    { href: '/events', name: 'Events', alt: 'Events Page' },
    { href: '/icpc', name: 'ICPC', alt: 'ICPC Page' },
    { href: '/projects', name: 'Projects', alt: 'Projects Page' },
  ],

  // not used rn?
  // blocks: [
  //   {
  //     title: 'Menu',
  //     links: [
  //       { href: '/about', text: 'About' },
  //       { href: '/events', text: 'Events' },
  //       { href: '/icpc', text: 'ICPC' },
  //       { href: '/projects', text: 'Projects' },
  //     ],
  //   },
  //   {
  //     title: 'Socials',
  //     links: [{ href: 'https://github.com/Thienguen/acm-landing', text: 'Github' }],
  //   },
  // ],
  copyright: 'All rights reserved.',
}
