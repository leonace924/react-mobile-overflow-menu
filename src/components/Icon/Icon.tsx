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

    case 'close':
      return (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...rest}
        >
          {alt && <title>{alt ?? 'close'}</title>}
          <path
            d="M8.82031 6.25L12.3359 2.73438C12.793 2.3125 12.793 1.60938 12.3359 1.1875L11.5625 0.414062C11.1406 -0.0429688 10.4375 -0.0429688 10.0156 0.414062L6.5 3.92969L2.94922 0.414062C2.52734 -0.0429688 1.82422 -0.0429688 1.40234 0.414062L0.628906 1.1875C0.171875 1.60938 0.171875 2.3125 0.628906 2.73438L4.14453 6.25L0.628906 9.80078C0.171875 10.2227 0.171875 10.9258 0.628906 11.3477L1.40234 12.1211C1.82422 12.5781 2.52734 12.5781 2.94922 12.1211L6.5 8.60547L10.0156 12.1211C10.4375 12.5781 11.1406 12.5781 11.5625 12.1211L12.3359 11.3477C12.793 10.9258 12.793 10.2227 12.3359 9.80078L8.82031 6.25Z"
            fill="white"
          />
        </svg>
      );
    default:
      return null;
  }
};
