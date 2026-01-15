import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import ManufacturerForm from 'src/sections/manufacturers/components/manufacturer-form';
import { useGetManufacturerDetails } from 'src/query/hooks/manufacturer';

// ----------------------------------------------------------------------

export default function ManufacturerEditPage() {
  const { manufacturerId } = useParams<{ manufacturerId: string }>();

  const {
    data: manufacturer,
    isPending,
    error,
  } = useGetManufacturerDetails(manufacturerId || '', !!manufacturerId);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error || !manufacturer) {
    return (
      <Container maxWidth="xl">
        <div>Error loading manufacturer or manufacturer not found</div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Manufacturer: Edit manufacturer</title>
      </Helmet>

      <Container maxWidth="xl">
        <ManufacturerForm manufacturer={manufacturer} />
      </Container>
    </>
  );
}
