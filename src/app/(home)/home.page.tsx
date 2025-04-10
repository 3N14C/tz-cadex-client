'use client';

import {
  HeroSection,
  ServicesSection,
  ThumbnailSection,
} from '@/shared/components/home/sections';
import { FC } from 'react';

interface IProps {}

export const HomePage: FC<IProps> = ({}) => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ServicesSection />
      <ThumbnailSection />
    </div>
  );
};
