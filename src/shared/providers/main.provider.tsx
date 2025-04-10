'use client';

import { FC } from 'react';
import { TanstackProvider } from './tanstack.provider';
import { MotionProvider } from './motion.provider';
import { Toaster } from '../ui';

interface IProps {
  children: React.ReactNode;
}

export const MainProvider: FC<IProps> = ({ children }) => {
  return (
    <TanstackProvider>
      <MotionProvider>
        {children}
        <Toaster />
      </MotionProvider>
    </TanstackProvider>
  );
};
