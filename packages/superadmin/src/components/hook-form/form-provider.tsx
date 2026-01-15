import { UseFormReturn, FormProvider as Form } from 'react-hook-form';
import { FormEventHandler } from 'react';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

export default function FormProvider({ children, onSubmit, methods }: Props) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
