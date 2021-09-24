import React from 'react';
import cx from 'classnames';
import { Icon } from 'components/Icon/Icon';
import './Button.css';

export type ButtonProps = {
  color?: 'primary';
  icon?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  icon = undefined,
  type = 'button',
  className = '',
  disabled = false,
  children,
  ...props
}) => {
  const classNames = cx(
    'btn flex items-center justify-center px-10 py-3 rounded-2xl font-bold text-white text-base',
    className,
    {
      'cursor-not-allowed bg-disabled': disabled,
      'bg-primary': color === 'primary' && !disabled,
      uppercase: !disabled,
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
