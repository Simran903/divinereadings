import Image from "next/image";
import React from "react";
import image1 from "../../public/image1.jpg"
import image2 from "../../public/image2.jpg"

const HomePage = () => {
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row items-center justify-around bg-white px-8 lg:px-24 py-24">
        {/* Text Content */}
        <div className="flex-1 max-w-5xl mb-8 lg:mb-0 space-y-40">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wider">
            Illuminating life paths by shedding light on hidden truth.
          </h1>
          <p className="text-2xl leading-loose text-gray-700 mb-8">
            Unlock mysteries with Shivangi's Tarot Readings and discover the
            ancient art of tarot with DivineReadings. My experienced readings
            offer personalized and intuitive insights to help you navigate life's
            challenges and uncover your true path.
          </p>
          <button className="bg-teal-900 text-white text-lg py-8 px-40 rounded-full shadow-md hover:bg-teal-700 transition">
            Book an Appointment
          </button>
        </div>

        {/* Image */}
        <div className="flex-2">
          <Image
            src={image1}
            alt="Shivangi"
            className="rounded-xl shadow-lg"
            width="500"
            height="700"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around bg-white px-8 lg:px-24 py-24">
        {/* Image */}
        <div className="flex-2">
          <Image
            src={image2}
            alt="Shivangi"
            className="rounded-xl shadow-lg"
            width="500"
            height="700"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 max-w-3xl mb-8 lg:mb-0">
          <div className="mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-wider">
              7+ Years
            </h1>
            <p className="text-2xl leading-loose text-gray-700">Experience in Psychic Medium</p>
          </div>
          <div className="mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-wider">
              50K+
            </h1>
            <p className="text-2xl leading-loose text-gray-700">
              Satisfied Clients
            </p>
          </div>
          <button className="bg-teal-900 text-white text-lg py-8 px-40 rounded-full shadow-md hover:bg-teal-700 transition">
            Book an Appointment
          </button>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
