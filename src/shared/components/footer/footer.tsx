'use client';

import { Typography } from '@/shared/ui';
import { FC } from 'react';

export const Footer: FC = ({}) => {
  return (
    <div className="border-t sticky bottom-0 bg-white z-20 overflow-hidden h-[100px] max-sm:h-[80px]">
      <div className="responsive-container h-full flex flex-col items-center justify-center">
        <Typography
          size={'h3'}
          className="font-medium text-center max-sm:text-lg"
        >
          CAD-X Exchange © 2024. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};
