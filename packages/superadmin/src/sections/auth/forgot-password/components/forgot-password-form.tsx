import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AlertMessage from 'src/components/alert-message';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useSendForgotPasswordEmail } from 'src/query/hooks/auth/forgot-password';
import {
  ForgotPasswordSchema,
  getForgotPasswordDefaultValues,
  type ForgotPasswordFormValues,
} from 'src/sections/auth/forgot-password/schema/index';
import { formatErrorMessage } from 'src/utils/format-error-message';

export default function ForgotPasswordForm() {
  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | string[] | null>(null);

  const sendForgotPasswordEmailMutation = useSendForgotPasswordEmail();

  const defaultValues = getForgotPasswordDefaultValues();

  const methods = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;
  const onSubmit = async (data: ForgotPasswordFormValues) => {
    try {
      setErrorMsg(null);
      setSuccessMsg(null);

      const response = await sendForgotPasswordEmailMutation.mutateAsync({ email: data.email });
      setSuccessMsg(response.message);
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error.message);
      setErrorMsg(errorMessage);
      console.error('Error in forgot password submission:', error);
    }
  };

  const handleFormSubmit = handleSubmit(onSubmit);

  return (
    <>
      {!!errorMsg && <AlertMessage severity="error" message={errorMsg} />}
      {!!successMsg && <AlertMessage severity="success" message={successMsg} />}
      <FormProvider methods={methods} onSubmit={handleFormSubmit}>
        <Stack spacing={3} alignItems="center">
          <RHFTextField name="email" label="Email address" />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting || sendForgotPasswordEmailMutation.isPending}
            disabled={isSubmitting || sendForgotPasswordEmailMutation.isPending}
          >
            Send Request
          </LoadingButton>
        </Stack>
      </FormProvider>
    </>
  );
}
