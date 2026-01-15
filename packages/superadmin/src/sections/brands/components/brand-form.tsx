import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useRouter } from 'src/routes/hooks';

import FormProvider, { RHFSwitch, RHFTextField } from 'src/components/hook-form';

import AlertMessage from 'src/components/alert-message';
import ErrorAlertList from 'src/components/alert-message/error-alert-list';
import BackButton from 'src/components/back-button';
import ConfirmDialog from 'src/components/dialogs/confirmation-dialog';
import { useSnackbar } from 'src/components/snackbar';
import { useCreateBrand, useUpdateBrand } from 'src/query/hooks/brand';
import { paths } from 'src/routes/paths';
import { getBrandDefaultValues, brandSchema } from 'src/sections/brands/schema/brand-form-schema';
import { Brand, CreateBrandPayload, UpdateBrandPayload } from 'src/types/brands';
import { formatErrorMessage } from 'src/utils/format-error-message';

// ----------------------------------------------------------------------

type Props = {
  brand?: Brand;
};

export default function BrandForm({ brand }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [updatedBrandData, setUpdatedBrandData] = useState<any>();
  const [isCreateMode, setIsCreateMode] = useState(false);

  const defaultValues = getBrandDefaultValues(brand);

  const methods = useForm({
    resolver: yupResolver(brandSchema),
    defaultValues,
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    watch,
    setValue,
  } = methods;

  const watchedValues = watch();

  const createBrandMutation = useCreateBrand();
  const updateBrandMutation = useUpdateBrand();

  // Handle brand creation
  const handleCreateBrand = async (data: any) => {
    const createData: CreateBrandPayload = {
      info: {
        name: data.info.name,
        description: data.info.description || '',
        allowToSelectPageSize: data.info.allowToSelectPageSize ?? false,
        published: data.info.published ?? false,
        displayOrder: Number(data.info.displayOrder) || 0,
        pageSizeOptions: Array.isArray(data.info.pageSizeOptions)
          ? data.info.pageSizeOptions.map((val: any) => Number(val)).filter((val: number) => !Number.isNaN(val))
          : [],
      },
      meta: {
        keywords: data.meta.keywords || '',
        description: data.meta.description || '',
        title: data.meta.title || '',
        SEFN: data.meta.SEFN || '',
      },
    };

    await createBrandMutation.mutateAsync(createData);
    enqueueSnackbar('Brand created successfully');
    router.push(paths.brands.root);
    methods.reset(getBrandDefaultValues(undefined));
  };

  // Handle brand update
  const handleUpdateBrand = async (data: any) => {
    const updateData: UpdateBrandPayload = {
      info: {
        name: data.info.name,
        description: data.info.description || '',
        allowToSelectPageSize: data.info.allowToSelectPageSize ?? false,
        published: data.info.published ?? false,
        displayOrder: Number(data.info.displayOrder) || 0,
        pageSizeOptions: Array.isArray(data.info.pageSizeOptions)
          ? data.info.pageSizeOptions.map((val: any) => Number(val)).filter((val: number) => !Number.isNaN(val))
          : [],
      },
      meta: {
        keywords: data.meta.keywords || '',
        description: data.meta.description || '',
        title: data.meta.title || '',
        SEFN: data.meta.SEFN || '',
      },
    };

    if (brand?.id) {
      await updateBrandMutation.mutateAsync({
        id: brand.id,
        data: updateData,
      });
      enqueueSnackbar('Brand updated successfully');
      router.push(paths.brands.root);
    }
  };

  // Main submit handler
  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMsg(null);
      if (brand && brand.id) {
        setIsCreateMode(false);
        setShowConfirmationModal(true);
        setUpdatedBrandData(data);
      } else {
        setIsCreateMode(true);
        setShowConfirmationModal(true);
        setUpdatedBrandData(data);
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in brand form submission:', error);
    }
  });

  const handleConfirm = async () => {
    try {
      if (updatedBrandData) {
        if (isCreateMode) {
          await handleCreateBrand(updatedBrandData);
        } else {
          await handleUpdateBrand(updatedBrandData);
        }
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in brand form submission:', error);
    } finally {
      setShowConfirmationModal(false);
      setUpdatedBrandData(undefined);
    }
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
    setUpdatedBrandData(undefined);
  };

  // Handle page size options array
  const handleAddPageSizeOption = () => {
    const currentOptions = watchedValues.info?.pageSizeOptions || [];
    setValue('info.pageSizeOptions', [...currentOptions, 0], { shouldValidate: true });
  };

  const handleRemovePageSizeOption = (indexToRemove: number) => {
    const currentOptions = watchedValues.info?.pageSizeOptions || [];
    const validOptions = currentOptions.filter((opt): opt is number => typeof opt === 'number');
    const filteredOptions = validOptions.filter((_, index) => index !== indexToRemove);
    setValue('info.pageSizeOptions', filteredOptions, { shouldValidate: true });
  };

  const handlePageSizeOptionChange = (index: number, value: string) => {
    const currentOptions = watchedValues.info?.pageSizeOptions || [];
    const validOptions = currentOptions.filter((opt): opt is number => typeof opt === 'number');
    const updatedOptions = validOptions.map((opt: number, i: number) => (i === index ? Number(value) || 0 : opt));
    setValue('info.pageSizeOptions', updatedOptions, { shouldValidate: true });
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Grid xs={12}>
            <CustomBreadcrumbs
              heading={brand ? 'Edit Brand' : 'Create Brand'}
              links={[
                { name: 'Dashboard', href: paths.dashboard.root },
                { name: 'Brand List', href: paths.brands.root },
                { name: brand ? 'Edit Brand' : 'Create Brand', href: '#' },
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
              <Stack direction="row" spacing={2}>
                <RHFSwitch name="info.published" label="Published" />
                <RHFSwitch name="info.allowToSelectPageSize" label="Allow to Select Page Size" />
              </Stack>
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
                <RHFTextField isRequired name="info.name" label="Brand Name" />
                <RHFTextField isRequired name="info.displayOrder" label="Display Order" type="number" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RHFTextField
                  isRequired
                  name="info.description"
                  label="Description"
                  multiline
                  rows={4}
                />
              </Box>
            </Box>

            {/* Page Size Options */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ typography: 'h6' }}>Page Size Options</Box>
                <Button variant="outlined" startIcon={<AddIcon />} onClick={handleAddPageSizeOption} size="small">
                  Add Option
                </Button>
              </Box>
              <Stack spacing={2}>
                {(watchedValues.info?.pageSizeOptions || [])
                  .filter((option): option is number => typeof option === 'number')
                  .map((option: number, index: number) => (
                    <Box key={index} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                      <TextField
                        fullWidth
                        label={`Option ${index + 1}`}
                        type="number"
                        value={option || ''}
                        onChange={(e) => handlePageSizeOptionChange(index, e.target.value)}
                        placeholder="Enter page size option"
                      />
                      <IconButton color="error" onClick={() => handleRemovePageSizeOption(index)} sx={{ mt: 1 }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                {(!watchedValues.info?.pageSizeOptions || watchedValues.info.pageSizeOptions.length === 0) && (
                  <Box sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    No page size options added. Click &quot;Add Option&quot; to add one.
                  </Box>
                )}
              </Stack>
            </Box>

            {/* Meta Information */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Meta Information</Box>
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
                <RHFTextField isRequired name="meta.title" label="Meta Title" />
                <RHFTextField isRequired name="meta.keywords" label="Keywords" />
                <RHFTextField isRequired name="meta.SEFN" label="SEFN" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RHFTextField isRequired name="meta.description" label="Meta Description" multiline rows={3} />
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
                {brand ? 'Update Brand' : 'Create Brand'}
              </LoadingButton>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <ConfirmDialog
        open={showConfirmationModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        header={isCreateMode ? 'Create Brand' : 'Update Brand'}
        contentText={
          isCreateMode ? 'Are you sure you want to create this brand?' : 'Are you sure you want to update this brand?'
        }
        dialogType={isCreateMode ? 'create' : 'edit'}
        isLoading={isSubmitting}
      />
    </FormProvider>
  );
}
