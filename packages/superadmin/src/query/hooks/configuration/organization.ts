import { useQuery } from '@tanstack/react-query';

export const useGetOrganizationDetails = (enabled: boolean = false, retry: number = 0) =>
  useQuery({
    queryKey: ['organization-details'],
    queryFn: async () => ({
      id: '',
      name: '',
    }),
    enabled,
    retry,
  });
