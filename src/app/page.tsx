import Image from "next/image";
import React from "react";
import accreditation from "../../public/accreditation.png";
import Services from "@/components/services";
import Button from "@/components/button";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contactform";
import Footer from "@/components/footer";
// import PictureGallery from "@/components/picturegallery";
import Accordion from "@/components/accordion";
import image3 from "../../public/picturegallery/IMG_20241215_171141.jpg";
import acc from "../../public/accreditation.jpeg"
import about from "../../public/about.jpg"
import image2 from "../../public/picturegallery/IMG_20241215_101810.jpg";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        id="home"
        className="flex flex-col lg:flex-row items-center justify-around px-6 sm:px-10 lg:px-24 py-44 gap-12"
      >
        <div className="flex-1 max-w-2xl lg:max-w-3xl space-y-12 lg:space-y-28 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 tracking-wide">
            Illuminating life paths by shedding light on hidden truth.
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-loose tracking-wider">
            Unlock mysteries with Shivangi's Tarot Readings and discover the
            ancient art of tarot with DivineReadings. My experienced readings
            offer personalized and intuitive insights to help you navigate
            life's challenges and uncover your true path.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
        <div className="flex-1 max-w-md space-y-4">
          <Image
            src={image3}
            alt="Shivangi"
            className="rounded-lg p-6 shadow-lg w-full h-auto"
          />
          <Image
            src={acc}
            alt="Shivangi"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* About Me Section */}
      <div
        id="about"
        className="flex flex-col lg:flex-row items-center justify-around px-6 sm:px-10 lg:px-24 py-12 lg:py-24 gap-12"
      >
        <div className="flex-1 max-w-md">
          <Image
            src={image2}
            alt="Shivangi"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="flex-1 max-w-2xl lg:max-w-3xl text-center lg:text-left space-y-6 lg:space-y-10">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
            About Me
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-700 leading-loose tracking-wider">

            As a psychic medium, I have been drawn to divination processes and mystic tools, since I was 7 years old. I decided to share this gift with the world to help others move forward in their lives with joy and peace. For the past 8 years, I have been offering tarot readings, healings, and various divination services, guiding people toward better things in life.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Accreditation Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-around px-6 sm:px-10 lg:px-24 py-12 lg:py-24 gap-12"
      >
        <div className="flex-1 max-w-md md:max-w-lg lg:max-w-xl flex justify-center">
          <Image
            src={about}
            alt="Accreditation"
            className="w-3/4 h-auto rounded-lg"
          />
        </div>
        <div className="flex-1 max-w-2xl text-center lg:text-left space-y-6 lg:space-y-10">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
            Ready to give a better life another shot?
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            My mission is to provide insightful and compassionate tarot readings
            that empower my clients to make informed decisions and live their
            best lives.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button />
          </div>
        </div>
      </div>

      {/* Picture Gallery Section */}
      {/* <PictureGallery /> */}

      {/* Testimonials Section */}
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
