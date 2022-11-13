import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import ReactPlayer from 'react-player'
import { useState } from 'react'

export default function IndexLayout({ frontMatter }) {
  const { video } = frontMatter
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <>
      <PageSEO
        title={`Instructor led online IT courses - ${siteMetadata.author}`}
        description={`online IT courses with live classes - ${siteMetadata.author}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-4 pb-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Welcome to LiveITCourses.com!
          </h1>
          <p className="text-sm leading-7 text-gray-900 dark:text-gray-400">
            We are excited to offer you a variety of online IT courses. Whether you are looking to
            learn new coding languages or want to improve your existing skills, we have a course for
            you. Thank you for choosing LiveITCourses.com!
          </p>
          <div className="grid place-items-center">
            <ReactPlayer
              url={video}
              src={video}
              loop
              controls
              playing={isPlaying}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
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
