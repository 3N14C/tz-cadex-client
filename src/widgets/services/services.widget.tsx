'use client';

import { CLIENT_ROUTES } from '@/configs';
import { Button, Typography } from '@/shared/ui';
import Link from 'next/link';
import { FC } from 'react';
import { ServiceCard } from './entity/service.card';
import { services } from './entity/service.entity';

export const ServicesWidget: FC = ({}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-3 gap-y-10 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>

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
    </div>
  );
};
