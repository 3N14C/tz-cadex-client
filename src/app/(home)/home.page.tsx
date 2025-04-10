'use client';

import {
  HeroSection,
  ServicesSection,
  ThumbnailSection,
} from '@/shared/components/home/sections';
import { FC } from 'react';

export const HomePage: FC = ({}) => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ServicesSection />
      <ThumbnailSection />
    </div>
  );
};
