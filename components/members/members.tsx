import { Badge } from '@/components/common/badge'
import { members } from '@/data/members'
import Image from 'next/image'
import { MembersWrapper } from '@/components/members/wrapper'

export default function MemberList() {
  return (
    <MembersWrapper>
      {/* header */}
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20" data-aos="fade-up" data-aos-delay="150">
        <h2 className="h2 mb-4">Meet our team!</h2>

        {/*We might be humans too?*/}
        <p className="text-body-color dark:text-slate-300 md:text-xl">
          Our ACM club consists of dedicated and innovative students passionate about advancing computing as a science
          and a profession.
        </p>
      </div>

      {/* items */}
      <div
        className="mx-auto grid max-w-sm items-start gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-16"
        data-aos-id-blocks
      >
        {members.map((person, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center"
            data-aos="fade-up"
            data-aos-anchor="[data-aos-id-blocks]"
            data-aos-delay={150}
          >
            <a href={person.link} target="_blank" rel="noreferrer">
              <Image
                src={person.src}
                alt="Profile picture"
                width={80}
                height={80}
                className="mb-4 rounded-full border"
                unoptimized
              />
            </a>
            
            <span className="h4">
              {person.name} {/* Name shown */}
            </span>

            <span className="text-muted-foreground ml-1 text-xs">
              {person.pronouns} {/* If anyone interested */}
            </span>

            {person.title && (
              <span
                className={`mt-1 mb-2 text-center font-black ${
                  person.title.startsWith('Board') ? 'text-yellow-500' : ''
                } ${person.title == 'President' ? 'text-red-500 dark:text-red-300' : ''}`}
              >
                {person.title}
              </span>
            )}
            
            <span className="mb-2 text-center">
              {person.school} {/* School */}
            </span>

            <span className="mb-2 flex flex-wrap items-center justify-center">
              {person.titles.map((role, idx) => (
                <Badge key={idx} variant="outline" className="m-[1px] !font-normal">
                  {role}
                </Badge>
              ))}
            </span>
          </div>
        ))}
      </div>
    </MembersWrapper>
  )
}
