'use client';

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Container;