import AlertMessage from 'src/components/alert-message/alert-message';
import { formatErrorMessage } from 'src/utils/format-error-message';

type ErrorType = string | { message?: string };

interface ErrorAlertListProps {
  errors: (ErrorType | null | undefined)[];
}

export default function ErrorAlertList({ errors }: ErrorAlertListProps) {
  return (
    <>
      {errors.filter(Boolean).map((error, index) => (
        <AlertMessage
          key={index}
          severity="error"
          message={
            typeof error === 'string'
              ? formatErrorMessage(error)
              : formatErrorMessage(error?.message) || 'Unknown error'
          }
        />
      ))}
    </>
  );
}
