'use client';

import { Typography } from '@/shared/ui';
import { FC } from 'react';
import { IService } from './service.entity';

interface IProps {
  service: IService;
}

export const ServiceCard: FC<IProps> = ({ service }) => {
  return (
    <div className="flex flex-col items-center gap-1 text-center max-w-[350px] w-full">
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
