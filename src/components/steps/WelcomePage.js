// src/components/steps/WelcomePage.js
import React from 'react';

const WelcomePage = ({ nextStep }) => {
  const handleStart = () => {
    nextStep(); // This should invoke the function passed from MultiStepForm to proceed to the next step
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-montserrat">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[800px] max-w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to the Multi-Step Form
          </h1>
        </div>
        <div className="text-purple-500 text-xl mb-6 flex items-center">
          <span className="text-3xl font-bold mr-2">1</span>
          <span>Let's get started!</span>
        </div>
        <button
          onClick={handleStart}
          className="mt-8 flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
