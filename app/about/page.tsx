import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import infiniteLogo from "public/work/infinite.png";
import ghordeLogo from "public/work/ghorde.png";

import battman from "public/gallery/battman.jpeg";
import dublin from "public/gallery/dublin.jpeg";

export const metadata: Metadata = {
  title: "About | Munkh Suld",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight text-primary">
          About
        </h1>
        <p
          className="animate-in text-secondary"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Just a quick glimpse.
        </p>
      </div>
      <div className="lg:hidden mb-8">
        <div
          className="animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={battman}
            alt={"me and lily"}
            width={324}
            height={139}
            className="relative h-60 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl -rotate-6"
            priority
          />
        </div>

        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Image
            src={dublin}
            alt={"me and lily"}
            width={220}
            height={260}
            className="absolute w-48 inset-0 object-cover bg-gray-400 shadow-md pointer-events-none rounded-2xl rotate-6 left-[45%] md:left-[60%] md:w-56 -top-48"
            priority
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <Gallery />
      </div>
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>Hello world, I&apos;m Munkhsuld!</p>

            <p>
              I have a passion for design and am always looking for ways to
              incorporate it into my engineering work.
            </p>
            {/* <p>
              In addition to coding, I also make{" "}
              <Link
                className="underline"
                href="https://www.youtube.com/channel/@brianruizy"
              >
                YouTube
              </Link>{" "}
              videos, where I focus on tech gear, creative vlogs, and a bit of
              personal development.
            </p> */}
            <p>
              When I&apos;m not at my desk I am probably lifting weights,
              playing basketball and tennis, or at a coffee shop :)
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:contact@sulde.dev@gmail.com">email me</Link>.
              Try finding me anywhere else at @munkhsuld
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border rounded-lg p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              {new Date().getFullYear() - 2023}+ years of professional
              development experience.
            </p>
            <p>
              I learn{" "}
              <Link className="underline" href="https://www.pinecone.academy/">
                pinecone
              </Link>{" "}
              for 8 months. Then I&apos;m personal development. Now I&apos;m a
              software engineer currently working at{" "}
              <Link className="underline" href="https://infinite.mn">
                Infinite
              </Link>
              , one of the largest private real estate investors in the world.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Full Stack Engineer",
    company: "Ghorde",
    time: "2024 -",
    imageSrc: ghordeLogo,
    link: "https://ghorde.mn",
  },
  {
    title: "Sowtware Engineer",
    company: "Infinite",
    time: "2023 - 2024",
    imageSrc: infiniteLogo,
    link: "https://infinite.mn",
  },

  // {
  //   title: "Software Engineer",
  //   company: "PeriShip",
  //   time: "2021 - 2022",
  //   imageSrc: perishipLogo,
  //   link: "https://peripharma.com/",
  // },
  // {
  //   title: "Python Developer",
  //   company: "CAMS",
  //   time: "2019 - 2020",
  //   imageSrc: camsLogo,
  //   link: "https://camstex.com",
  // },
  // {
  //   title: "Coding Camp Instructor",
  //   company: "University of Houston",
  //   time: "2019",
  //   imageSrc: uhdLogo,
  //   link: "https://www.uhd.edu/",
  // },
];
