import React from 'react';
import './Checkbox.css';

export type CheckboxProps = {
  label?: string;
  value?: string;
  isChecked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheck?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, value, isChecked, onCheck }) => {
  return (
    <div className="flex items-center">
      <label className="flex items-center space-x-4">
        <input
          type="checkbox"
          value={value}
          checked={isChecked || false}
          onChange={onCheck}
          className="w-6 h-6 transition duration-200 ease-in bg-center bg-no-repeat border-2 rounded appearance-none form-tick border-gray checked:border-success checked:bg-success checked:bg-contain focus:outline-none"
        />
        <span className="text-base font-medium transition duration-200 ease-in text-gray">
          {label}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
