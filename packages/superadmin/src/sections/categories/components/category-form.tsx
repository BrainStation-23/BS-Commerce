import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
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
import { useCreateCategory } from 'src/query/hooks/category';
import { paths } from 'src/routes/paths';
import { getCategoryDefaultValues, categorySchema } from 'src/sections/categories/schema/category-form-schema';
import { Category, CreateCategoryPayload } from 'src/types/categories';
import { formatErrorMessage } from 'src/utils/format-error-message';

// ----------------------------------------------------------------------

type Props = {
  category?: Category;
};

export default function CategoryForm({ category }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [updatedCategoryData, setUpdatedCategoryData] = useState<any>();
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [keywordInput, setKeywordInput] = useState('');

  const defaultValues = getCategoryDefaultValues(category);

  const methods = useForm({
    resolver: yupResolver(categorySchema),
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

  const createCategoryMutation = useCreateCategory();

  // Handle category creation
  const handleCreateCategory = async (data: any) => {
    const createData: CreateCategoryPayload = {
      name: data.name,
      parentSlug: data.parentSlug || undefined,
      photo: {
        url: data.photo.url || '',
        alt: data.photo.alt || '',
      },
      description: data.description || '',
      showOnHomePage: data.showOnHomePage ?? false,
      includeInTopMenu: data.includeInTopMenu ?? false,
      allowToSelectPageSize: data.allowToSelectPageSize ?? false,
      published: data.published ?? false,
      displayOrder: Number(data.displayOrder) || 0,
      meta: {
        keywords: Array.isArray(data.meta.keywords) ? data.meta.keywords : [],
        description: data.meta.description || '',
        title: data.meta.title || '',
        SEFN: data.meta.SEFN || '',
      },
    };

    await createCategoryMutation.mutateAsync(createData);
    enqueueSnackbar('Category created successfully');
    router.push(paths.categories.root);
    methods.reset(getCategoryDefaultValues(undefined));
  };

  // Main submit handler
  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMsg(null);
      setIsCreateMode(true);
      setShowConfirmationModal(true);
      setUpdatedCategoryData(data);
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in category form submission:', error);
    }
  });

  const handleConfirm = async () => {
    try {
      if (updatedCategoryData) {
        await handleCreateCategory(updatedCategoryData);
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in category form submission:', error);
    } finally {
      setShowConfirmationModal(false);
      setUpdatedCategoryData(undefined);
    }
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
    setUpdatedCategoryData(undefined);
  };

  // Handle keywords array
  const handleAddKeyword = () => {
    if (!keywordInput.trim()) return;
    const currentKeywords = watchedValues.meta?.keywords || [];
    if (!currentKeywords.includes(keywordInput.trim())) {
      setValue('meta.keywords', [...currentKeywords, keywordInput.trim()], { shouldValidate: true });
      setKeywordInput('');
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    const currentKeywords = watchedValues.meta?.keywords || [];
    const validKeywords = currentKeywords.filter((keyword): keyword is string => typeof keyword === 'string');
    setValue(
      'meta.keywords',
      validKeywords.filter((keyword: string) => keyword !== keywordToRemove),
      { shouldValidate: true }
    );
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Grid xs={12}>
            <CustomBreadcrumbs
              heading={category ? 'Edit Category' : 'Create Category'}
              links={[
                { name: 'Dashboard', href: paths.dashboard.root },
                { name: 'Category List', href: paths.categories.root },
                { name: category ? 'Edit Category' : 'Create Category', href: '#' },
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
                <RHFSwitch name="published" label="Published" />
                <RHFSwitch name="showOnHomePage" label="Show on Home Page" />
                <RHFSwitch name="includeInTopMenu" label="Include in Top Menu" />
                <RHFSwitch name="allowToSelectPageSize" label="Allow to Select Page Size" />
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
                <RHFTextField isRequired name="name" label="Category Name" />
                <RHFTextField name="parentSlug" label="Parent Slug" />
                <RHFTextField isRequired name="displayOrder" label="Display Order" type="number" />
              </Box>
              <Box sx={{ mb: 3 }}>
                <RHFTextField isRequired name="description" label="Description" multiline rows={4} />
              </Box>
            </Box>

            {/* Photo */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Photo</Box>
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
                <RHFTextField isRequired name="photo.url" label="Photo URL" />
                <RHFTextField isRequired name="photo.alt" label="Photo Alt" />
              </Box>
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
                <Box>
                  <TextField
                    fullWidth
                    label="Keywords"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddKeyword();
                      }
                    }}
                    placeholder="Enter keyword and press Enter"
                  />
                  <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                    {(watchedValues.meta?.keywords || [])
                      .filter((keyword): keyword is string => typeof keyword === 'string')
                      .map((keyword: string) => (
                        <Chip
                          key={keyword}
                          label={keyword}
                          onDelete={() => handleRemoveKeyword(keyword)}
                          size="small"
                        />
                      ))}
                  </Stack>
                </Box>
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
                {category ? 'Update Category' : 'Create Category'}
              </LoadingButton>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <ConfirmDialog
        open={showConfirmationModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        header={isCreateMode ? 'Create Category' : 'Update Category'}
        contentText={
          isCreateMode ? 'Are you sure you want to create this category?' : 'Are you sure you want to update this category?'
        }
        dialogType={isCreateMode ? 'create' : 'edit'}
        isLoading={isSubmitting}
      />
    </FormProvider>
  );
}
