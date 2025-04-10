'use client';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { Typography } from './typography';

const inputVariants = cva(
  'outline-none px-3 py-2 rounded-md border focus:border-primary-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300',
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: FieldError | undefined;
}

export const Input = forwardRef<HTMLInputElement, IProps>(
  ({ className, variant, error, label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <Typography
            size={'label'}
            className={cn({
              'opacity-50': props.disabled,
            })}
          >
            {label}
          </Typography>
        )}
        <input
          {...props}
          ref={ref}
          className={cn(
            inputVariants({ variant }),
            {
              'border-red-500': error,
            },
            className
          )}
        />
        {error && (
          <Typography
            size={'base'}
            className="text-red-400"
          >
            *{error.message}
          </Typography>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
