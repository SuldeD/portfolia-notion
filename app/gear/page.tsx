import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gear | Munkh Suld",
  description: "My toolbox. This is gear I actually own and recommend.",
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link }: ItemProps) => (
  <li className="flex gap-4 items-center transition-opacity">
    <a
      className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] shadow"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="object-center object-cover w-full h-full"
        fill
      />
    </a>
    <div className="grow flex justify-between gap-2 items-center">
      <div className="space-y-1">
        <h3 className="text-primary line-clamp-2 leading-tight font-medium">
          {title}
        </h3>
        <p className="text-secondary line-clamp-3 leading-tight text-sm">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto text-sm rounded-full px-4 py-1 bg-secondary h-fit"
          href={link}
          target="_blank"
        >
          Get
        </a>
        {/* {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )} */}
      </div>
    </div>
  </li>
);

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Gear
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My toolbox.
            </p>
          </div>
          <p
            className="max-w-lg animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            This is gear I actually own and recommend. The affiliate links come
            at no extra cost, but it does however help support my content
            creation.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex flex-col gap-8 animate-in"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8 animated-list">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const gear = [
  {
    name: "DJI Osmo Pocket 3",
    category: "Camera Gear",
    image: "https://m.media-amazon.com/images/I/31HSfH1VceL._AC_US100_.jpg",
    description: "Awesome for action video, I use it for my POV shots.",
    link: "https://amzn.to/3exkZuq",
  },

  {
    name: "Brevite Backpack",
    category: "Other",
    image: "https://m.media-amazon.com/images/I/61kuICMElAL._AC_SL1500_.jpg",
    description: "Compact Camera Backpack - A Minimalist & Travel-friendly",
    link: "https://amzn.to/3U5PTJo",
  },

  {
    name: "MacBook Pro M3 Pro 14-inch",
    category: "Apple",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-m3-max-pro-spaceblack-select-202310?wid=892&hei=820&fmt=jpeg&qlt=90&.v=1697230830118",
    description: "Daily driver. Sleek, great display, and performant.",
    link: "https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-m3-pro",
  },
  {
    name: "Apple AirPods Max",
    category: "Apple",
    image: "https://m.media-amazon.com/images/I/81OdA-ITspL._AC_SL1500_.jpg",
    description: "Active Noise Cancelling, Transparency Mode, Spatial Audio",
    link: "https://amzn.to/3mie64b",
  },
  {
    name: "Apple AirPods Pro",
    category: "Apple",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83_AV5?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803961739",
    description:
      "Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency.",
    link: "https://amzn.to/3UmMQhq",
  },
  {
    name: "Apple IPhone 11 Pro",
    category: "Apple",
    image: "https://m.media-amazon.com/images/I/61UC1mk6dfL._AC_SX679_.jpg",
    description: "The MagSafe Charger delivers fast wireless charging.",
    link: "https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07ZPKZSSC?th=14",
  },
];
