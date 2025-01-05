"use client";
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="">
      <div className="rounded-full shadow-2xl p-6">
        <button
          className="w-full text-left px-4 py-6 flex justify-between items-center focus:outline-none"
          onClick={onToggle}
        >
          <h1 className="font-semibold text-2xl">{title}</h1>
          <span className="text-gray-500 text-xl">{isOpen ? '-' : '+'}</span>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <p className="px-4 py-2 text-xl text-gray-600 leading-loose tracking-wider my-8">{content}</p>
      </div>
    </div>
  );
};

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { title: 'What is tarot reading?', content: 'Tarot reading is a form of divination using a deck of tarot cards to gain insights into past, present, and future events. It involves interpreting the symbolism and imagery on the cards to provide guidance and answers to your questions.' },
    { title: 'How do I book a tarot reading?', content: 'You can book a tarot reading through our website. Click the Book an Appointment button, choose your preferred meeting time, select date and time, and complete the payment process. You will receive a confirmation email with all the details.' },
    { title: 'What types of tarot readings do you offer?', content: 'We offer a variety of tarot readings including in-person, online (via video call), and email readings. We also have specialty readings focusing on areas such as love and relationships, career and finance, and spiritual guidance.' },
    { title: 'How long does a tarot reading session last?', content: 'The length of a tarot reading session can vary. Typically, readings range from 30 minutes to an hour, depending on the type of reading and the complexity of your questions.' },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-24 mt-44'>Need to know more? We've got you covered.
      </h1>
      <h3 className='text-xl p-4 tracking-wider my-8'>A list of important and often asked questions. Have another question not listed?</h3>
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
