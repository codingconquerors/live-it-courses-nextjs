import Comments from '@/components/comments'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import ReactPlayer from 'react-player'
import { useState } from 'react'

export default function WhyUs({ children, frontMatter }) {
  const { name, image, video } = frontMatter
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <>
      <PageSEO
        title={`Online IT Courses with live sessions`}
        description={`Need help in getting IT job - ${name}`}
      />
      <div className="divide-y">
        <div className="space-y-2 pb-4 pt-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            What makes us special
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image src={image} alt="why us" width="300" height="210" />
            {/* <ReactPlayer
              src={video}
              url={video}
              width="300px"
              height="210px"
              loop
              muted
              controls
              playing={isPlaying}
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload',
                  },
                },
              }}
            /> */}
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">{children}</div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </div>
    </>
  )
}
