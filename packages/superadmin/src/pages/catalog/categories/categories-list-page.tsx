import { Helmet } from 'react-helmet-async';
import CategoriesListView from 'src/sections/categories/view/categories-list-view';

// ----------------------------------------------------------------------

export default function CategoriesListPage() {
  return (
    <>
      <Helmet>
        <title>Categories: List of categories</title>
      </Helmet>

      <CategoriesListView />
    </>
  );
}
