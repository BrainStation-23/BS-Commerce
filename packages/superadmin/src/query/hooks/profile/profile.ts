import { useMutation } from '@tanstack/react-query';
import { changePassword } from 'src/query/api/services/profile/profile';
import { ChangePasswordPayload } from 'src/types/profile';

/**
 * Hook to change user password
 *
 * @returns Mutation result for changing password
 */
export const useChangePassword = () =>
  useMutation({
    mutationFn: (data: ChangePasswordPayload) => changePassword(data),
  });
