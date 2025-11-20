import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://t.me/SPSNCTO",
    title: "telegram",
    icon: "Telegram",
  },
  {
    link: "https://x.com/spsntoken",
    title: "x",
    icon: "X",
  },
  {
    link: "https://www.instagram.com/spsntoken",
    title: "Instagram",
    icon: "Instagram",
  },
  {
    link: "https://www.youtube.com/@spsntoken",
    title: "Youtube",
    icon: "Youtube",
  },
  {
    link: "https://www.tiktok.com/@spsntoken",
    title: "Tiktok",
    icon: "Tiktok",
  },
  {
    link: "https://www.facebook.com/spsntoken",
    title: "Facebook",
    icon: "Facebook",
  },
];

const Socials = () => {
  return (
    <div>
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
