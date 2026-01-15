import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { useRouter } from 'src/routes/hooks';

import FormProvider, { RHFAutocomplete, RHFSwitch, RHFTextField } from 'src/components/hook-form';

import { useGetCategoryList } from 'src/query/hooks/category';
import { useGetManufacturerList } from 'src/query/hooks/manufacturer';
import { useGetTagList } from 'src/query/hooks/tag';
import { useGetBrandList } from 'src/query/hooks/brand';
import AlertMessage from 'src/components/alert-message';
import ErrorAlertList from 'src/components/alert-message/error-alert-list';
import BackButton from 'src/components/back-button';
import ConfirmDialog from 'src/components/dialogs/confirmation-dialog';
import { useSnackbar } from 'src/components/snackbar';
import { useCreateProduct, useUpdateProduct } from 'src/query/hooks/products';
import { paths } from 'src/routes/paths';
import { getProductDefaultValues, productSchema } from 'src/sections/products/schema/product-form-schema';
import { Brand } from 'src/types/brands';
import { Manufacturer } from 'src/types/manufacturers';
import { Category, CreateProductPayload, Product, UpdateProductPayload } from 'src/types/products';
import { Tag } from 'src/types/tags';
import { formatErrorMessage } from 'src/utils/format-error-message';
import { compareObjects } from 'src/utils/deep-compare-objects';

// ----------------------------------------------------------------------

type Props = {
  product?: Product;
};

// Helper function to flatten categories recursively
const flattenCategories = (categories: Category[]): Category[] => {
  const result: Category[] = [];
  categories.forEach((category) => {
    result.push(category);
    if (category.subCategories && category.subCategories.length > 0) {
      result.push(...flattenCategories(category.subCategories));
    }
  });
  return result;
};

