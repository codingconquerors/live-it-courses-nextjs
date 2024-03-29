import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Link from 'next/link'

export default function Courses() {
  return (
    <>
      <PageSEO
        title={`Best Online Courses - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Online IT Courses With Live Classes
          </h1>

          <div>
            Whether you want to upgrade your skills, start a new career, or refresh your knowledge,
            finding the right course is just a few keystrokes away. Our online courses are the best
            courses available in the market. We offer following online IT courses. All of these
            Online Courses are based on live classes. If you are searching for a specific course
            please use search option provided{' '}
            <a
              href={'/blog'}
              className=" text-green-700 underline hover:text-green-800 dark:hover:text-green-600"
            >
              here.
            </a>
          </div>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
