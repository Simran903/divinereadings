import Image from "next/image";
import React from "react";
import image1 from "../../public/image1.jpg";
// import image2 from "../../public/image2.png";
import image3 from "../../public/image3.jpeg";
import Services from "@/components/services";
import Button from "@/components/button";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contactform";
import Footer from "@/components/footer";
import PictureGallery from "@/components/picturegallery";
import Accordion from "@/components/accordion";
import accreditation from "../../public/accreditation.png"

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="flex flex-col lg:flex-row items-center justify-between md:justify-around bg-white px-6 sm:px-10 lg:px-24 py-12 lg:py-48">
        <div className="flex-1 max-w-2xl lg:max-w-4xl mb-16 md:space-y-36">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide text-center lg:text-left">
            Illuminating life paths by shedding light on hidden truth.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl leading-loose text-gray-700 mb-8 text-center lg:text-left">
            Unlock mysteries with Shivangi's Tarot Readings and discover the
            ancient art of tarot with DivineReadings. My experienced readings
            offer personalized and intuitive insights to help you navigate life's
            challenges and uncover your true path.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <Image
            src={image1}
            alt="Shivangi"
            className="rounded-xl shadow-lg"
            width="500"
            height="800"
          />
        </div>
      </div>

      {/* Experience Section */}
      {/* <div className="flex flex-col md:flex-row items-center justify-between md:justify-around px-6 sm:px-10 lg:px-24 py-12 lg:py-24">
        <div className="flex-1 max-w-md mb-8 lg:mb-0">
          <Image
            src={image2}
            alt="Shivangi"
            className="rounded-xl shadow-lg"
            width="500"
            height="700"
          />
        </div>
        <div className="flex-1 max-w-2xl lg:max-w-3xl">
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 tracking-wide">
              7+ Years
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl leading-loose text-gray-700">
              Experience in Psychic Medium
            </p>
          </div>
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 tracking-wide">
              50K+
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl leading-loose text-gray-700">
              Satisfied Clients
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
      </div> */}

      {/* About Me Section */}
      <div id="about" className="flex flex-col lg:flex-row items-center justify-between md:justify-around bg-white px-6 sm:px-10 lg:px-24 py-12 lg:py-24">
      <div className="flex-1 max-w-md">
          <Image
            src={image3}
            alt="Shivangi"
            className="rounded-xl shadow-lg"
            width="500"
            height="800"
          />
        </div>
        <div className="flex-1 max-w-2xl lg:max-w-4xl mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide text-center lg:text-left">
            About Me
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl leading-loose text-gray-700 mb-8 text-center lg:text-left">
            I have been drawn to divination processes and mystic tools since I was 7 years old and eventually discovered my gift of insight and clairvoyance. I decided to share this gift with the world to proceed forward in their life with joy and peace. I have been doing tarot readings, healings and divination procedures for others since last 7 years helping people to move on to better things in life.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      <div className="flex flex-col md:flex-row items-center justify-between md:justify-around px-6 sm:px-10 lg:px-24 py-12 lg:py-24">
        <div className="flex flex-1 max-w-3xl mb-8 lg:mb-0 justify-center items-center">
          <Image
            src={accreditation}
            alt="Shivangi"
            className="w-80"
          />
        </div>
        <div className="flex-1 max-w-4xl mb-16 md:space-y-36">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-wide text-center lg:text-left">
            Ready to give a better life another shot ?
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl leading-loose text-gray-700 mb-8 text-center lg:text-left">
            My mission is to provide insightful and compassionate tarot readings that empower my clients to make informed decisions and live their best lives.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
      </div>

      {/* PictureGallery Section */}
      <PictureGallery />

      {/* Testimonial Section */}
      <Testimonials />

      {/* Accordion Section */}
      <Accordion />

      {/* Contact Section */}
      <ContactForm />

      {/* Footer Section */}
      <Footer />

    </div>
  );
};

export default HomePage;