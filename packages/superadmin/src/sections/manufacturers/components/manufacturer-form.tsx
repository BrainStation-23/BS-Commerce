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
import { useCreateManufacturer, useUpdateManufacturer } from 'src/query/hooks/manufacturer';
import { paths } from 'src/routes/paths';
import { getManufacturerDefaultValues, manufacturerSchema } from 'src/sections/manufacturers/schema/manufacturer-form-schema';
import { CreateManufacturerPayload, Manufacturer, UpdateManufacturerPayload } from 'src/types/manufacturers';
import { formatErrorMessage } from 'src/utils/format-error-message';

// ----------------------------------------------------------------------

type Props = {
  manufacturer?: Manufacturer;
};

export default function ManufacturerForm({ manufacturer }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [updatedManufacturerData, setUpdatedManufacturerData] = useState<any>();
  const [isCreateMode, setIsCreateMode] = useState(false);

  const defaultValues = getManufacturerDefaultValues(manufacturer);

  const methods = useForm({
    resolver: yupResolver(manufacturerSchema),
    defaultValues,
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const createManufacturerMutation = useCreateManufacturer();
  const updateManufacturerMutation = useUpdateManufacturer();

  // Handle manufacturer creation
  const handleCreateManufacturer = async (data: any) => {
    const createData: CreateManufacturerPayload = {
      name: data.name,
      description: data.description || undefined,
      picture: data.picture || undefined,
      isPublished: data.isPublished ?? false,
      displayOrder: Number(data.displayOrder) || 0,
      seo: {
        metaKeyword: data.seo?.metaKeyword || undefined,
        metaDescription: data.seo?.metaDescription || undefined,
        metaTitle: data.seo?.metaTitle || undefined,
        SEFN: data.seo?.SEFN || undefined,
      },
    };

    await createManufacturerMutation.mutateAsync(createData);
    enqueueSnackbar('Manufacturer created successfully');
    router.push(paths.manufacturers.root);
    methods.reset(getManufacturerDefaultValues(undefined));
  };

  // Handle manufacturer update
  const handleUpdateManufacturer = async (data: any) => {
    const updateData: UpdateManufacturerPayload = {
      name: data.name,
      description: data.description || undefined,
      picture: data.picture || undefined,
      isPublished: data.isPublished ?? false,
      displayOrder: Number(data.displayOrder) || 0,
      seo: {
        metaKeyword: data.seo?.metaKeyword || undefined,
        metaDescription: data.seo?.metaDescription || undefined,
        metaTitle: data.seo?.metaTitle || undefined,
        SEFN: data.seo?.SEFN || undefined,
      },
    };

    if (manufacturer?.id) {
      await updateManufacturerMutation.mutateAsync({
        id: manufacturer.id,
        data: updateData,
      });
      enqueueSnackbar('Manufacturer updated successfully');
      router.push(paths.manufacturers.root);
    }
  };

  // Main submit handler
  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMsg(null);
      if (manufacturer && manufacturer.id) {
        setIsCreateMode(false);
        setShowConfirmationModal(true);
        setUpdatedManufacturerData(data);
      } else {
        setIsCreateMode(true);
        setShowConfirmationModal(true);
        setUpdatedManufacturerData(data);
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in manufacturer form submission:', error);
    }
  });

  const handleConfirm = async () => {
    try {
      if (updatedManufacturerData) {
        if (isCreateMode) {
          await handleCreateManufacturer(updatedManufacturerData);
        } else {
          await handleUpdateManufacturer(updatedManufacturerData);
        }
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in manufacturer form submission:', error);
    } finally {
      setShowConfirmationModal(false);
      setUpdatedManufacturerData(undefined);
    }
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
    setUpdatedManufacturerData(undefined);
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Grid xs={12}>
            <CustomBreadcrumbs
              heading={manufacturer ? 'Edit Manufacturer' : 'Create Manufacturer'}
              links={[
                { name: 'Dashboard', href: paths.dashboard.root },
                { name: 'Manufacturer List', href: paths.manufacturers.root },
                { name: manufacturer ? 'Edit Manufacturer' : 'Create Manufacturer', href: '#' },
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
              <RHFSwitch name="isPublished" label="Published" />
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
                <RHFTextField isRequired name="name" label="Manufacturer Name" />
                <RHFTextField name="displayOrder" label="Display Order" type="number" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RHFTextField name="description" label="Description" multiline rows={4} />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RHFTextField name="picture" label="Picture URL" />
              </Box>
            </Box>

            {/* SEO Information */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>SEO Information</Box>
              <Box
                rowGap={3}
                columnGap={2}
                display="grid"
                gridTemplateColumns={{
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(3, 1fr)',
                }}
                sx={{ mb: 3 }}
              >
                <RHFTextField name="seo.metaTitle" label="Meta Title" />
                <RHFTextField name="seo.metaKeyword" label="Meta Keyword" />
                <RHFTextField name="seo.SEFN" label="SEFN" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RHFTextField name="seo.metaDescription" label="Meta Description" multiline rows={3} />
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
                {manufacturer ? 'Update Manufacturer' : 'Create Manufacturer'}
              </LoadingButton>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <ConfirmDialog
        open={showConfirmationModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        header={isCreateMode ? 'Create Manufacturer' : 'Update Manufacturer'}
        contentText={
          isCreateMode
            ? 'Are you sure you want to create this manufacturer?'
            : 'Are you sure you want to update this manufacturer?'
        }
        dialogType={isCreateMode ? 'create' : 'edit'}
        isLoading={isSubmitting}
      />
    </FormProvider>
  );
}
