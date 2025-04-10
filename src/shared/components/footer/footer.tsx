'use client';

import { Typography } from '@/shared/ui';
import { FC } from 'react';

interface IProps {}

export const Footer: FC<IProps> = ({}) => {
  return (
    <div className="border-t sticky bottom-0 bg-white z-20 overflow-hidden h-[100px]">
      <div className="responsive-container h-full flex flex-col items-center justify-center">
        <Typography
          size={'h3'}
          className="font-medium"
        >
          Some company 2024
        </Typography>
      </div>
    </div>
  );
};
