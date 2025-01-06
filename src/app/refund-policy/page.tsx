"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const RefundPolicy: React.FC = () => {
  const router = useRouter();

  const handleclick = () => {
    router.push("/")
  }


  return (
    <div className="bg-gray-50 py-8 px-4 md:px-16">
      <div className="mx-auto bg-white shadow-md rounded-lg p-28 tracking-wider space-y-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Refund Policy</h1>
        <p className="text-zinc-800 text-lg">
        At DivineReadings, we strive to provide a high-quality tarot reading service. However, please be aware that all bookings made with us are non-refundable. Once you have booked a session, we are unable to offer any refunds.
        </p>
        <p className='text-zinc-800 text-lg'>We understand that circumstances may change, and you may have unforeseen situations that prevent you from attending the scheduled session. However, please note that we are unable to accommodate refund requests, regardless of the reason.
        </p>
        <p className='text-zinc-800 text-lg'>We encourage you to carefully consider your availability and commitment before making a booking. If you have any doubts or questions about our services, we are more than happy to address them prior to your booking. You can contact us via email at shivangichandra@gmail.com or through WhatsApp at the provided number.
        </p>
        <p className='text-zinc-800 text-lg'>We appreciate your understanding and cooperation in adhering to our refund policy. We are committed to providing you with enriching and insightful services, and we look forward to assisting you on your journey.
        </p>

        <p>Thank you for choosing DivineReadings!</p>

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

export default RefundPolicy;