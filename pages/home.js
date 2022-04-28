import { Helmet } from 'react-helmet'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="about">
      <Helmet>
        <meta
          name="title"
          content="A team of IT professionals who provides best online IT courses based on live classes and interactive programming sessions"
        />
        <meta
          name="description"
          content="Learn online IT courses in live classes from professionals. We teach online live courses based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes, angular, react etc."
        />
        <meta
          name="keywords"
          content="live online classes, online IT courses, live coding classes, learn programming with live classes, interactive programming classes, interactive programming courses, one to one coding classes, one to one programming classes"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="0Vwwc_sg_KrnN4F8z_TpK81iov4KqYMh343lVE1IxPI"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="codingconquerors" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          property="og:title"
          content="A team of IT professionals who provides best online IT courses based on live classes and interactive programming sessions"
        />
        <meta property="og:site_name" content="liveonlineclasses" />
        <meta property="og:url" content="https://www.liveitcourses.com/" />
        <meta
          property="og:description"
          content="Learn online IT courses in live classes from professionals. We teach online live courses based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes, angular, react etc."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/images/conquer-the-world-of-coding.webp" />
        <meta property="og:image:alt" content="IT courses with interactive classes" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@liveitcourses" />
        <meta
          name="twitter:title"
          content="A team of IT professionals who provides best online IT courses based on live classes and interactive programming sessions"
        />
        <meta
          name="twitter:description"
          content="Learn online IT courses in live classes from professionals. We teach online live courses based on java, spring boot, apache camel, Kafka, microservices, Docker, Kubernetes, angular, react etc."
        />
        <meta name="twitter:image" content="/static/images/conquer-the-world-of-coding.webp" />
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
          <div className="lg:mt-12 lg:px-4 ">
            <h1 className="h1">
              We are IT Professionals who teach coding skills through live classes
            </h1>
            <div className="mt-6">
              <p>
                <p className="p">
                  We are a team of highly experienced IT professionals who can help you achieve your
                  career objectives through our best in the market live online courses. We transform
                  your life by helping you get an IT job as per current market requirements. We
                  empower minds by deciphering coding skills. We believe that the world of coding
                  can be conquered with the right guidance. We have already helped hundreds of
                  students to get jobs in the IT sector. We teach online courses through live
                  classes on topics: Java, Spring Boot, Apache Camel, Kafka, Microservices, Docker,
                  Kubernetes, and other open source technologies using video conferencing. All the
                  course topics are covered in live classes which help in resolving students issues
                  spontaneously. With every course topic, corresponding interview questions are also
                  covered which helps students prepare for interview along with course topics. No
                  question asked money back guarantee after one week of classes if a student is not
                  satisfied.
                </p>
                <br></br>
                <br></br>
                <h2 className="h2">Our Teaching Ideology</h2>
                <p className="p">
                  We offer online courses purely based on live classes. During these live classes,
                  we understand the existing level of students&apos; knowledge and experience, and
                  the transformation starts from there. This is exactly the opposite of learning
                  through recorded lectures which normally take a lot longer to complete and do not
                  clear your doubts. We clear your doubts instantly and help you achieve your goals
                  rapidly. We believe that no student is weak, it is just the gap in the level of
                  understanding between a student and a teacher which makes things complicated. Our
                  interactive programming classes fill all the gaps.
                </p>
              </p>
            </div>
          </div>
          <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
            <Image
              className="img-fluid mb-lg-0 mb-4 rounded"
              src="/static/images/conquer-the-world-of-coding.webp"
              alt="IT courses with interactive classes"
              width="464"
              height="353"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
