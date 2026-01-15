import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import ManufacturerForm from 'src/sections/manufacturers/components/manufacturer-form';

// ----------------------------------------------------------------------

export default function ManufacturerCreatePage() {
  return (
    <>
      <Helmet>
        <title>Manufacturer: Create new manufacturer</title>
      </Helmet>

      <Container maxWidth="xl">
        <ManufacturerForm />
      </Container>
    </>
  );
}
