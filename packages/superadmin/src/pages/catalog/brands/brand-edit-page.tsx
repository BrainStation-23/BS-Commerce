import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import BrandForm from 'src/sections/brands/components/brand-form';
import { useGetBrandDetails } from 'src/query/hooks/brand';

// ----------------------------------------------------------------------

export default function BrandEditPage() {
  const { brandId } = useParams<{ brandId: string }>();

  const {
    data: brand,
    isPending,
    error,
  } = useGetBrandDetails(brandId || '', !!brandId);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error || !brand) {
    return (
      <Container maxWidth="xl">
        <div>Error loading brand or brand not found</div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Brand: Edit brand</title>
      </Helmet>

      <Container maxWidth="xl">
        <BrandForm brand={brand} />
      </Container>
    </>
  );
}
