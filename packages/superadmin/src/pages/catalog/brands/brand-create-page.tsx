import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import BrandForm from 'src/sections/brands/components/brand-form';

// ----------------------------------------------------------------------

export default function BrandCreatePage() {
  return (
    <>
      <Helmet>
        <title>Brand: Create new brand</title>
      </Helmet>

      <Container maxWidth="xl">
        <BrandForm />
      </Container>
    </>
  );
}
