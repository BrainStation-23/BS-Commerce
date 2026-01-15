import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Avatar,
  Card,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AlertMessage from 'src/components/alert-message';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Label from 'src/components/label';
import { LoadingScreen } from 'src/components/loading-screen';
import NavigationLink from 'src/components/navigation-link';
import Scrollbar from 'src/components/scrollbar';
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
} from 'src/components/table';
import ProductsTableToolbar from 'src/sections/products/components/products-table-toolbar';
import { useGetProductBySku, useGetProductList, useDeleteProduct } from 'src/query/hooks/products';
import { paths } from 'src/routes/paths';
import { Product, ProductListParams } from 'src/types/products';
import { formatErrorMessage } from 'src/utils/format-error-message';
import { useSnackbar } from 'src/components/snackbar';
import ConfirmDialog from 'src/components/dialogs/confirmation-dialog';

const tableLabels = [
  {
    id: 'image',
    label: 'Image',
    flex: 0.8,
    minWidth: 80,
  },
  {
    id: 'sku',
    label: 'SKU',
    flex: 1,
    minWidth: 120,
  },
  { id: 'name', label: 'Name', flex: 1, minWidth: 200 },
  {
    id: 'price',
    label: 'Price',
    flex: 1,
    minWidth: 100,
  },
  {
    id: 'oldPrice',
    label: 'Old Price',
    flex: 1,
    minWidth: 100,
  },
  {
    id: 'categories',
    label: 'Categories',
    flex: 1,
    minWidth: 150,
  },
  {
    id: 'published',
    label: 'Status',
    flex: 0.8,
    minWidth: 80,
  },
  {
    id: 'actions',
    label: 'Action',
    flex: 0.8,
    minWidth: 100,
    align: 'center' as const,
  },
];

