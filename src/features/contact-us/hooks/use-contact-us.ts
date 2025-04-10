import { contactService } from '@/services/contact.service';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { TContactUsSchema } from '../entity/contact-us.schema';

export const useContactUs = () => {
  const { mutateAsync, isPending: isPendingContactUs, isSuccess, data: serverResponse } = useMutation({
    mutationKey: ['contact-us'],
    mutationFn: contactService.sendMessage,
    onSuccess: () => {
      toast.success('Message sent successfully');
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });

  const sendContact = async (data: TContactUsSchema) => {
    return await mutateAsync(data);
  };

  return {
    sendContact,
    isPendingContactUs,
    isSuccess,
    serverResponse,
  };
};
