import siteMetadata from '@/data/siteMetadata'
import servicesData from '@/data/servicesData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Services() {
  return (
    <>
      <PageSEO
        title={`Interview preparation, project creation, online IT courses - ${siteMetadata.author}`}
        description="Our Services includes interview preparation, project creation, IT Training program, online IT courses"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-4 pt-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Our Services: Empowering You for Success
          </h1>
          <div>
            Welcome to our platform, where we offer a comprehensive range of services designed to
            support your educational and professional growth. Our commitment is to empower you with
            the knowledge, skills, and guidance you need to excel in your chosen field. From
            teaching and interview preparation to free guidance, project creation, and IT training,
            our services are tailored to meet your unique needs and aspirations.
          </div>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {servicesData.map((d) => (
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
