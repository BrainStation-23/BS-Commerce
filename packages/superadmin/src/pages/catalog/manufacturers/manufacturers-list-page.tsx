import { Helmet } from 'react-helmet-async';
import ManufacturersListView from 'src/sections/manufacturers/view/manufacturers-list-view';

// ----------------------------------------------------------------------

export default function ManufacturersListPage() {
  return (
    <>
      <Helmet>
        <title>Manufacturers: List of manufacturers</title>
      </Helmet>

      <ManufacturersListView />
    </>
  );
}