export default function ProductForm({ product }: Props) {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const {
    data: categoryListResponse,
    isPending: isCategoryListPending,
    isFetching: isCategoryListFetching,
    error: categoryListError,
  } = useGetCategoryList();

  const {
    data: manufacturerListResponse,
    isPending: isManufacturerListPending,
    isFetching: isManufacturerListFetching,
    error: manufacturerListError,
  } = useGetManufacturerList();

  const {
    data: tagListResponse,
    isPending: isTagListPending,
    isFetching: isTagListFetching,
    error: tagListError,
  } = useGetTagList();

  const {
    data: brandListResponse,
    isPending: isBrandListPending,
    isFetching: isBrandListFetching,
    error: brandListError,
  } = useGetBrandList();

  const [errorMsg, setErrorMsg] = useState<string | string[] | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [updatedProductData, setUpdatedProductData] = useState<any>();
  const [isCreateMode, setIsCreateMode] = useState(false);

  // Flatten categories for dropdown
  const flattenedCategories = useMemo(() => {
    if (!categoryListResponse?.data?.categories) return [];
    // Convert CategoryFromCategories to Category (products type)
    const convertedCategories: Category[] = categoryListResponse.data.categories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      photo: {
        url: cat.photo.url || '',
        alt: cat.photo.alt,
      },
      published: cat.published,
      displayOrder: cat.displayOrder,
      ancestors: cat.ancestors,
      subCategories: cat.subCategories?.map((subCat) => ({
        id: subCat.id,
        name: subCat.name,
        slug: subCat.slug,
        photo: {
          url: subCat.photo.url || '',
          alt: subCat.photo.alt,
        },
        published: subCat.published,
        displayOrder: subCat.displayOrder,
        ancestors: subCat.ancestors,
      })),
    }));
    return flattenCategories(convertedCategories);
  }, [categoryListResponse]);

  // Get manufacturers list
  const manufacturers = useMemo(() => {
    if (!manufacturerListResponse?.data?.manufacturers) return [];
    return manufacturerListResponse.data.manufacturers;
  }, [manufacturerListResponse]);

  // Get tags list
  const tags = useMemo(() => {
    if (!tagListResponse?.data) return [];
    return tagListResponse.data;
  }, [tagListResponse]);

  // Get brands list
  const brands = useMemo(() => {
    if (!brandListResponse?.data?.brands) return [];
    return brandListResponse.data.brands;
  }, [brandListResponse]);

  const defaultValues = getProductDefaultValues(product);

  const methods = useForm({
    resolver: yupResolver(productSchema),
    defaultValues,
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    setValue,
  } = methods;

  const watchedValues = watch();

  const createProductMutation = useCreateProduct();
  const updateProductMutation = useUpdateProduct();

  // Handle product creation
  const handleCreateProduct = async (data: any) => {
    const createData: CreateProductPayload = {
      info: {
        name: data.info.name,
        shortDescription: data.info.shortDescription || '',
        fullDescription: data.info.fullDescription || '',
        sku: data.info.sku,
        price: Number(data.info.price),
        oldPrice: Number(data.info.oldPrice),
        cost: Number(data.info.cost),
        showOnHomePage: data.info.showOnHomePage ?? false,
        includeInTopMenu: data.info.includeInTopMenu ?? false,
        allowToSelectPageSize: data.info.allowToSelectPageSize ?? false,
        published: data.info.published ?? false,
        displayOrder: Number(data.info.displayOrder) || 0,
        isFeatured: data.info.isFeatured ?? false,
      },
      meta: {
        keywords: Array.isArray(data.meta.keywords) ? data.meta.keywords : [],
        title: data.meta.title || '',
        description: data.meta.description || '',
      },
      tags: Array.isArray(data.tags)
        ? data.tags.map((tag: Tag | string) => (typeof tag === 'string' ? tag : tag.name))
        : [],
      photos: Array.isArray(data.photos)
        ? data.photos.map((photo: any) => ({
          url: photo.url || '',
          id: photo.id || '',
          title: photo.title || '',
          alt: photo.alt || '',
          displayOrder: Number(photo.displayOrder) || 0,
        }))
        : [],
      brands: Array.isArray(data.brands)
        ? data.brands.map((brand: Brand | string) => (typeof brand === 'string' ? brand : brand.info.name))
        : [],
      manufacturer: {
        id: data.manufacturer.id || '',
        name: data.manufacturer.name || '',
      },
      categories: (data.categories || []).map((cat: Category) => ({
        id: cat.id,
        name: cat.name,
      })),
    };

    await createProductMutation.mutateAsync(createData);
    enqueueSnackbar('Product created successfully');
    router.push(paths.products.root);
    methods.reset(getProductDefaultValues(undefined));
  };

  // Function to compare product data and return only changed fields
  const getChangedProductFields = (
    original: Product,
    current: any
  ): UpdateProductPayload => {
    // Create a base object for comparison
    const originalProductData = {
      info: {
        name: original?.info?.name,
        shortDescription: original?.info?.shortDescription || '',
        fullDescription: original?.info?.fullDescription || '',
        sku: original?.info?.sku,
        price: original?.info?.price,
        oldPrice: original?.info?.oldPrice,
        cost: original?.info?.cost,
        showOnHomePage: original?.info?.showOnHomePage ?? false,
        includeInTopMenu: original?.info?.includeInTopMenu ?? false,
        allowToSelectPageSize: original?.info?.allowToSelectPageSize ?? false,
        published: original?.info?.published ?? false,
        displayOrder: original?.info?.displayOrder || 0,
        isFeatured: original?.info?.isFeatured ?? false,
      },
      meta: {
        keywords: original?.meta?.keywords || [],
        title: original?.meta?.title || '',
        description: original?.meta?.description || '',
      },
      tags: original?.tags || [],
      photos: original?.photos || [],
      brands: original?.brands || [],
      manufacturer: {
        id: original?.manufacturer?.id || '',
        name: original?.manufacturer?.name || '',
      },
      categories: original?.categories || [],
    };

    // Create current form data object for comparison
    const currentFormData = {
      info: {
        name: current.info.name,
        shortDescription: current.info.shortDescription || '',
        fullDescription: current.info.fullDescription || '',
        sku: current.info.sku,
        price: Number(current.info.price),
        oldPrice: Number(current.info.oldPrice),
        cost: Number(current.info.cost),
        showOnHomePage: current.info.showOnHomePage ?? false,
        includeInTopMenu: current.info.includeInTopMenu ?? false,
        allowToSelectPageSize: current.info.allowToSelectPageSize ?? false,
        published: current.info.published ?? false,
        displayOrder: Number(current.info.displayOrder) || 0,
        isFeatured: current.info.isFeatured ?? false,
      },
      meta: {
        keywords: Array.isArray(current.meta.keywords) ? current.meta.keywords : [],
        title: current.meta.title || '',
        description: current.meta.description || '',
      },
      tags: Array.isArray(current.tags)
        ? current.tags.map((tag: Tag | string) => (typeof tag === 'string' ? tag : tag.name))
        : [],
      photos: Array.isArray(current.photos)
        ? current.photos.map((photo: any) => ({
          url: photo.url || '',
          id: photo.id || '',
          title: photo.title || '',
          alt: photo.alt || '',
          displayOrder: Number(photo.displayOrder) || 0,
        }))
        : [],
      brands: Array.isArray(current.brands)
        ? current.brands.map((brand: Brand | string) => (typeof brand === 'string' ? brand : brand.info.name))
        : [],
      manufacturer: {
        id: current.manufacturer.id || '',
        name: current.manufacturer.name || '',
      },
      categories: (current.categories || []).map((cat: Category) => ({
        id: cat.id,
        name: cat.name,
      })),
    };

    // Get only the changed fields using deep comparison
    const changedFields = compareObjects(originalProductData, currentFormData);

    // Start with an empty update payload
    const updateData: UpdateProductPayload = {} as UpdateProductPayload;

    // Only include fields that have actually changed
    Object.keys(changedFields).forEach((key) => {
      // Only add the property if it's a valid key for UpdateProductPayload
      const typedKey = key as keyof typeof currentFormData;
      if (typedKey in currentFormData) {
        // Type assertion is safe here as we've checked the key exists
        (updateData as any)[typedKey] = currentFormData[typedKey];
      }
    });

    return updateData;
  };

  // Handle product update
  const handleUpdateProduct = async (data: any) => {
    if (!product) return;

    // Get the changed fields by comparing product with form data
    const updateData = getChangedProductFields(product, data);

    if (product?.id) {
      await updateProductMutation.mutateAsync({
        id: product.id,
        data: updateData,
      });
      enqueueSnackbar('Product updated successfully');
      router.push(paths.products.root);
    }
  };

  // Main submit handler
  const onSubmit = handleSubmit(async (data) => {
    try {
      setErrorMsg(null);
      if (product && product.id) {
        setIsCreateMode(false);
        setShowConfirmationModal(true);
        setUpdatedProductData(data);
      } else {
        setIsCreateMode(true);
        setShowConfirmationModal(true);
        setUpdatedProductData(data);
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in product form submission:', error);
    }
  });

  const handleConfirm = async () => {
    try {
      if (updatedProductData) {
        if (isCreateMode) {
          await handleCreateProduct(updatedProductData);
        } else {
          await handleUpdateProduct(updatedProductData);
        }
      }
    } catch (error: any) {
      const errorMessage = formatErrorMessage(error?.message);
      setErrorMsg(errorMessage);
      console.error('Error in product form submission:', error);
    } finally {
      setShowConfirmationModal(false);
      setUpdatedProductData(undefined);
    }
  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
    setUpdatedProductData(undefined);
  };

  // Handle photos array
  const handleAddPhoto = () => {
    const currentPhotos = watchedValues.photos || [];
    setValue(
      'photos',
      [
        ...currentPhotos,
        {
          url: '',
          id: '',
          title: '',
          alt: '',
          displayOrder: currentPhotos.length,
        },
      ],
      { shouldValidate: true }
    );
  };

  const handleRemovePhoto = (index: number) => {
    const currentPhotos = watchedValues.photos || [];
    setValue(
      'photos',
      currentPhotos.filter((_, i) => i !== index),
      { shouldValidate: true }
    );
  };

  const handlePhotoChange = (index: number, field: 'url' | 'title' | 'displayOrder' | 'alt' | 'id', value: string | number) => {
    const currentPhotos = watchedValues.photos || [];
    const updatedPhotos = [...currentPhotos];
    updatedPhotos[index] = {
      ...updatedPhotos[index],
      [field]: value,
    };
    setValue('photos', updatedPhotos, { shouldValidate: true });
  };

  // Handle array fields (tags, brands, keywords)
  const handleArrayFieldChange = (fieldName: 'tags' | 'brands' | 'meta.keywords', value: string) => {
    if (!value.trim()) return;

    let currentArray: string[] = [];
    if (fieldName === 'meta.keywords') {
      currentArray = (watchedValues.meta?.keywords || []).filter((item): item is string => item !== undefined);
    } else {
      currentArray = ((watchedValues[fieldName] as string[]) || []).filter((item): item is string => item !== undefined);
    }

    if (!currentArray.includes(value.trim())) {
      if (fieldName === 'meta.keywords') {
        setValue('meta.keywords' as any, [...currentArray, value.trim()], { shouldValidate: true });
      } else {
        setValue(fieldName as any, [...currentArray, value.trim()], { shouldValidate: true });
      }
    }
  };

  const handleRemoveArrayItem = (fieldName: 'tags' | 'brands' | 'meta.keywords', itemToRemove: string) => {
    let currentArray: string[] = [];
    if (fieldName === 'meta.keywords') {
      currentArray = (watchedValues.meta?.keywords || []).filter((item): item is string => item !== undefined);
    } else {
      currentArray = ((watchedValues[fieldName] as string[]) || []).filter((item): item is string => item !== undefined);
    }

    const filteredArray = currentArray.filter((item: string) => item !== itemToRemove);

    if (fieldName === 'meta.keywords') {
      setValue('meta.keywords' as any, filteredArray, { shouldValidate: true });
    } else {
      setValue(fieldName as any, filteredArray, { shouldValidate: true });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Grid xs={12}>
            <CustomBreadcrumbs
              heading={product ? 'Edit Product' : 'Create Product'}
              links={[
                { name: 'Dashboard', href: paths.dashboard.root },
                { name: 'Product List', href: paths.products.root },
                { name: product ? 'Edit Product' : 'Create Product', href: '#' },
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
                <RHFSwitch name="info.isFeatured" label="Featured" />
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

            {categoryListError && (
              <AlertMessage severity="error" message={formatErrorMessage(categoryListError)} />
            )}

            {manufacturerListError && (
              <AlertMessage severity="error" message={formatErrorMessage(manufacturerListError)} />
            )}

            {tagListError && (
              <AlertMessage severity="error" message={formatErrorMessage(tagListError)} />
            )}

            {brandListError && (
              <AlertMessage severity="error" message={formatErrorMessage(brandListError)} />
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
                <RHFTextField isRequired name="info.name" label="Product Name" />
                <RHFTextField isRequired name="info.sku" label="SKU" />
              </Box>
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
                <RHFTextField
                  name="info.shortDescription"
                  label="Short Description"
                  multiline
                  rows={3}
                />
                <RHFTextField name="info.fullDescription" label="Full Description" multiline rows={3} />
              </Box>
            </Box>

            {/* Pricing */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Pricing</Box>
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
                <RHFTextField
                  isRequired
                  name="info.price"
                  label="Price"
                  type="number"
                  format="amount"
                />
                <RHFTextField
                  isRequired
                  name="info.oldPrice"
                  label="Old Price"
                  type="number"
                  format="amount"
                />
                <RHFTextField
                  isRequired
                  name="info.cost"
                  label="Cost"
                  type="number"
                  format="amount"
                />
              </Box>
            </Box>

            {/* Categories and Manufacturer */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Categories & Manufacturer</Box>
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
                <RHFAutocomplete<Category, true, false, false>
                  name="categories"
                  label="Categories"
                  isRequired
                  multiple
                  disabled={isCategoryListPending || isCategoryListFetching}
                  options={flattenedCategories}
                  getOptionLabel={(option: Category | string) => {
                    if (typeof option === 'string') return option;
                    return option.name;
                  }}
                  loading={isCategoryListPending || isCategoryListFetching}
                  value={
                    (watchedValues.categories || [])
                      .map((cat: { id: string; name: string }) =>
                        flattenedCategories.find((c) => c.id === cat.id)
                      )
                      .filter((cat: Category | undefined): cat is Category => cat !== undefined) || []
                  }
                  onChange={(_, newValue) => {
                    const categoryArray = Array.isArray(newValue) ? newValue : [];
                    setValue(
                      'categories',
                      categoryArray.map((c: Category) => ({ id: c.id, name: c.name })),
                      { shouldValidate: true }
                    );
                  }}
                  isOptionEqualToValue={(option, value) => {
                    if (typeof option === 'string' || typeof value === 'string') return false;
                    return option.id === value.id;
                  }}
                  filterOptions={(options, { inputValue }) =>
                    options.filter((option) =>
                      (typeof option === 'string' ? option : option.name)
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                  }
                />
                <RHFAutocomplete<Manufacturer, false, false, false>
                  name="manufacturer"
                  label="Manufacturer"
                  isRequired
                  disabled={isManufacturerListPending || isManufacturerListFetching}
                  options={manufacturers}
                  getOptionLabel={(option: Manufacturer | string) => {
                    if (typeof option === 'string') return option;
                    return option.name;
                  }}
                  loading={isManufacturerListPending || isManufacturerListFetching}
                  value={
                    watchedValues.manufacturer?.id
                      ? manufacturers.find((m) => m.id === watchedValues.manufacturer.id) || null
                      : null
                  }
                  onChange={(_, newValue) => {
                    if (newValue && typeof newValue !== 'string') {
                      setValue(
                        'manufacturer',
                        { id: newValue.id, name: newValue.name },
                        { shouldValidate: true }
                      );
                    } else {
                      setValue('manufacturer', { id: '', name: '' }, { shouldValidate: true });
                    }
                  }}
                  isOptionEqualToValue={(option, value) => {
                    if (typeof option === 'string' || typeof value === 'string') return false;
                    return option.id === value.id;
                  }}
                  filterOptions={(options, { inputValue }) =>
                    options.filter((option) =>
                      (typeof option === 'string' ? option : option.name)
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                  }
                />
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
                <RHFTextField name="meta.title" label="Meta Title" />
                <Box>
                  <TextField
                    fullWidth
                    label="Keywords"
                    placeholder="Enter keyword and press Enter"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        const input = e.target as HTMLInputElement;
                        handleArrayFieldChange('meta.keywords', input.value);
                        input.value = '';
                      }
                    }}
                  />
                  <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                    {(watchedValues.meta?.keywords || [])
                      .filter((keyword): keyword is string => keyword !== undefined)
                      .map((keyword: string) => (
                        <Chip
                          key={keyword}
                          label={keyword}
                          onDelete={() => handleRemoveArrayItem('meta.keywords', keyword)}
                          size="small"
                        />
                      ))}
                  </Stack>
                </Box>
                <RHFTextField name="meta.description" label="Meta Description" multiline rows={2} />
              </Box>
            </Box>

            {/* Tags and Brands */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Tags & Brands</Box>
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
                <RHFAutocomplete<Tag, true, false, false>
                  name="tags"
                  label="Tags"
                  multiple
                  disabled={isTagListPending || isTagListFetching}
                  options={tags}
                  getOptionLabel={(option: Tag | string) => {
                    if (typeof option === 'string') return option;
                    return option.name;
                  }}
                  loading={isTagListPending || isTagListFetching}
                  value={
                    (watchedValues.tags || [])
                      .filter((tagName): tagName is string => tagName !== undefined)
                      .map((tagName: string) => tags.find((t) => t.name === tagName))
                      .filter((tag): tag is Tag => tag !== undefined) || []
                  }
                  onChange={(_, newValue) => {
                    const tagArray = Array.isArray(newValue) ? newValue : [];
                    setValue(
                      'tags',
                      tagArray.map((t: Tag) => t.name),
                      { shouldValidate: true }
                    );
                  }}
                  isOptionEqualToValue={(option, value) => {
                    if (typeof option === 'string' || typeof value === 'string') return false;
                    return option.id === value.id;
                  }}
                  filterOptions={(options, { inputValue }) =>
                    options.filter((option) =>
                      (typeof option === 'string' ? option : option.name)
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                  }
                />
                <RHFAutocomplete<Brand, true, false, false>
                  name="brands"
                  label="Brands"
                  multiple
                  disabled={isBrandListPending || isBrandListFetching}
                  options={brands}
                  getOptionLabel={(option: Brand | string) => {
                    if (typeof option === 'string') return option;
                    return option.info.name;
                  }}
                  loading={isBrandListPending || isBrandListFetching}
                  value={
                    (watchedValues.brands || [])
                      .filter((brandName): brandName is string => brandName !== undefined)
                      .map((brandName: string) => brands.find((b) => b.info.name === brandName))
                      .filter((brand): brand is Brand => brand !== undefined) || []
                  }
                  onChange={(_, newValue) => {
                    const brandArray = Array.isArray(newValue) ? newValue : [];
                    setValue(
                      'brands',
                      brandArray.map((b: Brand) => b.info.name),
                      { shouldValidate: true }
                    );
                  }}
                  isOptionEqualToValue={(option, value) => {
                    if (typeof option === 'string' || typeof value === 'string') return false;
                    return option.id === value.id;
                  }}
                  filterOptions={(options, { inputValue }) =>
                    options.filter((option) =>
                      (typeof option === 'string' ? option : option.info.name)
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    )
                  }
                />
              </Box>
            </Box>

            {/* Photos */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ typography: 'h6' }}>Photos</Box>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={handleAddPhoto}
                  size="small"
                >
                  Add Photo
                </Button>
              </Box>
              <Stack spacing={2}>
                {(watchedValues.photos || []).map((photo: any, index: number) => (

                  <Box
                    display="grid"
                    gridTemplateColumns={{
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(3, 1fr)',
                    }}
                    gap={2}
                  >
                    <TextField
                      fullWidth
                      label="Photo URL"
                      value={photo?.url || ''}
                      onChange={(e) => handlePhotoChange(index, 'url', e.target.value)}
                      placeholder="Enter photo URL"
                    />
                    <TextField
                      fullWidth
                      label="Title"
                      value={photo?.title || ''}
                      onChange={(e) => handlePhotoChange(index, 'title', e.target.value)}
                      placeholder="Enter photo title"
                    />
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <TextField
                        fullWidth
                        label="Display Order"
                        type="number"
                        value={photo?.displayOrder ?? index}
                        onChange={(e) => handlePhotoChange(index, 'displayOrder', Number(e.target.value))}
                        placeholder="Display order"
                      />
                      <IconButton
                        color="error"
                        onClick={() => handleRemovePhoto(index)}
                        sx={{ mt: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Display Options */}
            <Box sx={{ mb: 4 }}>
              <Box sx={{ typography: 'h6', mb: 2 }}>Display Options</Box>
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
                <RHFTextField
                  name="info.displayOrder"
                  label="Display Order"
                  type="number"
                />
                <RHFSwitch name="info.showOnHomePage" label="Show on Home Page" />
                <RHFSwitch name="info.includeInTopMenu" label="Include in Top Menu" />
                <RHFSwitch name="info.allowToSelectPageSize" label="Allow to Select Page Size" />
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
                {product ? 'Update Product' : 'Create Product'}
              </LoadingButton>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <ConfirmDialog
        open={showConfirmationModal}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        header={isCreateMode ? 'Create Product' : 'Update Product'}
        contentText={
          isCreateMode
            ? 'Are you sure you want to create this product?'
            : 'Are you sure you want to update this product?'
        }
        dialogType={isCreateMode ? 'create' : 'edit'}
        isLoading={isSubmitting}
      />
    </FormProvider >
  );
}
