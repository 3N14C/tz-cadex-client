'use client';

import { FC } from 'react';
import { Typography } from './typography';
import Link from 'next/link';
import { CLIENT_ROUTES } from '@/configs';

interface IProps {}

export const Logo: FC<IProps> = ({}) => {
  return (
    <div className="">
      <Link href={CLIENT_ROUTES.HOME}>
        <Typography
          size={'h2'}
          className="font-medium"
        >
          Some company
        </Typography>
      </Link>
    </div>
  );
};
