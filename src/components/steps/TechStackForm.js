// src/components/steps/TechStackForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const techOptions = [
  'JavaScript', 'Python', 'Java', 'C#', 'Ruby', 'PHP', 'C++', 'TypeScript', 'Swift', 'Kotlin',
  'React', 'Angular', 'Vue', 'Django', 'Flask', 'Spring', 'Rails', 'Laravel', 'Symfony'
];

const TechStackForm = ({ nextStep, handleSubmit, formData }) => {
  const { control, handleSubmit: rhfSubmit } = useForm({
    defaultValues: formData
  });

  const onSubmit = (data) => {
    handleSubmit(data);
    nextStep();
  };

  return (
    <form onSubmit={rhfSubmit(onSubmit)} className="space-y-6">
      <div className="mb-6">
        <label className="block text-sm font-medium text-purple-500">Languages and Frameworks</label>
        <Controller
          name="techStack"
          control={control}
          render={({ field }) => (
            <select
              multiple
              {...field}
              className="mt-1 block w-full sm:w-[691px] px-3 py-2 border-b-2 border-purple-300 text-purple-500 placeholder-purple-300 focus:outline-none focus:border-purple-500"
            >
              {techOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        />
      </div>
      <button
        type="submit"
        className="mt-6 flex items-center justify-center w-full sm:w-auto px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-lg text-white bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
      >
        OK
      </button>
    </form>
  );
};

export default TechStackForm;
