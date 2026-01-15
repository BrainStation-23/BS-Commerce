import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import BrandView from 'src/sections/brands/view/brand-details-view';
import { useGetBrandDetails } from 'src/query/hooks/brand';

// ----------------------------------------------------------------------

export default function BrandViewPage() {
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
        <title>Brand: View brand</title>
      </Helmet>

      <Container maxWidth="xl">
        <BrandView brand={brand} />
      </Container>
    </>
  );
}
