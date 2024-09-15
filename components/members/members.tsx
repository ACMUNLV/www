import Image from 'next/image'
import { members } from '@/data/members'
import { Badge } from '@/components/ui/badge'

export default function MemberList() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
      {/* header */}
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20" data-aos="fade-up" data-aos-delay="150">
        <h2 className="h2 mb-4">Meet our team!</h2>

        <p className="text-body-color md:text-xl">
          Our ACM club consists of dedicated and innovative students passionate about advancing computing as a science
          and a profession.
        </p>
      </div>

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
            data-aos-delay={250 * index}
          >
            <a href={person.link} target="_blank" rel="noreferrer">
              <Image
                src={person.src}
                alt="Profile picture"
                width={80}
                height={80}
                className="mb-4 h-20 w-20 rounded-full border object-cover"
                unoptimized
              />
            </a>

            <span className="h4">
              {person.name}
            </span>

            <span className="ml-1 text-xs text-muted-foreground">
              {person.pronouns} 
            </span>

            {person.title && (
              <span className={`mb-2 mt-1 text-center font-black ${person.title == 'President' ? 'text-primary' : ''}`}>
                {person.title}
              </span>
            )}

            <span className="mb-2 text-center">
              {person.school} {/* School */}
            </span>

            <span className="mb-2 flex flex-wrap items-center justify-center gap-1">
              {person.titles.map((role, index) => (
                <Badge key={index} variant="outline" className="font-normal">
                  {role}
                </Badge>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
