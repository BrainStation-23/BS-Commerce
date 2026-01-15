import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext } from 'src/auth/hooks';
import AlertMessage from 'src/components/alert-message';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { useChangePassword } from 'src/query/hooks/profile/profile';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import {
  ChangePasswordSchema,
  getChangePasswordDefaultValues,
  type ChangePasswordFormValues,
} from 'src/sections/profile/change-password/schema/index';
import { formatErrorMessage } from 'src/utils/format-error-message';

export default function ChangePasswordForm() {
  const { enqueueSnackbar } = useSnackbar();
  const { logout } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);

  const changePasswordMutation = useChangePassword();

  const currentPassword = useBoolean();
  const newPassword = useBoolean();
  const confirmPassword = useBoolean();

  const defaultValues = getChangePasswordDefaultValues();

  const methods = useForm<ChangePasswordFormValues>({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = async (data: ChangePasswordFormValues) => {
    try {
      setErrorMsg(null);

      const response = await changePasswordMutation.mutateAsync({
        old_password: data.old_password,
        new_password: data.new_password,
      });

      enqueueSnackbar(response.message);
      reset();
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in change password submission:', error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await logout?.();
      // Redirect will be handled by the RouterLink
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <>
      {!!errorMsg && <AlertMessage severity="error" message={errorMsg} />}
      <FormProvider methods={methods} onSubmit={handleFormSubmit}>
        <Stack spacing={3} alignItems="flex-start" sx={{ width: '100%' }}>
          <RHFTextField
            name="old_password"
            label="Current Password"
            type={currentPassword.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={currentPassword.onToggle} edge="end">
                    <Iconify
                      icon={currentPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Link
            component={RouterLink}
            variant="body2"
            color="inherit"
            underline="always"
            sx={{ alignSelf: 'flex-end' }}
            href={paths.auth.forgotPassword}
            onClick={handleForgotPassword}
          >
            Forgot password?
          </Link>

          <RHFTextField
            name="new_password"
            label="New Password"
            type={newPassword.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={newPassword.onToggle} edge="end">
                    <Iconify
                      icon={newPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="confirmPassword"
            label="Confirm Password"
            type={confirmPassword.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={confirmPassword.onToggle} edge="end">
                    <Iconify
                      icon={confirmPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting || changePasswordMutation.isPending}
            disabled={isSubmitting || changePasswordMutation.isPending}
            color="primary"
          >
            Save Changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </>
  );
}
