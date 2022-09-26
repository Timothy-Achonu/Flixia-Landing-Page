import React from "react";
import { VideoCard } from "./VideoCard";
import marketing from "./assets/marketing.jpg";
import malte from "./assets/malte.jpg";
import annie from "./assets/annie.jpg";

export const MidSection = () => {
  const arrayOfCards = [
    {
      imgSrc: marketing,
      headingText: "Video Marketing",
      paragraph:
        "Reach new customers and get your existing audience excited for what's next with branded videos, virtual events, and webinars that can be shared everywhere.",
      bgColor: "#DCCBBA",
    },
    {
      imgSrc: malte,
      headingText: "Employee Communications",
      paragraph:
        "Inspire your teams to do their best work with interactive town halls and video experiences that make remote onboarding, training, and collaboration simple.",
      bgColor: "#FFB700",
    },
    {
      imgSrc: annie,
      headingText: "Video Monetization",
      paragraph:
        "Create your own subcription video business with a customizable website and app that generates a whole new stream of revenue for your content.",
      bgColor: "#7D8524",
    },
  ];
  const cardElements = arrayOfCards.map((card, index) => {
    return (
      <VideoCard
        imgSrc={card.imgSrc}
        headingText={card.headingText}
        paragraph={card.paragraph}
        bgColor={card.bgColor}
        key={index}
      />
    );
  });
  return (
    <div className="mid-section">
      <div className="main-paragraph">
        Our all-in-one video platform turns your ideas into action. Make,
        manage, and share videos and virtual events that move your audience with
        Flixia.
        <p className="new-paragraph">
          One video Platform. All your video needs.
        </p>
      </div>
      <div className="video-cards">{cardElements}</div>
    </div>
  );
};
