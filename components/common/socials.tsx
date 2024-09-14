import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const socials = {
  logo: {
    link: '/',
    alt: 'ACM UNLV',
    src: '/img/logo.svg',
  },
  socialLinks: [
    { href: 'https://discord.gg/Fz2YwU7U', icon: <FaDiscord />, alt: 'Discord' },
    { href: 'https://github.com/ACMUNLV/', icon: <FaGithub />, alt: 'Github' },
    { href: 'https://www.instagram.com/unlvacm/', icon: <FaInstagram />, alt: 'Instagram' },
  ],
  pageLinks: [
    { href: '/about', name: 'About', alt: 'About Page' },
    { href: '/events', name: 'Events', alt: 'Events Page' },
    { href: '/icpc', name: 'ICPC', alt: 'ICPC Page' },
    { href: '/projects', name: 'Projects', alt: 'Projects Page' },
  ],

  blocks: [
    {
      title: 'Menu',
      links: [
        { href: '/contact', text: 'Contact us' },
        { href: '/help', text: 'Help Center' },
      ],
    },
    {
      title: 'Legal',
      links: [{ href: '/privacy', text: 'Terms & Conditions' }],
    },
    {
      title: 'Socials',
      links: [{ href: 'https://github.com/Thienguen/acm-landing', text: 'Github' }],
    },
  ],
  copyright: 'All rights reserved.',
}
