import { generateMetadata } from '@/configs/metadata.config';
import { HomePage } from './home.page';

export const metadata = generateMetadata({
  title: 'Home',
  description: 'Cloud migration, UX/UI design and data analytics services',
  image: '/og-home.jpg',
  url: '/',
});

export default function Home() {
  return <HomePage />;
}
