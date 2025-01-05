import React from "react";
import Button from "./button";

const Services = () => {
  const renderCards = (title: string, services: { no: number; service: string; price: string }[]) => (
    <div className="mb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center my-16">{title}</h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((item) => (
          <div
            key={item.no}
            className="border border-teal-500 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold mb-2">{item.service}</h3>
            <p className="text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-24">
          Schedule a Meeting with Me
        </h1>

        {renderCards("Basic Services", [
          { no: 1, service: "Customized switchwords", price: "INR 555" },
          { no: 2, service: "Relationship improvement reiki", price: "INR 999" },
          { no: 3, service: "Aura Healing", price: "INR 1000" },
          { no: 4, service: "Career growth reiki", price: "INR 1111" },
          { no: 5, service: "Bay Leaf Ritual for Luck", price: "INR 1111" },
          { no: 6, service: "Balancing emotions reiki", price: "INR 2222" },
          { no: 7, service: "Chakra cleansing", price: "INR 3333" },
          { no: 8, service: "Cord cutting from toxicity", price: "INR 5000" },
        ])}

        {renderCards("Intermediate Services", [
          { no: 1, service: "Face reading", price: "INR 2000" },
          { no: 2, service: "Coffee Cup Readings", price: "INR 3500" },
          { no: 3, service: "Aakashic records readings", price: "INR 5000" },
          { no: 4, service: "Unlimited questions for 1 hr", price: "INR 6000" },
          { no: 5, service: "Psychic medium readings", price: "INR 8000" },
        ])}

        {renderCards("Advanced Services", [
          { no: 1, service: "Dream Interpretation", price: "INR 2000" },
          { no: 2, service: "Removing Nazar/Hexes/Curses", price: "INR 3000" },
          { no: 3, service: "Manifestation techniques 1 hr session", price: "INR 5555" },
          { no: 4, service: "Reprogramming mind 7 days online session", price: "INR 7777" },
          { no: 5, service: "Spiritual Journey Guidance", price: "INR 10000" },
        ])}

        <div className="flex justify-center mt-16 lg:my-28">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Services;
