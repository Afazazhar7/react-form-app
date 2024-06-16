// src/components/MultiStepForm.js
import React, { useState } from 'react';
import WelcomePage from './steps/WelcomePage';
import NameForm from './steps/NameForm';
import EmailForm from './steps/EmailForm';
import CountryForm from './steps/CountryForm';
import PhoneForm from './steps/PhoneForm';
import TechStackForm from './steps/TechStackForm';
import ExperienceForm from './steps/ExperienceForm';
import CompensationForm from './steps/CompensationForm';
import CertifyForm from './steps/CertifyForm';
import ThankYouPage from './steps/ThankYouPage';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const steps = [
    <WelcomePage nextStep={nextStep} />,
    <NameForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <EmailForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <CountryForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <PhoneForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <TechStackForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <ExperienceForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <CompensationForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <CertifyForm nextStep={nextStep} handleSubmit={handleFormData} formData={formData} />,
    <ThankYouPage />
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-montserrat">
      <div className="bg-white p-8 rounded-lg w-[800px] max-w-full">
        {steps[currentStep]}
      </div>
    </div>
  );
};

export default MultiStepForm;
