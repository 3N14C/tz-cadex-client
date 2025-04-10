'use client';

import { domAnimation, LazyMotion } from 'motion/react';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const MotionProvider: FC<IProps> = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};
