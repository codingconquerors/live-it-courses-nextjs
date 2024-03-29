import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export default function IndexLayout({ frontMatter }) {
  const { video } = frontMatter
  const [isPlaying] = useState(true)

  return (
    <>
      <PageSEO
        title={`Instructor led online IT courses - ${siteMetadata.author}`}
        description={`online IT courses with live classes - ${siteMetadata.author}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Welcome to LiveITCourses.com!
          </h1>
          <div className="text-sm leading-7 text-gray-900 dark:text-gray-400">
            We sincerely appreciate your visit to LiveITCourses.com! We are excited to offer you a
            variety of online IT courses. Regardless of whether you are looking to learn new coding
            languages or want to improve your existing programming skills, we have a course for you.
            You will get the chance to work directly with our professional instructors because all
            of our IT courses are session-based online course and instructor-led online course with
            live classes.
          </div>
          <div className="player-wrapper">
            <ReactPlayer
              url={video}
              src={video}
              className="react-player"
              width="100%"
              height="100%"
              loop
              muted
              playing={isPlaying}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                    playsInline: true,
                    preload: 'auto',
                    controls: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
