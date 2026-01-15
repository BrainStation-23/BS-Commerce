'use client';

import { QueryClient } from '@tanstack/react-query';
import { DEFAULT_QUERY_ENABLED } from 'src/config-global';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // Data is immediately considered stale
      gcTime: 0, // No cache - queries are garbage collected immediately when unused
      // refetchInterval: REFETCH_INTERVAL,
      refetchOnWindowFocus: false, // Disable auto-refetch on window focus
      retry: 0,
      enabled: DEFAULT_QUERY_ENABLED,
    },
  },
});

export default queryClient;
