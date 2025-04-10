'use client';

import { Typography } from '@/shared/ui';
import { FC } from 'react';
import { IService } from './service.entity';

interface IProps {
  service: IService;
}

export const ServiceCard: FC<IProps> = ({ service }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <Typography
        size={'h3'}
        className=""
      >
        {service.title}
      </Typography>

      <Typography
        size={'base'}
        className="text-primary-dark-gray"
      >
        {service.description}
      </Typography>
    </div>
  );
};
