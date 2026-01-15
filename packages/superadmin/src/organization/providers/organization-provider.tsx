import { ReactNode, useCallback } from 'react';
import { useAuthContext } from 'src/auth/hooks/use-auth-context';
import { useGetOrganizationDetails } from 'src/query/hooks/configuration/organization';
import { OrganizationProvider } from '../context/organization-context';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function OrganizationProviderWrapper({ children }: Props) {
  const { authenticated, loading: authLoading } = useAuthContext();

  // Only fetch organization details if user is authenticated
  // This is non-blocking - failures won't prevent dashboard access
  const {
    data: organizationData,
    error,
    refetch: originalRefetch,
  } = useGetOrganizationDetails(authenticated, 2);

  const organization = organizationData || null;

  // Organization loading should not block the app
  // Only show loading if auth is loading, not if org fetch is loading
  const isOrganizationLoading = authLoading;

  // Enhanced refetch that only works when authenticated
  const refetch = useCallback(() => {
    if (authenticated) {
      return originalRefetch();
    }
    // Return a resolved promise if not authenticated to avoid errors
    return Promise.resolve();
  }, [authenticated, originalRefetch]);

  return (
    <OrganizationProvider
      organization={organization}
      isLoading={isOrganizationLoading}
      error={authenticated ? error : null}
      refetch={refetch}
    >
      {children}
    </OrganizationProvider>
  );
}
