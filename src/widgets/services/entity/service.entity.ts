export interface IService {
  id: string;
  title: string;
  description: string;
}

export const services: IService[] = [
  {
    id: '1',
    title: 'Custom Software Development',
    description:
      'Tailored applications designed to streamline your business operations and drive growth.',
  },
  {
    id: '2',
    title: 'Cloud Solutions & Migration',
    description:
      'Secure and scalable cloud infrastructure to modernize your IT environment.',
  },
  {
    id: '3',
    title: 'UX/UI Design Services',
    description:
      'Intuitive interfaces that enhance user engagement and satisfaction.',
  },
  {
    id: '4',
    title: 'Data Analytics & BI',
    description:
      'Transform raw data into actionable insights for informed decision-making.',
  },
  {
    id: '5',
    title: 'Cybersecurity Services',
    description:
      'Comprehensive protection for your digital assets and infrastructure.',
  },
  {
    id: '6',
    title: '24/7 Technical Support',
    description:
      'Dedicated assistance to ensure your systems run smoothly at all times.',
  },
];
