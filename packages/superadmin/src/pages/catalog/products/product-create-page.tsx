import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import ProductForm from 'src/sections/products/components/product-form';

// ----------------------------------------------------------------------

export default function ProductCreatePage() {
  return (
    <>
      <Helmet>
        <title>Product: Create new product</title>
      </Helmet>

      <Container maxWidth="xl">
        <ProductForm />
      </Container>
    </>
  );
}