export default function ProductListView() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [searchParams, setSearchParams] = useSearchParams();

  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [filters, setFilters] = useState<ProductListParams>({
    search: searchParams.get('search') || '',
    limit: Number(searchParams.get('limit')) || 10,
  });

  // If there's a search value, use SKU search endpoint
  const isSkuSearch = useMemo(
    () => !!(filters.search && filters.search.trim().length > 0),
    [filters.search]
  );

  // Use SKU search if search looks like SKU, otherwise use regular list
  const {
    error: productListError,
    isFetching: isFetchingProductList,
    data: productListResponse,
  } = useGetProductList(
    isSkuSearch ? undefined : { limit: filters.limit },
    !isSkuSearch // Only fetch list if not doing SKU search
  );

  const {
    error: productBySkuError,
    isFetching: isFetchingProductBySku,
    data: productBySku,
  } = useGetProductBySku(filters.search || '', isSkuSearch && !!filters.search);

  const deleteProductMutation = useDeleteProduct();

  // Combine results: if SKU search, show single product, otherwise show list
  const products: Product[] = useMemo(() => {
    if (isSkuSearch && productBySku) {
      return [productBySku];
    }
    return productListResponse?.data || [];
  }, [isSkuSearch, productBySku, productListResponse]);

  const error = productListError || productBySkuError;
  const isFetching = isFetchingProductList || isFetchingProductBySku;

  const notFound = !isFetching && products.length === 0;

  // Handle filter changes
  const handleFilterChange = useCallback((name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // Handle rows per page change
  const handleRowsPerPageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setFilters((prev) => ({
      ...prev,
      limit: newLimit,
    }));
  }, []);

  // Update URL params when filters change
  useEffect(() => {
    const params: any = {};
    if (filters.search) {
      params.search = filters.search;
    }
    if (filters.limit) {
      params.limit = filters.limit.toString();
    }
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Update filters from URL
  useEffect(() => {
    const search = searchParams.get('search') || '';
    const limit = Number(searchParams.get('limit')) || 10;
    setFilters({ search, limit });
  }, [searchParams]);



  // Handle menu open
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, product: Product) => {
    event.stopPropagation();
    setMenuAnchor(event.currentTarget);
    setSelectedProduct(product);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedProduct(null);
  };

  // Handle edit action
  const handleEdit = () => {
    if (selectedProduct) {
      navigate(paths.products.productEdit(selectedProduct.id));
    }
    handleMenuClose();
  };

  // Handle delete action
  const handleDelete = () => {
    setShowDeleteModal(true);
    setMenuAnchor(null);
  };

  // Handle delete confirmation
  const handleDeleteConfirm = async () => {
    if (selectedProduct) {
      try {
        await deleteProductMutation.mutateAsync(selectedProduct.id);
        enqueueSnackbar('Product deleted successfully', { variant: 'success' });
        setShowDeleteModal(false);
        setSelectedProduct(null);
      } catch (err: any) {
        enqueueSnackbar(formatErrorMessage(err) || 'Failed to delete product', { variant: 'error' });
      }
    }
  };

  // Handle delete cancel
  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setSelectedProduct(null);
  };
  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomBreadcrumbs
          heading="Products"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Product List', href: paths.products.root },
          ]}
          sx={{
            mb: { xs: 3, md: 5 },
          }}
          convertToTitleCase={false}
        />
        <NavigationLink
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          href={paths.products.productCreate}
          sx={{ mb: 3 }}
        >
          Create New
        </NavigationLink>
      </Stack>

      {!!error && <AlertMessage severity="error" message={formatErrorMessage(error)} />}

      <ProductsTableToolbar
        filters={filters}
        onFilters={handleFilterChange}
        searchFields={['name', 'sku']}
        hasSearch
      />

      {isFetching ? (
        <LoadingScreen />
      ) : (
        <Card>
          <Grid xs={12}>
            <TableContainer sx={{ position: 'relative', overflow: 'unset', alignItems: 'center' }}>
              <Scrollbar>
                <Table sx={{ minWidth: 640 }}>
                  <TableHeadCustom headLabel={tableLabels} />
                  <TableBody>
                    {products.map((product: Product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          <Avatar
                            src={product.photos?.[0]?.url}
                            alt={product.photos?.[0]?.alt || product.info.name}
                            variant="rounded"
                            sx={{ width: 56, height: 56 }}
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">{product.info.sku}</Typography>
                        </TableCell>
                        <TableCell>
                          <Stack spacing={0.5}>
                            <Typography variant="body2">{product.info.name}</Typography>
                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                              {product.info.shortDescription}
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">৳{product.info.price}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                            ৳{product.info.oldPrice}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {product.categories.map((cat) => cat.name).join(', ')}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Label variant="soft" color={product.info.published ? 'success' : 'error'}>
                            {product.info.published ? 'Published' : 'Unpublished'}
                          </Label>
                        </TableCell>
                        {/* <TableCell align="center">
                          <NavigationLink
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon />}
                            href={paths.products.productDetails(product.id)}
                          >
                            View
                          </NavigationLink>
                        </TableCell> */}
                        <TableCell align="center">
                          <Stack direction="row" justifyContent="center" spacing={1}>
                            <NavigationLink
                              variant="outlined"
                              endIcon={<ArrowRightAltIcon />}
                              href={paths.products.productView(product.id)}
                            >
                              View
                            </NavigationLink>
                            <IconButton
                              size="small"
                              onClick={(event) => handleMenuOpen(event, product)}
                              sx={{ color: 'text.secondary' }}
                            >
                              <MoreVertIcon fontSize="small" />
                            </IconButton>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableNoData notFound={notFound} />
                  </TableBody>
                </Table>
              </Scrollbar>
            </TableContainer>
            {!isSkuSearch && productListResponse && (
              <TablePaginationCustom
                count={productListResponse.data?.length || 0}
                page={1}
                rowsPerPage={filters.limit || 10}
                onPageChange={() => { }}
                onRowsPerPageChange={handleRowsPerPageChange}
              />
            )}
          </Grid>
        </Card>
      )}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <ConfirmDialog
        open={showDeleteModal}
        onCancel={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        header="Delete Product"
        contentText={`Are you sure you want to delete "${selectedProduct?.info.name}"? This action cannot be undone.`}
        dialogType="delete"
        isLoading={deleteProductMutation.isPending}
      />
    </Container>
  );
}