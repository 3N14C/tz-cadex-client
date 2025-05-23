'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

export const TanstackProvider: FC<IProps> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
