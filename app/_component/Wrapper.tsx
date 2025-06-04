'use client';

import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center m-3">
      {children}
    </div>
  );
};

export default Wrapper;