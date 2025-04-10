'use client';

import { CLIENT_ROUTES } from '@/configs';
import Link from 'next/link';
import { FC } from 'react';
import { Typography } from './typography';

export const Logo: FC = ({}) => {
  return (
    <div className="">
      <Link href={CLIENT_ROUTES.HOME}>
        <Typography
          size={'h2'}
          className="font-medium"
        >
          TZ CAD-X
        </Typography>
      </Link>
    </div>
  );
};
