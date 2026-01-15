import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BackButton from 'src/components/back-button';
import { paths } from 'src/routes/paths';
import { Brand } from 'src/types/brands';
import Label from 'src/components/label';

type Props = {
  brand: Brand;
};

export default function BrandView({ brand }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Grid xs={12}>
          <CustomBreadcrumbs
            heading="Brand Details"
            links={[
              { name: 'Dashboard', href: paths.dashboard.root },
              { name: 'Brand List', href: paths.brands.root },
              { name: 'Brand Details', href: '#' },
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
              <Label variant="soft" color={brand.info.published ? 'success' : 'error'}>
                {brand.info.published ? 'Published' : 'Unpublished'}
              </Label>
            </Stack>
          </Box>

          {/* Basic Information */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Basic Information
            </Typography>
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
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Brand Name
                </Typography>
                <Typography variant="body1">{brand.info.name || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Display Order
                </Typography>
                <Typography variant="body1">{brand.info.displayOrder || 0}</Typography>
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Description
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {brand.info.description || '-'}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Page Size Options
                </Typography>
                <Typography variant="body1">
                  {brand.info.pageSizeOptions && brand.info.pageSizeOptions.length > 0
                    ? brand.info.pageSizeOptions.join(', ')
                    : '-'}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Allow to Select Page Size
                </Typography>
                <Typography variant="body1">{brand.info.allowToSelectPageSize ? 'Yes' : 'No'}</Typography>
              </Box>
            </Box>
          </Box>

          {/* Meta Information */}
          {brand.meta && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Meta Information
              </Typography>
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
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Meta Title
                  </Typography>
                  <Typography variant="body1">{brand.meta.title || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Keywords
                  </Typography>
                  <Typography variant="body1">{brand.meta.keywords || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    SEFN
                  </Typography>
                  <Typography variant="body1">{brand.meta.SEFN || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Meta Description
                  </Typography>
                  <Typography variant="body1">{brand.meta.description || '-'}</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}
