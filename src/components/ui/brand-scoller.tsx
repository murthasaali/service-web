"use client";

import { BsAmazon, BsGoogle, BsSpotify, BsYoutube } from "react-icons/bs";

const brands = [
  { icon: BsSpotify, name: "Spotify" },
  { icon: BsYoutube, name: "YouTube" },
  { icon: BsAmazon, name: "Amazon" },
  { icon: BsGoogle, name: "Google" },
];

function BrandRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="group flex max-w-full flex-row overflow-hidden py-2 [--duration:40s] [--gap:2rem] [gap:var(--gap)] [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div
            className={`flex shrink-0 flex-row justify-around [gap:var(--gap)] ${
              reverse ? "animate-marquee-reverse" : "animate-marquee"
            }`}
            key={i}
          >
            {brands.map(({ icon: Icon, name }) => (
              <div className="flex w-28 items-center gap-3" key={name}>
                <Icon size={24} aria-hidden="true" />
                <p className="text-lg font-semibold opacity-80">{name}</p>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export const BrandScroller = () => {
  return <BrandRow />;
};

export const BrandScrollerReverse = () => {
  return <BrandRow reverse />;
};
