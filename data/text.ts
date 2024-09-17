/* 
  Edit texts within here
*/

export const texts = {
  hero: {
    title: 'Welcome to ACM at UNLV',
    subtitle: 'You will find everything about UNLV ACM here!',
  },
  aboutPage: {
    'about-us': {
      title: 'About Us',
      description: `
        Founded in 1947, the Association for Computing Machinery (ACM) is the world’s 
        largest scientific and education computing society. Our ACM chapter at UNLV
        works to connect student by hosting workshops, lectures, attending seminars, 
        and competing in regional coding competitions. We learn from professionals 
        in the industry, gain coding experience, and land internships! 
        Anyone with a passion for coding or for Computer Science are welcome to join!
        `,
      src: '/img/logo-bordered.png',
      alt: 'ACM UNLV Logo',
    },
    'why-join': {
      title: 'Why Join?',
      // could make sections similar to the sections in projects.ts
      description: ` 
        Competitive Programing fasdfasdfasdfasdf  -daniel
        Open Source Projects asasdffasdfasdf  -daniel
        Professional Development
        `,
      images: [
        {
          src: '/img/ICPC.png',
          alt: 'ICPC / competitive programming',
        },
        {
          src: '/img/ICPC.png',
          alt: 'ICPC / competitive programming',
        },
        {
          src: '/img/ICPC.png',
          alt: 'ICPC / competitive programming',
        },
      ],
    },
    'involvement': {
      title: 'How To Get Involved?',
      description: `
        Get Involed through blah blah blah -daniel
        `,
      src: '/img/eh.jpg',
      alt: 'image most likely to be changed',
    },
  },
  whatwedo: {
    title: 'What We Do',
    description: `
    Check out what we do at UNLV ACM!
    `,
    tabs: {
      first: {
        title: 'ICPC',
        description: `
        Every November, UNLV ACM members compete in the 
        International Collegiate Programming Competition (ICPC). 
        There students have a chance to show off their coding skills 
        and gain competition experience with other university students.
        `,
        linkText: 'Learn More',
        img: '/img/ICPC.png',
      },
      second: {
        title: 'Coding Workshops',
        description: `
        We let students work on their programming skills by training 
        them how to code in other languages. These workshops will teach 
        you how to make impressive projects like web apps or native games!
        `,
        linkText: 'Learn More',
        img: '/img/workshop.svg',
      },
      third: {
        title: 'Networking',
        description: `
        Our events link students with industry experts for internship opportunities. 
        We also facilitate access to academic research, mentorship, 
        and grant opportunities through collaborations with university faculty.
        `,
        linkText: 'Learn More',
        img: '/img/network.svg',
      },
    },
  },
  members: {
    title: 'Meet our team!',
    description: `Our ACM club consists of dedicated and innovative students passionate about advancing computing as a science and a profession.`,
  },
  footer: {
    gaslighting: `Our school chapter UNLV ACM works to connect student by hosting workshops, 
      lectures, attending seminars, and competing in regional coding competitions.`,
  },
}
