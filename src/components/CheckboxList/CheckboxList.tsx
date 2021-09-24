import React, { useState } from 'react';
import { Checkbox } from 'components/Common/Common';
import { checkList } from './constant';

const CheckboxList: React.FC = () => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [options, setOptions] = useState([...checkList]);

  const handleAllChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedAll(!checkedAll);
    let results = [...options].map((option) => {
      return {
        ...option,
        isChecked: event.currentTarget.checked,
      };
    });
    setOptions(results);
  };

  const handleCheckField = (event: React.ChangeEvent<HTMLInputElement>) => {
    let results = [...options].map((option) => {
      return {
        ...option,
        isChecked:
          option.value === event.currentTarget.value
            ? event.currentTarget.checked
            : option.isChecked,
      };
    });
    setOptions(results);
  };

  return (
    <div>
      <div className="mb-2">
        <Checkbox label={'Check / Uncheck All'} isChecked={checkedAll} onCheck={handleAllChecked} />
      </div>
      <hr className="my-3 border-gray-200" />
      {options.map((item, id) => (
        <div className="mb-2 last:mb-0" key={id}>
          <Checkbox
            label={item.value}
            value={item.value}
            isChecked={item.isChecked}
            onCheck={handleCheckField}
          />
          <hr className="my-3 border-gray-200" />
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
