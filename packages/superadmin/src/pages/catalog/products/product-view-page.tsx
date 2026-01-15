import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import ProductView from 'src/sections/products/view/product-details-view';
import { useGetProductDetails } from 'src/query/hooks/products';

// ----------------------------------------------------------------------

export default function ProductViewPage() {
  const { productId } = useParams<{ productId: string }>();

  const {
    data: product,
    isPending,
    error,
  } = useGetProductDetails(productId || '', !!productId);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error || !product) {
    return (
      <Container maxWidth="xl">
        <div>Error loading product or product not found</div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Product: View product</title>
      </Helmet>

      <Container maxWidth="xl">
        <ProductView product={product} />
      </Container>
    </>
  );
}
