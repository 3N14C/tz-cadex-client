'use client';

import { FC } from 'react';
import { Button, Logo, Typography } from '@/shared/ui';
import Link from 'next/link';
import { CLIENT_ROUTES } from '@/configs';

interface IProps {}

export const Header: FC<IProps> = ({}) => {
  return (
    <div className="border-b sticky top-0 bg-white z-20 overflow-hidden">
      <div className="flex items-center justify-between responsive-container h-[100px]">
        <Logo />

        <Button className="">
          <Link
            href={CLIENT_ROUTES.CONTACT_US}
            className=""
          >
            <Typography
              size={'base'}
              className="font-medium"
            >
              Contact us
            </Typography>
          </Link>
        </Button>
      </div>
    </div>
  );
};
