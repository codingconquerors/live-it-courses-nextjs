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
            Join the best online IT courses
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Upgrade your skills and upgrade your life using our best-in-the-market online courses.
          </p>
          <div className="grid place-items-center">
            <ReactPlayer
              src={video}
              url={video}
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
