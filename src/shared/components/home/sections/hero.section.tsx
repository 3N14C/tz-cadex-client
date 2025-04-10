'use client';

import { Typography } from '@/shared/ui';
import { FC } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

interface IProps {}

export const HeroSection: FC<IProps> = ({}) => {
  return (
    <div className="bg-primary-zinc py-10">
      <div className="flex items-center justify-between responsive-container">
        <div className="flex flex-col gap-5 items-start max-w-[500px]">
          <Typography size={'h1'}>Most important title on the page</Typography>
          <Typography size={'base'}>
            Lorem Ipsum dolor sit amet consectetur adiptscing elit- Aliquam
            mattis, leo et condimentum ultricies, sem uma convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </Typography>
        </div>

        <div className="bg-primary-gray h-[350px] w-[700px]">
          <LiteYouTubeEmbed
            id="dQw4w9WgXcQ"
            title="YouTube video player"
            poster="hqdefault"
            wrapperClass="w-full h-full"
            iframeClass="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
