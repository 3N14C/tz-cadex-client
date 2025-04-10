'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'cursor-pointer py-3 px-6 rounded-md max-w-[200px] w-full disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300',
  {
    variants: {
      variant: {
        solid:
          'bg-primary-black hover:bg-primary-black/90 active:bg-primary-black/80 text-white',
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  }
);

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ variant, children, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
      >
        {props.disabled ? (
          <Loader2 className="animate-spin mx-auto" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
