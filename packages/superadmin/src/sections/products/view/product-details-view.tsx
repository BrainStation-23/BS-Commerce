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
import { Product } from 'src/types/products';
import { amountBeautify } from 'src/utils/amount-beautify';
import Label from 'src/components/label';

type Props = {
  product: Product;
};

export default function ProductView({ product }: Props) {
  const formatPrice = (price: number) => `৳${amountBeautify(String(price), 'intl').displayValue}`;

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Grid xs={12}>
          <CustomBreadcrumbs
            heading="Product Details"
            links={[
              { name: 'Dashboard', href: paths.dashboard.root },
              { name: 'Product List', href: paths.products.root },
              { name: 'Product Details', href: '#' },
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
              <Label variant="soft" color={product.info.published ? 'success' : 'error'}>
                {product.info.published ? 'Published' : 'Unpublished'}
              </Label>
              <Label variant="soft" color={product.info.isFeatured ? 'info' : 'default'}>
                {product.info.isFeatured ? 'Featured' : 'Not Featured'}
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
                  Product Name
                </Typography>
                <Typography variant="body1">{product.info.name || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  SKU
                </Typography>
                <Typography variant="body1">{product.info.sku || '-'}</Typography>
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Short Description
                </Typography>
                <Typography variant="body1">{product.info.shortDescription || '-'}</Typography>
              </Box>
              <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1' } }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Full Description
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                  {product.info.fullDescription || '-'}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Pricing */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Pricing
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
                  Price
                </Typography>
                <Typography variant="body1">{formatPrice(product.info.price)}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Old Price
                </Typography>
                <Typography variant="body1" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                  {formatPrice(product.info.oldPrice)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Cost
                </Typography>
                <Typography variant="body1">{formatPrice(product.info.cost)}</Typography>
              </Box>
            </Box>
          </Box>

          {/* Categories and Manufacturer */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Categories & Manufacturer
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
                  Categories
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {product.categories && product.categories.length > 0 ? (
                    product.categories.map((cat) => (
                      <Chip key={cat.id} label={cat.name} size="small" />
                    ))
                  ) : (
                    <Typography variant="body1">-</Typography>
                  )}
                </Stack>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Manufacturer
                </Typography>
                <Typography variant="body1">{product.manufacturer?.name || '-'}</Typography>
              </Box>
            </Box>
          </Box>

          {/* Meta Information */}
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
                <Typography variant="body1">{product.meta?.title || '-'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Keywords
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {product.meta?.keywords && product.meta.keywords.length > 0 ? (
                    product.meta.keywords.map((keyword, index) => (
                      <Chip key={index} label={keyword} size="small" />
                    ))
                  ) : (
                    <Typography variant="body1">-</Typography>
                  )}
                </Stack>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Meta Description
                </Typography>
                <Typography variant="body1">{product.meta?.description || '-'}</Typography>
              </Box>
            </Box>
          </Box>

          {/* Tags and Brands */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Tags & Brands
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
                  Tags
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {product.tags && product.tags.length > 0 ? (
                    product.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" />
                    ))
                  ) : (
                    <Typography variant="body1">-</Typography>
                  )}
                </Stack>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Brands
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                  {product.brands && product.brands.length > 0 ? (
                    product.brands.map((brand, index) => (
                      <Chip key={index} label={brand} size="small" />
                    ))
                  ) : (
                    <Typography variant="body1">-</Typography>
                  )}
                </Stack>
              </Box>
            </Box>
          </Box>

          {/* Photos */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Photos
            </Typography>
            {product.photos && product.photos.length > 0 ? (
              <Stack spacing={2}>
                {product.photos.map((photo, index) => (
                  <Box
                    key={index}
                    display="grid"
                    gridTemplateColumns={{
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(3, 1fr)',
                    }}
                    gap={2}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        Photo
                      </Typography>
                      <Avatar
                        src={photo.url}
                        alt={photo.alt || photo.title || product.info.name}
                        variant="rounded"
                        sx={{ width: 120, height: 120, bgcolor: 'background.neutral' }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        Title
                      </Typography>
                      <Typography variant="body1">{photo.title || '-'}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                        Display Order
                      </Typography>
                      <Typography variant="body1">{photo.displayOrder ?? index}</Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            ) : (
              <Typography variant="body1">-</Typography>
            )}
          </Box>

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
                  Display Order
                </Typography>
                <Typography variant="body1">{product.info.displayOrder || 0}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Show on Home Page
                </Typography>
                <Typography variant="body1">{product.info.showOnHomePage ? 'Yes' : 'No'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Include in Top Menu
                </Typography>
                <Typography variant="body1">{product.info.includeInTopMenu ? 'Yes' : 'No'}</Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                  Allow to Select Page Size
                </Typography>
                <Typography variant="body1">{product.info.allowToSelectPageSize ? 'Yes' : 'No'}</Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
