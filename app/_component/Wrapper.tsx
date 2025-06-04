'use client';

import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      {children}
    </div>
  );
};

export default Wrapper;