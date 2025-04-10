'use client';

import { Typography } from '@/shared/ui';
import { FC } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export const HeroSection: FC = ({}) => {
  return (
    <section className="bg-primary-zinc py-10">
      <div className="flex items-center justify-between responsive-container max-xl:flex-col max-xl:gap-10">
        <div className="flex flex-col gap-5 items-start max-w-[500px] max-xl:max-w-full max-xl:text-center max-xl:items-center">
          <Typography size={'h1'}>Elevate Your Digital Experience</Typography>
          <Typography size={'base'}>
            Innovative solutions tailored to your business needs. Our team
            combines cutting-edge technology with proven methodologies to
            deliver exceptional results for clients worldwide.
          </Typography>
        </div>

        <div className="bg-primary-gray h-[350px] max-w-[700px] w-full">
          <LiteYouTubeEmbed
            id="dQw4w9WgXcQ"
            title="YouTube video player"
            poster="hqdefault"
            wrapperClass="w-full h-full cursor-pointer"
            iframeClass="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
