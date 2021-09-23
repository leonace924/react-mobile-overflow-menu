import * as React from 'react';
export type IconType = string | 'plus';

type IconProps = {
  type: IconType;
  className?: string;
  alt?: string;
};

export const Icon = ({ type, alt, ...rest }: IconProps) => {
  switch (type) {
    case 'plus':
      return (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          {alt && <title>{alt ?? 'plus'}</title>}
          <path
            d="M14.5 6.5H10V2C10 1.46875 9.53125 1 9 1H8C7.4375 1 7 1.46875 7 2V6.5H2.5C1.9375 6.5 1.5 6.96875 1.5 7.5V8.5C1.5 9.0625 1.9375 9.5 2.5 9.5H7V14C7 14.5625 7.4375 15 8 15H9C9.53125 15 10 14.5625 10 14V9.5H14.5C15.0312 9.5 15.5 9.0625 15.5 8.5V7.5C15.5 6.96875 15.0312 6.5 14.5 6.5Z"
            fill="white"
          />
        </svg>
      );

    default:
      return null;
  }
};
