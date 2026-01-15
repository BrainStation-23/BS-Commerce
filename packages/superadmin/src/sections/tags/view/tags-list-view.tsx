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
import AlertMessage from 'src/components/alert-message';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import { LoadingScreen } from 'src/components/loading-screen';
import StatusLevel from 'src/components/status-level';
import NavigationLink from 'src/components/navigation-link';
import Scrollbar from 'src/components/scrollbar';
import {
  TableHeadCustom,
  TableNoData,
} from 'src/components/table';
import { useGetTagList } from 'src/query/hooks/tag';
import { paths } from 'src/routes/paths';
import { Tag } from 'src/types/tags';
import { formatErrorMessage } from 'src/utils/format-error-message';

const tableLabels = [
  {
    id: 'name',
    label: 'Name',
    flex: 1,
    minWidth: 200,
  },
  {
    id: 'isHomePageProductsTag',
    label: 'Home Page Products Tag',
    flex: 1,
    minWidth: 150,
  },
  {
    id: 'actions',
    label: 'Action',
    flex: 0.8,
    minWidth: 100,
    align: 'center' as const,
  },
];

export default function TagsListView() {
  const {
    error,
    isFetching,
    data: tagListResponse,
  } = useGetTagList();

  const tags: Tag[] = tagListResponse?.data || [];
  const notFound = !isFetching && tags.length === 0;

  return (
    <Container maxWidth="xl" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomBreadcrumbs
          heading="Tags"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Tag List', href: paths.tags.root },
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
          href={paths.tags.tagCreate}
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
                    {tags.map((tag: Tag) => (
                      <TableRow key={tag.id}>
                        <TableCell>
                          <Typography variant="body2">{tag.name}</Typography>
                        </TableCell>
                        <TableCell>
                          <StatusLevel value={tag.isHomePageProductsTag ?? false} />
                        </TableCell>
                        <TableCell align="center">
                          <NavigationLink
                            variant="outlined"
                            endIcon={<ArrowRightAltIcon />}
                            href={paths.tags.tagView(tag.id)}
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
