'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from './ThemeToggle/theme-provider';
export default function Providers({ children }: { children: React.ReactNode }) {
  const client = new QueryClient();
  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
