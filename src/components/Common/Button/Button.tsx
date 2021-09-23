import React from 'react';
import cx from 'classnames';
import { Icon } from 'components/Icon/Icon';
import './Button.css';

export interface ButtonProps {
  color?: 'primary';
  icon?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  color = 'primary',
  icon = undefined,
  type = 'button',
  className = '',
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  const classNames = cx(
    'btn flex items-center px-10 py-3 rounded-2xl font-bold text-base uppercase filter filter contrast-200 drop-shadow-3xl',
    className,
    {
      'bg-primary text-white': color === 'primary',
      'opacity-50 cursor-not-allowed': disabled,
    },
  );

  return (
    <button className={classNames} type={type} disabled={disabled} {...props}>
      {icon ? <Icon type={icon} className="mr-2" /> : null}
      {children}
    </button>
  );
};

export default Button;