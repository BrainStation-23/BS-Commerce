import { Helmet } from 'react-helmet-async';
import BrandsListView from 'src/sections/brands/view/brands-list-view';

// ----------------------------------------------------------------------

export default function BrandsListPage() {
  return (
    <>
      <Helmet>
        <title>Brands: List of brands</title>
      </Helmet>

      <BrandsListView />
    </>
  );
}
