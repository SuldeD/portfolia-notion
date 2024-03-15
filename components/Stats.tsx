"use client";
import Link from "next/link";
import useSWR from "swr";
import clsx from "clsx";

import { FaGithub } from "react-icons/fa";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

import FlipNumber from "@/components/FlipNumber";
import fetcher from "@/lib/fetcher";
import { addCommas } from "@/lib/utils";

// export function YouTube() {
//   const { data: youtubeData, error: youtubeDataError } = useSWR(
//     `/api/youtube`,
//     fetcher
//   );

//   if (youtubeDataError) return <div>failed to load</div>;
//   return addCommas(youtubeData?.subscribers);
// }

export function GitHub() {
  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=brianruizy`,
    fetcher
  );

  if (githubDataError) return <div>failed to load</div>;
  return addCommas(githubData?.stars);
}

export default function Stats() {
  // const { theme } = useTheme();
  const username = "Leo416732";

  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=${username}`,
    fetcher
  );
  const { data: postsData, error: postsError } = useSWR(
    `/api/prisma/hitsTotal`,
    fetcher
  );
  // const { data: youtubeData, error: youtubeDataError } = useSWR(
  //   `/api/youtube`,
  //   fetcher
  // );

  return (
    <ul className={clsx("space-y-2 animated-list")}>
      <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center no-underline"
          href={"https://github.com/Leo416732"}
        >
          <FaGithub className="text-xl" />
          <div>
            <FlipNumber>
              {githubData ? addCommas(githubData?.stars) : "00"}
            </FlipNumber>
            <span> Repository Stars</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link className="flex gap-3 items-center" href="/blog">
          <ArrowTrendingUpIcon className="w-5 h-5" />
          <div>
            <FlipNumber>
              {postsData ? addCommas(postsData?.total) : "00"}
            </FlipNumber>
            <span> Total Blog Views</span>
          </div>
        </Link>
      </li>
      {/* <li className="transition-opacity">
        <Link
          className="flex gap-3 items-center no-underline"
          href={"https://www.youtube.com/@" + username}
        >
          <FaYoutube className="text-xl" />
          <div>
            <FlipNumber>
              {githubData ? addCommas("11,011") : "00,000"}
            </FlipNumber>
            <span> YouTube Subscribers</span>
          </div>
        </Link>
      </li> */}
    </ul>
  );
}
