import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    title: "telegram",
    icon: "Telegram",
  },
  {
    title: "x",
    icon: "X",
  },
  {
    title: "Instagram",
    icon: "Instagram",
  },
  {
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
