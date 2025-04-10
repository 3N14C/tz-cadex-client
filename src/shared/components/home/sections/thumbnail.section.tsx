'use client';

import { CLIENT_ROUTES } from '@/configs';
import { Button, Typography } from '@/shared/ui';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {}

export const ThumbnailSection: FC<IProps> = ({}) => {
  return (
    <div className="bg-primary-zinc h-[400px]">
      <div className="responsive-container flex flex-col items-center h-full justify-center gap-10">
        <Typography size={'h1'}>Less important title</Typography>

        <Link
          href={CLIENT_ROUTES.CONTACT_US}
          className="max-w-[200px] w-full"
        >
          <Button className="">
            <Typography
              size={'base'}
              className="font-medium"
            >
              Contact us
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};
