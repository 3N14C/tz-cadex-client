'use client';

import { Button, Input, TextArea, Typography } from '@/shared/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { contactUsSchema, TContactUsSchema } from './entity/contact-us.schema';
import { useContactUs } from './hooks/use-contact-us';

export const ContactUsFeature: FC = ({}) => {
  const { sendContact, isPendingContactUs, isSuccess, serverResponse } =
    useContactUs();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactUsSchema>({
    resolver: zodResolver(contactUsSchema),
    disabled: isPendingContactUs,
  });

  if (isSuccess) {
    return (
      <div className="max-w-[600px] w-full mx-auto">
        <Typography
          size="h1"
          className="mb-4 font-semibold text-center"
        >
          {serverResponse}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <Typography
        size={'h1'}
        className="text-center"
      >
        Contact us
      </Typography>

      <form
        onSubmit={handleSubmit(sendContact)}
        className="flex flex-col gap-5 max-w-[600px] w-full mx-auto border border-primary-gray rounded-lg p-5 bg-white mt-5"
      >
        <Input
          {...register('name')}
          label="Name"
          placeholder="John"
          error={errors.name}
        />

        <Input
          {...register('email')}
          label="Email"
          placeholder="example@mail.ru"
          error={errors.email}
        />

        <TextArea
          {...register('message')}
          label="Message"
          placeholder="Hello, I'm interested in..."
          error={errors.message}
          rows={5}
          className="resize-none"
        />

        <Button
          disabled={isPendingContactUs}
          className="max-w-full"
          type="submit"
        >
          <Typography
            size={'base'}
            className="font-medium"
          >
            Contact us
          </Typography>
        </Button>
      </form>
    </>
  );
};
