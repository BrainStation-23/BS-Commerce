import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'src/routes/hooks';
import Iconify from 'src/components/iconify';

import { useGetProductList } from 'src/query/hooks/products';
import { Product } from 'src/types/products';
import { formatCurrency } from 'src/utils/format-number';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  subheader?: string;
};

export default function LatestProducts({ title = 'Latest Products', subheader }: Props) {
  const router = useRouter();
  const { data, isFetching, error } = useGetProductList({ limit: 10 }, true);

  const products: Product[] = data?.data || [];

  const latestProducts = products.slice(0, 6);

  const handleViewAll = () => {
    router.push(paths.products.root);
  };

  return (
    <Card>
      <CardHeader
        title={title}
        subheader={subheader}
        action={
          <Button size="small" onClick={handleViewAll} endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}>
            View
          </Button>
        }
        sx={{
          '& .MuiCardHeader-action': {
            alignSelf: 'center',
          },
        }}
      />

      <CardContent>
        {error && (
          <Typography variant="body2" color="error">
            Failed to load products
          </Typography>
        )}

        {!isFetching && latestProducts.length === 0 && !error && (
          <Typography variant="body2" color="text.secondary">
            No products found.
          </Typography>
        )}

        <List disablePadding>
          {latestProducts.map((product) => (
            <ListItem
              key={product.id}
              sx={{
                px: 0,
                py: 1,
                '&:not(:last-of-type)': {
                  borderBottom: (theme) => `1px dashed ${theme.palette.divider}`,
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  src={product.photos?.[0]?.url}
                  alt={product.photos?.[0]?.alt || product.info.name}
                  variant="rounded"
                  sx={{ width: 48, height: 48 }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={product.info.name}
                secondary={`${formatCurrency(product.info.price)}`}
                primaryTypographyProps={{
                  variant: 'subtitle2',
                  noWrap: true,
                }}
                secondaryTypographyProps={{
                  variant: 'caption',
                  color: 'text.secondary',
                  noWrap: true,
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

