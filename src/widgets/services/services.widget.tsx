'use client';

import { FC } from 'react';
import { services } from './entity/service.entity';
import { ServiceCard } from './entity/service.card';
import { Button, Typography } from '@/shared/ui';
import Link from 'next/link';
import { CLIENT_ROUTES } from '@/configs';

interface IProps {}

export const ServicesWidget: FC<IProps> = ({}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-3 gap-y-10 justify-items-center">
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
