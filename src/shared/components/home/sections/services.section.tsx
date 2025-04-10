'use client';

import { CLIENT_ROUTES } from '@/configs';
import { Button, Typography } from '@/shared/ui';
import { ServicesWidget } from '@/widgets/services';
import Link from 'next/link';
import { FC } from 'react';

export const ServicesSection: FC = ({}) => {
  return (
    <section className="flex flex-col gap-20 responsive-container">
      <Typography
        size={'h1'}
        className="text-center"
      >
        Our Core Solutions
      </Typography>

      <ServicesWidget />

      <Link
        href={CLIENT_ROUTES.CONTACT_US}
        className="mx-auto w-full max-w-[200px]"
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
    </section>
  );
};
