import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function withQuery(element: ReactElement) {
  return (
    <QueryClientProvider client={queryClient}>
          {element}
    </QueryClientProvider>
  );
}