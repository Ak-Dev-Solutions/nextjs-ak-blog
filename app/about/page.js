import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center justify-center w-full mb-8 md:w-1/3 md:mb-0 ">
              <div className="relative w-48 h-48 overflow-hidden rounded-full">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full md:w-2/3 ">
              <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-white">
                About Me
              </h1>
              <p className="mb-4 text-lg text-gray-600 dark:text-gray-50">
                Hey, I&#39;m Abhishek — a self-taught full-stack developer
                building in public and preparing for the future of tech. I show
                up every day to learn, create, and push boundaries — from
                crafting responsive UIs with React to connecting backend APIs
                and launching real-world apps. This blog isn&#39;t just my
                journey — it&#39;s a resource for anyone learning to code. I
                share practical tutorials, solved bugs, and real-world insights
                to help you overcome challenges faster. Whether you&#39;re
                debugging your first error or scaling your next project, I&#39;m
                here to make that process a little easier. Let&#39;s grow,
                solve, and build together.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-50">
                From fixing tricky bugs to building full-stack apps, I share
                everything I learn. If it helps you write better code or see
                clearer logic — mission accomplished.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              Code & Beyond: Abhishek&#39;s Dev Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
              “Not a prodigy — just someone who never stopped learning. Follow
              Abhishek&#39;s coding path.”
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <Image
                  src="/3.jpg"
                  alt="Harry as a beginner"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pl-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Beginning of the Build
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  I&#39;ve been interested in tech from the very beginning, and
                  I&#39;ve always believed the future will be fully digital. My
                  coding journey started unexpectedly — I was sitting with a
                  friend in our college lab while he was writing code. He showed
                  me how to print “Hello World,” and I know it might sound
                  silly, but that small moment felt amazing. That was the first
                  time I wrote code — a moment that changed everything for me.
                  In the beginning, everything felt exciting and new. But soon
                  came the bugs, the errors, the frustration. There were moments
                  I seriously thought about giving up. But I&#39;m glad I
                  didn&#39;t — because every challenge shaped my journey. I kept
                  going, kept learning, and even now, I try something new every
                  single day. And I&#39;ll continue to do that — until I build
                  something that truly helps people, or creates value for the
                  future in some way. This isn&#39;t just coding anymore —
                  it&#39;s my path, my purpose.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <Image
                  src="/2.jpg"
                  alt="Harry learning new skills"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pr-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Into the Code Cave
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Into the Code Cave After that first spark, I found myself
                  drawn deeper — into what I now call the Code Cave. It&#39;s
                  where I&#39;ve spent countless hours solving bugs,
                  experimenting with logic, and exploring the unknown. Like any
                  cave, it was dark and confusing at times — but also full of
                  hidden gems. Every challenge I faced made me sharper, every
                  breakthrough lit a new path. I didn&#39;t just learn how to
                  code here — I learned how to think, persist, and build.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row">
              <div className="md:w-1/3">
                <Image
                  src="/1.jpg"
                  alt="Harry working on a big project"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pl-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  The Struggle that Builds
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Every bug, every broken layout, every sleepless night staring
                  at the screen — they weren&#39;t setbacks, they were stepping
                  stones. These struggles shaped the way I think, debug, and
                  build. Each obstacle forced me to slow down, understand
                  deeper, and come back stronger. It wasn&#39;t easy, but it
                  made me a better developer — not just technically, but
                  mentally. The real growth didn&#39;t happen when things
                  worked, it happened when they didn&#39;t.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row-reverse">
              <div className="md:w-1/3">
                <Image
                  src="/4.jpg"
                  alt="Harry mentoring others"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="mt-8 md:w-2/3 md:pr-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  What I&#39;ve Learned, I Share
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                  Every concept I struggled with, every bug I fixed, and every
                  insight I gained — I turn into something someone else can use.
                  This blog isn&#39;t just my learning archive; it&#39;s a place
                  for fellow developers to find clarity, shortcuts, and
                  real-world solutions. If a post here saves you hours of
                  frustration or helps you level up faster, then I&#39;ve done
                  my job. Knowledge grows when it&#39;s shared — and that&#39;s
                  what drives me to keep writing, building, and giving back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
