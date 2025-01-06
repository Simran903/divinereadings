"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const router = useRouter();
  
  const handleclick = () => {
    router.push("/")
  }


  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 md:px-16">
      <div className="mx-auto bg-white shadow-md rounded-lg p-28 tracking-wider space-y-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Privacy Policy</h1>
        <p className="text-gray-600  text-lg">
          DivineReadings | All services of this website are owned by Shivangi Chandra, who is the data controller of your personal data.
        </p>
        <p className='text-gray-600   text-lg'>We have adopted this Privacy Policy, which outlines how we process the information collected on this website and provides the reasons why we need to collect certain personal data about you. Therefore, it is important that you read this Privacy Policy before using DivineReadings.</p>
        <p className='text-gray-600   text-lg'>We take care of your personal data and are committed to guaranteeing its confidentiality and security.</p>


        <section className="mb-6">
          <h2 className="text-xl font-semibold my-4">Personal Information We Collect:</h2>
          <p className="text-gray-600 leading-loose tracking-wider text-lg">
            When you visit DivineReadings, we automatically collect certain information about your device, including your web browser, IP address, time zone, and some of the cookies installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, the websites or search terms that referred you to the Site, and how you interact with the Site. We refer to this automatically collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including, but not limited to, name, surname, address, payment information, etc.) during registration to fulfill the agreement.
          </p>
        </section>

        <section className="mb-6 space-y-4">
          <h2 className="text-xl font-semibold my-4  ">Why do we process your data?</h2>
          <p className="text-gray-600 leading-loose tracking-wider text-lg">
            Our top priority is customer data security, and as such, we may process only minimal user data—only as much as is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and to establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
          </p>
          <p className='text-gray-600 leading-loose tracking-wider text-lg'>You can visit the website without telling us who you are or revealing any information that could identify you as a specific, identifiable individual. However, if you wish to use some of the website's features, receive our newsletter, or provide other details by filling out a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, and telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website's features. For example, you won't be able to receive our newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via shivangichandra@gmail.com.</p>
        </section>

        <section className="mb-6 space-y-4">
          <h2 className="text-xl font-semibold my-4  ">Your Rights:</h2>
          <p className="text-gray-600 leading-loose tracking-wider text-lg">
            If you are a European resident, you have the following rights related to your personal data:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-loose tracking-wider  text-lg space-y-1">
            <li>The right to be informed</li>
            <li>The right of access</li>
            <li>The right to rectification</li>
            <li>The right to erasure</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object</li>
            <li>Rights in relation to automated decision-making and profiling</li>
          </ul>
          <p className="text-gray-600 leading-loose tracking-wider text-lg mt-4">
            If you would like to exercise these rights, please contact us through the contact information provided below.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold my-4  ">Links to Other Websites:</h2>
          <p className="text-gray-600 leading-loose tracking-wider  text-lg">
            Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other websites or third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold my-4  ">Information Security:</h2>
          <p className="text-gray-600 leading-loose tracking-wider  text-lg">
            We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. However, no data transmission over the Internet or wireless network can be guaranteed.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold my-4">Legal disclosure:</h2>
          <p className="text-gray-600 leading-loose tracking-wider text-lg">
            We will disclose any information we collect, use, or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, your safety or the safety of others, to investigate fraud, or to respond to a government request.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold my-4">Contact Information:</h2>
          <p className="text-gray-600 leading-loose tracking-wider text-lg">
            If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter related to individual rights and your Personal Information, you may send an email to shivangichandra@gmail.com.
          </p>
        </section>

        <div className="my-16">
          <button
            className="bg-teal-900 text-white text-base md:text-lg lg:text-xl py-4 px-10 md:py-6 md:px-16 lg:py-8 lg:px-16 rounded-full shadow-md hover:bg-teal-700 transition"
            onClick={handleclick}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;