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
      src: '/img/logo/logo.svg',
      alt: 'ACM UNLV Logo',
    },
    'why-join': {
      title: 'Why Join?',
      sections: [
        {
          header: 'Competitive Programming',
          paragraph: `
          ACM UNLV provides opportunities for students to participate in the International Collegiate Programming Contest (ICPC),
          where you can test and sharpen your problem-solving skills. Through collaborative training sessions,
          you'll gain invaluable experience in tackling complex challenges under pressure, preparing you for
          real-world scenarios.
          `,
        },
        {
          header: 'Project Development',
          paragraph: `
          Collaborating on open-source projects is a great way to grow as a developer. At ACM UNLV, we encourage students
          to contribute to various projects, allowing you to build practical applications while working alongside your peers.
          You'll improve your coding skills, learn new technologies, and become part of the global open-source community.
          `,
        },
        {
          header: 'Professional Development',
          paragraph: `
          ACM UNLV connects you with professionals from leading tech companies through events, talks, and mentorship.
          You'll have the chance to network, learn from experts in the field, and discover how to navigate your career
          in Computer Science. Whether it's landing your first internship or exploring new opportunities, ACM helps you grow.
          `,
        },
      ],
      images: [
        {
          src: '/img/about-page/icpc-preparation.svg',
          alt: 'ACM UNLV Members working on ICPC problems in teams',
          width: 520,
          height: 384,
        },
        {
          src: '/img/about-page/projects.png',
          alt: 'ACM UNLV Members working collaboratively on a project.',
          width: 520,
          height: 384,
        },
        {
          src: '/img/about-page/professional-development.svg',
          alt: 'ACM Professional Development',
          width: 520,
          height: 384,
        },
      ],
    },
    'involvement': {
      title: 'How To Get Involved?',
      description: `
            Make sure to become a member throuhg UNLV's Involvement Center.
            Get involved with ACM UNLV by joining our meetings, participating in workshops, hackathons, and competitions,
            or contributing to open-source projects. Follow us on social media, join our Discord server, and explore leadership
            opportunities to connect with peers and build skills in a collaborative environment.
        `,
      src: '/img/about-page/join-us.svg',
      alt: 'First ACM Meeting Group Photo',
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
        img: '/img/icpc.svg',
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
