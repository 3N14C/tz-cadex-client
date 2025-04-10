'use client';

import { FC } from 'react';
import { ServiceCard } from './entity/service.card';
import { services } from './entity/service.entity';

export const ServicesWidget: FC = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-y-10 justify-items-center max-lg:grid-cols-2 max-md:grid-cols-1">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
};
