import React from 'react';
import { Icon } from 'components/Icon/Icon';
import { socialList } from './constant';
export type SocialIconsProps = {};

const SocialIcons = () => {
  return (
    <div className="inline-grid grid-cols-5 gap-4">
      {socialList.map((el) => (
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full bg-light-yellow"
          key={el.type}
        >
          <Icon type={el.type} />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
