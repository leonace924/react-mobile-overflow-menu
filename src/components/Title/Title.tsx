import React from 'react';

export type TitleProps = {
  children?: React.ReactNode;
};

const Title: React.FC = ({ children }: TitleProps) => {
  return <h2 className="text-xl font-bold text-black capitalize">{children}</h2>;
};

export default Title;
