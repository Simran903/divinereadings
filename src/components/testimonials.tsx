"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Testimonials() {
  return (
    <div id="testimonials" className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-24">
        What my Clients say
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Testimonials

const testimonials = [
  {
    quote:
      "I couldn't get any better eye opener than this. Few things were not just spot on but bullseye which ensures the further guidance is apt too. Loved the session. And honesty too.",
    name: "Jay Chabra",
  },
  {
    quote:
      "Such an experience with the healing process with you! Within a few hours time I could see my physical presence witnessing changes in vibrations! What an immense feeling Thankyou so much.",
    name: "Vikram Iyer",
  },
  {
    quote:
      "Healing was so effective and it worked. Healing for any reason is provided by you and they are so effective. They provide quick results. You do a great job.",
    name: "Sushant",
  },
  {
    quote:
      "I honestly got to know that the readings are on point the moment you shared about the first question. And trust me I was able to resonate with every word you said. Its gonna be a difficult path but with your guidance I am sure its gonna help me out.",
    name: "Veera Gill",
  },
  {
    quote:
      "I love you is my best review that I'll give you. Thank you so much for always calming me when I get so hyper and I keep thinking so much. And without you I don't think I would have come this long thank you so much.",
    name: "Antra",
  },
  {
    quote:
      "It was so good to share my thoughts with you and get clarity on so many problems that were bothering me. Thank you and God bless you.",
    name: "Rajiv",
  },
  {
    quote:
      "It was so peaceful talking to you. You put across things in a very simple manner that made all issues resolved.",
    name: "Nidhi",
  },
  {
    quote:
      "Thanks for getting me back on track and not get driven by my emotions for worst case scenarios.",
    name: "Gaurav",
  },
  {
    quote:
      "Thank you so much for that reading. Things turned out successfully as per your predictions. My brother and Dad finally came back just now after 2.5 months.",
    name: "Meenakshi",
  },
  {
    quote:
      "I don't believe in tarot reading but to my surprise whatever you said that day was so accurate I mean you gave me some specific dates and I still wonder how is that even possible. It was such a wonderful experience.",
    name: "Shiv Kapoor",
  },
  {
    quote:
      "Thank you for an excellent reading Shivangi. It was bang on the point and gave me so much clarity and positivity. Your vibe is so positive and infectious. Thank you one again.",
    name: "Sanah",
  },
  {
    quote:
      "Thanks for being approachable and explaining things in a clear manner with great examples from everyday life. Your reading of my current situation was bang on. Thank you for taking time to explain in detail the cards I had drawn and for being gentle and not rushing me through the session. You guided me well.",
    name: "Kartik",
  },
  {
    quote:
      "It was so true, I wondered how you could possibly know. It was as if you were reading my mind and my surroundings. Thank you so much for your guidance.",
    name: "Roman Stroganov",
  },
];
