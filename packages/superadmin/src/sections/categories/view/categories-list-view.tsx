import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useMemo } from 'react';
import {
  Card,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import AlertMessage from 'src/components/alert-message';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';
import NavigationLink from 'src/components/navigation-link';
import Scrollbar from 'src/components/scrollbar';
import StatusLevel from 'src/components/status-level';
import {
  TableHeadCustom,
  TableNoData,
} from 'src/components/table';
import { useGetCategoryList } from 'src/query/hooks/category';
import { paths } from 'src/routes/paths';
import { Category } from 'src/types/categories';
import { formatErrorMessage } from 'src/utils/format-error-message';

const tableLabels = [
  {
    id: 'name',
    label: 'Name',
    flex: 1,
    minWidth: 200,
  },
  {
    id: 'slug',
    label: 'Slug',
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

export default function CategoriesListView() {
  const {
    error,
    isFetching,
    data: categoryListResponse,
  } = useGetCategoryList();

  const categories: Category[] = useMemo(
    () => {
      if (!categoryListResponse?.data?.categories) return [];
      return flattenCategories(categoryListResponse.data.categories);
    },
    [categoryListResponse]
  );

  const notFound = !isFetching && categories.length === 0;

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomBreadcrumbs
          heading="Categories"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Category List', href: paths.categories.root },
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
          href={paths.categories.categoryCreate}
          sx={{ mb: 3 }}
        >
          Create New
        </NavigationLink>
      </Stack>

      {!!error && <AlertMessage severity="error" message={formatErrorMessage(error)} />}

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
                    {categories.map((category: Category) => (
                      <TableRow key={category.id}>
                        <TableCell>
                          <Typography variant="body2">{category.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {category.slug}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <StatusLevel value={category.published ?? false} />
                        </TableCell>
                        <TableCell align="center">
                          <NavigationLink
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon />}
                            href={paths.categories.categoryView(category.id)}
                          >
                            View
                          </NavigationLink>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableNoData notFound={notFound} />
                  </TableBody>
                </Table>
              </Scrollbar>
            </TableContainer>
          </Grid>
        </Card>
      )}
    </Container>
  );
}
