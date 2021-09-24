import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-danger" />
    </div>
  );
};

export default Loading;
