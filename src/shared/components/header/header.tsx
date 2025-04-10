'use client';

import { CLIENT_ROUTES } from '@/configs';
import { Button, Logo, Typography } from '@/shared/ui';
import { Send } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {}

export const Header: FC<IProps> = ({}) => {
  return (
    <div className="border-b sticky top-0 bg-white z-20 overflow-hidden">
      <div className="flex items-center justify-between responsive-container h-[100px]">
        <Logo />

        <Button className="max-sm:w-fit">
          <Link
            href={CLIENT_ROUTES.CONTACT_US}
            className=""
          >
            <Typography
              size={'base'}
              className="font-medium max-sm:hidden"
            >
              Contact us
            </Typography>

            <Send className="mx-auto sm:hidden" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
