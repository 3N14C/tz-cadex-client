'use client';

import { CLIENT_ROUTES } from '@/configs';
import { Button, Typography } from '@/shared/ui';
import Link from 'next/link';
import { FC } from 'react';


export const ThumbnailSection: FC = ({}) => {
  return (
    <div className="bg-primary-zinc h-[400px]">
      <div className="responsive-container flex flex-col items-center h-full justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <Typography size={'h1'}>Get in Touch</Typography>
          <Typography
            size={'base'}
            className="text-center"
          >
            Have questions or ready to start your project? <br />
            Our team is here to help you every step of the way.
          </Typography>
        </div>

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
