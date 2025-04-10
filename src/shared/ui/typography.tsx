'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const typographyVariants = cva('', {
  variants: {
    size: {
      h1: 'text-[50px] font-semibold',
      h2: 'text-4xl font-bold',
      h3: 'text-[28px] font-medium',
      base: 'text-base',
      label: 'text-sm',
    },
    font: {
      poppins: 'font-[poppins]',
    },
  },
  defaultVariants: {
    size: 'base',
    font: 'poppins',
  },
});

type TTag = 'p' | 'span';

interface IProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  tag?: TTag;
}

export const Typography = forwardRef<HTMLParagraphElement, IProps>(
  ({ tag = 'p', className, children, size, font, ...props }, ref) => {
    const Tag = tag;
    return (
      <Tag
        {...props}
        ref={ref}
        className={cn(typographyVariants({ size, font }), className)}
      >
        {children}
      </Tag>
    );
  }
);

Typography.displayName = 'Typography';
