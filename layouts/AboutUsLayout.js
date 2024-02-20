import Image from '@/components/Image'
import Comments from '@/components/comments'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function AboutUsLayout({ children, frontMatter }) {
  const { name, avatar } = frontMatter

  return (
    <>
      <PageSEO
        title={`Instructor led online IT courses - ${siteMetadata.author}`}
        description={`online IT courses with live classes - ${siteMetadata.author}`}
      />
      <div className="divide-y">
        <div className="space-y-2 pt-4 pb-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Who are we
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image src={avatar} alt="about us" width="300" height="210" />
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <Comments frontMatter={frontMatter} />
          </div>
        </div>
      </div>
    </>
  )
}
