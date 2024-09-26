import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const socials = {
  logo: {
    link: '/',
    alt: 'ACM UNLV',
    src: '/img/logo/logo.svg',
  },

  // ACM Social Links
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

  // Website Page Links
  pageLinks: [
    { href: '/about', name: 'About', alt: 'About Page' },
    { href: '/events', name: 'Events', alt: 'Events Page' },
    { href: '/projects', name: 'Projects', alt: 'Projects Page' },
  ],
}
