import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import ProductForm from 'src/sections/products/components/product-form';
import { useGetProductDetails } from 'src/query/hooks/products';

// ----------------------------------------------------------------------

export default function ProductEditPage() {
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
        <title>Product: Edit product</title>
      </Helmet>

      <Container maxWidth="xl">
        <ProductForm product={product} />
      </Container>
    </>
  );
}
