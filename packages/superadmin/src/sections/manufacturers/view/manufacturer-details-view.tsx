import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BackButton from 'src/components/back-button';
import { paths } from 'src/routes/paths';
import { Manufacturer } from 'src/types/manufacturers';
import Label from 'src/components/label';

type Props = {
  manufacturer: Manufacturer;
};

export default function ManufacturerView({ manufacturer }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Grid xs={12}>
          <CustomBreadcrumbs
            heading="Manufacturer Details"
            links={[
              { name: 'Dashboard', href: paths.dashboard.root },
              { name: 'Manufacturer List', href: paths.manufacturers.root },
              { name: 'Manufacturer Details', href: '#' },
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
              <Label variant="soft" color={manufacturer.isPublished ? 'success' : 'error'}>
                {manufacturer.isPublished ? 'Published' : 'Unpublished'}
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
                  Manufacturer Name
                </Typography>
                <Typography variant="body1">{manufacturer.name || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Display Order
                </Typography>
                <Typography variant="body1">{manufacturer.displayOrder || 0}</Typography>
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Description
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {manufacturer.description || '-'}
                </Typography>
              </Box>
              {manufacturer.picture && (
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Picture
                  </Typography>
                  <Avatar
                    src={manufacturer.picture}
                    alt={manufacturer.name}
                    variant="rounded"
                    sx={{ width: 120, height: 120, bgcolor: 'background.neutral' }}
                  />
                </Box>
              )}
            </Box>
          </Box>

          {/* SEO Information */}
          {manufacturer.seo && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                SEO Information
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
                  <Typography variant="body1">{manufacturer.seo.metaTitle || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Meta Keyword
                  </Typography>
                  <Typography variant="body1">{manufacturer.seo.metaKeyword || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    SEFN
                  </Typography>
                  <Typography variant="body1">{manufacturer.seo.SEFN || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Meta Description
                  </Typography>
                  <Typography variant="body1">{manufacturer.seo.metaDescription || '-'}</Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}
