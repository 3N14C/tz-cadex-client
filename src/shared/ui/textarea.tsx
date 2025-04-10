'use client';

import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { Typography } from './typography';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textAreaVariants = cva(
  'px-3 py-2 rounded-md border outline-none focus:border-primary-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300',
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
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {
  label?: string;
  error?: FieldError | undefined;
}

export const TextArea = forwardRef<HTMLTextAreaElement, IProps>(
  ({ className, label, error, variant, ...props }, ref) => {
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
        <textarea
          ref={ref}
          {...props}
          className={cn(
            textAreaVariants({ variant }),
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

TextArea.displayName = 'TextArea';
