import Calendar from "@/components/calendar/Calendar";
import Tag from "@/components/Tag";
import { decemberData } from "@/lib/activity/2023/dec";
import { februaryData } from "@/lib/activity/2024/feb";
import { januaryData } from "@/lib/activity/2024/jan";
import React from "react";

export default function LifeStyle() {
  return (
    <div>
      <div>
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Lifestyle
        </h1>
        <p
          className="text-secondary animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Here are my lifestyle post
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <Tag year="2024" />
        <Calendar data={februaryData} />
        <Calendar data={januaryData} />
        <Tag year="2023" />
        <Calendar data={decemberData} />
        <Calendar data={februaryData} />
      </div>
    </div>
  );
}
