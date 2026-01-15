import { createContext, ReactNode, useContext, useMemo } from 'react';

// ----------------------------------------------------------------------

// Inline type
interface OrganizationDetails {
  id: string;
  name: string;
  created_at?: string;
  updated_at?: string;
  [key: string]: any;
}

type OrganizationContextProps = {
  organization: OrganizationDetails | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
  isInitialized: boolean;
  hasError: boolean;
};

const OrganizationContext = createContext<OrganizationContextProps | undefined>(undefined);

// ----------------------------------------------------------------------

type OrganizationProviderProps = {
  children: ReactNode;
  organization: OrganizationDetails | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export function OrganizationProvider({
  children,
  organization,
  isLoading,
  error,
  refetch,
}: OrganizationProviderProps) {
  const value = useMemo(() => {
    const isInitialized = !isLoading && (!!organization || !!error);
    const hasError = !!error;

    return {
      organization,
      isLoading,
      error,
      refetch,
      isInitialized,
      hasError,
    };
  }, [organization, isLoading, error, refetch]);

  return <OrganizationContext.Provider value={value}>{children}</OrganizationContext.Provider>;
}

export const useOrganizationContext = () => {
  const context = useContext(OrganizationContext);

  if (!context) throw new Error('useOrganizationContext must be used inside OrganizationProvider');

  return context;
};
