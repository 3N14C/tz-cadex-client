'use client';

import { Typography } from '@/shared/ui';
import { ServicesWidget } from '@/widgets/services';
import { FC } from 'react';

export const ServicesSection: FC = ({}) => {
  return (
    <div className="flex flex-col gap-20 responsive-container">
      <Typography
        size={'h1'}
        className="text-center"
      >
        Our Core Solutions
      </Typography>

      <ServicesWidget />
    </div>
  );
};
