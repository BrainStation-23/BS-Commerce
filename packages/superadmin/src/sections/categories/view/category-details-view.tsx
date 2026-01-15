import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import BackButton from 'src/components/back-button';
import { paths } from 'src/routes/paths';
import { Category } from 'src/types/categories';
import Label from 'src/components/label';

type Props = {
  category: Category;
};

export default function CategoryView({ category }: Props) {
  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Grid xs={12}>
          <CustomBreadcrumbs
            heading="Category Details"
            links={[
              { name: 'Dashboard', href: paths.dashboard.root },
              { name: 'Category List', href: paths.categories.root },
              { name: 'Category Details', href: '#' },
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
              <Label variant="soft" color={category.published ? 'success' : 'error'}>
                {category.published ? 'Published' : 'Unpublished'}
              </Label>
              {category.showOnHomePage && (
                <Label variant="soft" color="info">Show on Home Page</Label>
              )}
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
                  Category Name
                </Typography>
                <Typography variant="body1">{category.name || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Slug
                </Typography>
                <Typography variant="body1">{category.slug || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Display Order
                </Typography>
                <Typography variant="body1">{category.displayOrder || 0}</Typography>
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Description
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {category.description || '-'}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Photo */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Photo
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
                  Photo
                </Typography>
                {category.photo?.url ? (
                  <Avatar
                    src={category.photo.url}
                    alt={category.photo.alt || category.name}
                    variant="rounded"
                    sx={{ width: 120, height: 120, bgcolor: 'background.neutral' }}
                  />
                ) : (
                  <Typography variant="body1">-</Typography>
                )}
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Photo Alt
                </Typography>
                <Typography variant="body1">{category.photo?.alt || '-'}</Typography>
              </Box>
            </Box>
          </Box>

          {/* Meta Information */}
          {category.meta && (
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
                  sm: 'repeat(3, 1fr)',
                }}
                sx={{ mb: 3 }}
              >
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Meta Title
                  </Typography>
                  <Typography variant="body1">{category.meta.title || '-'}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Keywords
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                    {category.meta.keywords && category.meta.keywords.length > 0 ? (
                      category.meta.keywords.map((keyword, index) => (
                        <Chip key={index} label={keyword} size="small" />
                      ))
                    ) : (
                      <Typography variant="body1">-</Typography>
                    )}
                  </Stack>
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    SEFN
                  </Typography>
                  <Typography variant="body1">{category.meta.SEFN || '-'}</Typography>
                </Box>
                <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    Meta Description
                  </Typography>
                  <Typography variant="body1">{category.meta.description || '-'}</Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* Display Options */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Display Options
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
                  Show on Home Page
                </Typography>
                <Typography variant="body1">{category.showOnHomePage ? 'Yes' : 'No'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Include in Top Menu
                </Typography>
                <Typography variant="body1">{category.includeInTopMenu ? 'Yes' : 'No'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Allow to Select Page Size
                </Typography>
                <Typography variant="body1">{category.allowToSelectPageSize ? 'Yes' : 'No'}</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
