'use client';

import { Typography } from '@/shared/ui';
import { ServicesWidget } from '@/widgets/services';
import { FC } from 'react';

interface IProps {}

export const ServicesSection: FC<IProps> = ({}) => {
  return (
    <div className="flex flex-col gap-20 responsive-container">
      <Typography
        size={'h1'}
        className="text-center"
      >
        Also very important title
      </Typography>

      <ServicesWidget />
    </div>
  );
};
