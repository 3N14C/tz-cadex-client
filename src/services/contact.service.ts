import { apiPublic } from '@/configs';
import { TContactUsSchema } from '@/features/contact-us/entity/contact-us.schema';
import { AxiosError } from 'axios';

class ContactService {
  sendMessage = async (data: TContactUsSchema): Promise<string> => {
    try {
      const response = await apiPublic.post<string>('contact-message', data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data;
      }
      throw error;
    }
  };

  sendEmail = async (): Promise<string> => {
    try {
      const response = await apiPublic.post<string>('send-message/email');
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response?.data;
      }
      throw error;
    }
  };
}

export const contactService = new ContactService();
