'use client';

import { ContactUsFeature } from '@/features/contact-us';
import { Typography } from '@/shared/ui';
import { FC } from 'react';

interface IProps {}

export const ContactUsPage: FC<IProps> = ({ }) => {

  return (
    <div className="bg-primary-zinc min-h-[calc(100vh-201px)] flex flex-col items-center justify-center">
      <div className="responsive-container">


        <ContactUsFeature />
      </div>
    </div>
  );
};
