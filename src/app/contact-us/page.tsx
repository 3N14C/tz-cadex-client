import { Metadata, NextPage } from 'next';
import { ContactUsPage } from './contact-us.page';
import { generateMetadata } from '@/configs/metadata.config';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Cloud migration, UX/UI design and data analytics services',
  image: '/og-contact-us.jpg',
  url: '/contact-us',
});

const Page: NextPage = ({}) => {
  return <ContactUsPage />;
};

export default Page;
