import React from 'react';
import './Checkbox.css';

export type CheckboxProps = {
  label?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div className="flex items-center mb-2 mr-4">
      <label className="flex items-center space-x-4">
        <input
          type="checkbox"
          value="1"
          className="w-6 h-6 transition duration-200 ease-in bg-center bg-no-repeat border-2 rounded appearance-none form-tick border-gray checked:border-success checked:bg-success checked:bg-contain focus:outline-none"
        />
        <span className="text-base font-medium text-black">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
