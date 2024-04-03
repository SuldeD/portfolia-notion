"use client";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const Tag = (props: { year: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      className={cn(
        "reveal sticky top-20 z-10 mx-auto rounded-full bg-white px-3 py-1 text-xs font-bold text-zinc-500 first-of-type:mt-10",
        { "animate-revealSm": inView }
      )}
      ref={ref}
    >
      {props.year}
    </div>
  );
};

export default Tag;
