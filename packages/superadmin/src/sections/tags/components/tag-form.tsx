import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useRouter } from 'src/routes/hooks';

import FormProvider, { RHFSwitch, RHFTextField } from 'src/components/hook-form';

import AlertMessage from 'src/components/alert-message';
import ErrorAlertList from 'src/components/alert-message/error-alert-list';
import BackButton from 'src/components/back-button';
import ConfirmDialog from 'src/components/dialogs/confirmation-dialog';
import { useSnackbar } from 'src/components/snackbar';
import { useCreateTag, useUpdateTag } from 'src/query/hooks/tag';
import { paths } from 'src/routes/paths';
import { getTagDefaultValues, tagSchema } from 'src/sections/tags/schema/tag-form-schema';
import { CreateTagPayload, Tag, UpdateTagPayload } from 'src/types/tags';
import { formatErrorMessage } from 'src/utils/format-error-message';

// ----------------------------------------------------------------------

type Props = {
  tag?: Tag;
};

export default function TagForm({ tag }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [updatedTagData, setUpdatedTagData] = useState<any>();
  const [isCreateMode, setIsCreateMode] = useState(false);

  const defaultValues = getTagDefaultValues(tag);

  const methods = useForm({
    resolver: yupResolver(tagSchema),
    defaultValues,
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const createTagMutation = useCreateTag();
  const updateTagMutation = useUpdateTag();

  // Handle tag creation
  const handleCreateTag = async (data: any) => {
    const createData: CreateTagPayload = {
      name: data.name,
      isHomePageProductsTag: data.isHomePageProductsTag ?? false,
    };

    await createTagMutation.mutateAsync(createData);
    enqueueSnackbar('Tag created successfully');
    router.push(paths.tags.root);
    methods.reset(getTagDefaultValues(undefined));
  };

  // Handle tag update
  const handleUpdateTag = async (data: any) => {
    const updateData: UpdateTagPayload = {
      name: data.name,
      isHomePageProductsTag: data.isHomePageProductsTag ?? false,
    };

    if (tag?.id) {
      await updateTagMutation.mutateAsync({
        id: tag.id,
        data: updateData,
      });
      enqueueSnackbar('Tag updated successfully');
      router.push(paths.tags.root);
    }
  };

  // Main submit handler
  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMsg(null);
      if (tag && tag.id) {
        setIsCreateMode(false);
        setShowConfirmationModal(true);
        setUpdatedTagData(data);
      } else {
        setIsCreateMode(true);
        setShowConfirmationModal(true);
        setUpdatedTagData(data);
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in tag form submission:', error);
    }
  });

  const handleConfirm = async () => {
    try {
      if (updatedTagData) {
        if (isCreateMode) {
          await handleCreateTag(updatedTagData);
        } else {
          await handleUpdateTag(updatedTagData);
        }
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in tag form submission:', error);
    } finally {
      setShowConfirmationModal(false);
      setUpdatedTagData(undefined);
    }
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
    setUpdatedTagData(undefined);
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Grid xs={12}>
            <CustomBreadcrumbs
              heading={tag ? 'Edit Tag' : 'Create Tag'}
              links={[
                { name: 'Dashboard', href: paths.dashboard.root },
                { name: 'Tag List', href: paths.tags.root },
                { name: tag ? 'Edit Tag' : 'Create Tag', href: '#' },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
              convertToTitleCase={false}
            />
          </Grid>
          <Card sx={{ p: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <BackButton />
              <RHFSwitch name="isHomePageProductsTag" label="Home Page Products Tag" />
            </Box>

            {!!errorMsg && (
              <Box sx={{ mb: 3 }}>
                {Array.isArray(errorMsg) ? (
                  <ErrorAlertList errors={errorMsg} />
                ) : (
                  <AlertMessage severity="error" message={errorMsg} />
                )}
              </Box>
            )}

            {/* Basic Information */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Basic Information</Box>
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                }}
                sx={{ mb: 3 }}
              >
                <RHFTextField isRequired name="name" label="Tag Name" />
              </Box>
            </Box>

            {/* Submit Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                {tag ? 'Update Tag' : 'Create Tag'}
              </LoadingButton>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <ConfirmDialog
        open={showConfirmationModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        header={isCreateMode ? 'Create Tag' : 'Update Tag'}
        contentText={
          isCreateMode ? 'Are you sure you want to create this tag?' : 'Are you sure you want to update this tag?'
        }
        dialogType={isCreateMode ? 'create' : 'edit'}
        isLoading={isSubmitting}
      />
    </FormProvider>
  );
}
