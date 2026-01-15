import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
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
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AlertMessage from 'src/components/alert-message';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';
import NavigationLink from 'src/components/navigation-link';
import Scrollbar from 'src/components/scrollbar';
import StatusLevel from 'src/components/status-level';
import {
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
} from 'src/components/table';
import { useGetManufacturerList } from 'src/query/hooks/manufacturer';
import { paths } from 'src/routes/paths';
import { Manufacturer, ManufacturerListParams } from 'src/types/manufacturers';
import { formatErrorMessage } from 'src/utils/format-error-message';

const tableLabels = [
  {
    id: 'name',
    label: 'Name',
    flex: 1,
    minWidth: 200,
  },
  {
    id: 'description',
    label: 'Description',
    flex: 1.5,
    minWidth: 250,
  },
  {
    id: 'isPublished',
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

export default function ManufacturersListView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<ManufacturerListParams>({
    limit: Number(searchParams.get('limit')) || 10,
  });

  const {
    error,
    isFetching,
    data: manufacturerListResponse,
  } = useGetManufacturerList(filters);

  const manufacturers: Manufacturer[] = useMemo(
    () => manufacturerListResponse?.data?.manufacturers || [],
    [manufacturerListResponse]
  );

  const notFound = !isFetching && manufacturers.length === 0;

  // Handle page change (disabled since API doesn't support page parameter)
  const handlePageChange = useCallback(() => {
    // Page change not supported by API
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
    if (filters.limit) {
      params.limit = filters.limit.toString();
    }
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Update filters from URL
  useEffect(() => {
    const limit = Number(searchParams.get('limit')) || 10;
    setFilters({ limit });
  }, [searchParams]);

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomBreadcrumbs
          heading="Manufacturers"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Manufacturer List', href: paths.manufacturers.root },
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
          href={paths.manufacturers.manufacturerCreate}
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
                    {manufacturers.map((manufacturer: Manufacturer) => (
                      <TableRow key={manufacturer.id}>
                        <TableCell>
                          <Typography variant="body2">{manufacturer.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {manufacturer.description}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <StatusLevel value={manufacturer.isPublished ?? false} />
                        </TableCell>
                        <TableCell align="center">
                          <NavigationLink
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon />}
                            href={paths.manufacturers.manufacturerView(manufacturer.id)}
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

            <TablePaginationCustom
              count={manufacturers.length}
              page={1}
              rowsPerPage={filters.limit || 10}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </Grid>
        </Card>
      )}
    </Container>
  );
}
