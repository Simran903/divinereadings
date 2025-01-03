import React from "react";
import Button from "./button";

const Services = () => {
  const renderTable = (title: string, services: { no: number; service: string; price: string }[]) => (
    <div className="mb-8 overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 text-sm lg:text-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No.</th>
            <th className="border border-gray-300 px-4 py-2">{title}</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item.no} className="text-center cursor-pointer hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.no}</td>
              <td className="border border-gray-300 px-4 py-2">{item.service}</td>
              <td className="border border-gray-300 px-4 py-2">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Schedule a Meeting with Me
        </h1>

        {renderTable("Basic Services", [
          { no: 1, service: "Customized switchwords", price: "INR 555" },
          { no: 2, service: "Relationship improvement reiki", price: "INR 999" },
          { no: 3, service: "Aura Healing", price: "INR 1000" },
          { no: 4, service: "Career growth reiki", price: "INR 1111" },
          { no: 5, service: "Bay Leaf Ritual for Luck", price: "INR 1111" },
          { no: 6, service: "Balancing emotions reiki", price: "INR 2222" },
          { no: 7, service: "Chakra cleansing", price: "INR 3333" },
          { no: 8, service: "Cord cutting from toxicity", price: "INR 5000" },
        ])}

        {renderTable("Intermediate Services", [
          { no: 1, service: "Face reading", price: "INR 2000" },
          { no: 2, service: "Coffee Cup Readings", price: "INR 3500" },
          { no: 3, service: "Aakashic records readings", price: "INR 5000" },
          { no: 4, service: "Unlimited questions for 1 hr", price: "INR 6000" },
          { no: 5, service: "Psychic medium readings", price: "INR 8000" },
        ])}

        {renderTable("Advanced Services", [
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
