'use client';

import { ContactUsFeature } from '@/features/contact-us';
import { FC } from 'react';

export const ContactUsPage: FC = ({}) => {
  return (
    <div className="bg-primary-zinc min-h-[calc(100vh-201px)] flex flex-col items-center justify-center">
      <div className="responsive-container">
        <ContactUsFeature />
      </div>
    </div>
  );
};
