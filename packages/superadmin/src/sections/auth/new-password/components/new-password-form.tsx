import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AlertMessage from 'src/components/alert-message';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { useSetNewPassword } from 'src/query/hooks/auth/forgot-password';
import { usePathname, useRouter } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';
import {
  NewPasswordSchema,
  getNewPasswordDefaultValues,
  type NewPasswordFormValues,
} from 'src/sections/auth/new-password/schema/index';
import { formatErrorMessage } from 'src/utils/format-error-message';

export default function NewPasswordForm() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);

  const setNewPasswordMutation = useSetNewPassword();

  const pathname = usePathname();
  const urlParts: string[] = pathname.split('/');
  const token: string = urlParts[urlParts!.length! - 1];

  const password = useBoolean();

  const defaultValues = getNewPasswordDefaultValues();

  const methods = useForm<NewPasswordFormValues>({
    resolver: yupResolver(NewPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: NewPasswordFormValues) => {
    try {
      setErrorMsg(null);
      const response = await setNewPasswordMutation.mutateAsync({
        token,
        password: data.password,
      });
      enqueueSnackbar(response.message);
      router.push(paths.auth.login);
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error.message);
      setErrorMsg(errorMessage);
      console.error('Error in new password submission:', error);
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <>
      {!!errorMsg && <AlertMessage severity="error" message={errorMsg} />}

      <FormProvider methods={methods} onSubmit={handleFormSubmit}>
        <Stack spacing={3} alignItems="center">
          <RHFTextField
            name="password"
            label="Password"
            type={password.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <RHFTextField
            name="confirmPassword"
            label="Confirm New Password"
            type={password.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting || setNewPasswordMutation.isPending}
            disabled={isSubmitting || setNewPasswordMutation.isPending}
          >
            Update Password
          </LoadingButton>
        </Stack>
      </FormProvider>
    </>
  );
}
