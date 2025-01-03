import React, { FC } from 'react';

interface ButtonProps {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <button
        className="bg-teal-900 text-white text-base md:text-lg lg:text-xl py-4 px-10 md:py-6 md:px-16 lg:py-8 lg:px-24 rounded-full shadow-md hover:bg-teal-700 transition"
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default Button;
