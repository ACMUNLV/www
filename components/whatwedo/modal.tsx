import React from 'react'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
  activity?: string
}

const WorkShop = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Programming Language Workshops</h2>
      <p>
        It can be challenging trying to learn a new programming language on your own. But there is no need to worry,
        that is why we are here! During the semester we will have workshops that will help you learn new languages.
      </p>
      <h3 className="text-md mt-4 font-semibold">Workshops include:</h3>
      <ul className="ml-5 list-disc">
        <li>Python</li>
        <li>JavaScript</li>
        <li>Android</li>
        <li>Unity</li>
        <li>Git</li>
      </ul>
    </div>
  )
}

const Networking = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Networking Events</h2>
      <p className="mt-2">
        We will soon be introducing professional development events that can help bolster your skills, expand your
        network, and enhance your career prospects. These events will feature workshops, guest speakers, and hands-on
        activities tailored to various fields and interests. Whether you&apos;re looking to improve your technical
        expertise, develop leadership qualities, or learn about industry trends, there will be opportunities for
        everyone.
      </p>
    </div>
  )
}

const ICPC = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">International Collegiate Programming Competition</h2>
      <p>
        Every November we compete in the International Collegiate Programming Competition held in Riverside, California.
        This lets students sharpen their problem solving and coding skills.
      </p>
      <h3 className="text-md mt-4 font-semibold">Preparation for the competition:</h3>
      <ul className="ml-5 list-disc">
        <li>Learn different problem solving techniques</li>
        <li>Have a solid foundation of the functioning and syntax of C++, Python, or Java</li>
        <li>
          Try and solve past ICPC problems that can be found{' '}
          <a href="https://icpcarchive.github.io/" className="text-blue-500 hover:text-blue-700">
            here
          </a>
        </li>
      </ul>
    </div>
  )
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, activity }) => {
  if (!isOpen) return null

  const renderModalContent = () => {
    switch (activity) {
      case 'Networking':
        return <Networking />
      case 'ICPC':
        return <ICPC />
      case 'Coding Workshops':
        return <WorkShop />
      default:
        return <p>Content not found. Contact Thien Nguyen pls</p>
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" data-aos="fade-down" data-aos-delay="150">
      <div className="flex min-h-screen items-center justify-center px-5">
        <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" onClick={onClose}></div>

        {/* Modal itself */}
        <div className="relative z-50  mx-auto w-full max-w-xl rounded-lg bg-white shadow dark:bg-gray-700 md:h-auto lg:bottom-32">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            {/* header */}
            <div className="flex items-center justify-between rounded-t border-b p-5 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white lg:text-2xl">
                {activity || 'Activity'}
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-neutral-400 hover:bg-gray-200 hover:text-neutral-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                {/* Close button SVG */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-5">{renderModalContent()}</div>

            {/* Modal footer */}
            <div className="flex justify-end rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <button
                type="button"
                className="rounded-lg bg-[#A30202] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutModal
