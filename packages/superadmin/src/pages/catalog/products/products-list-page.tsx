import { Helmet } from 'react-helmet-async';
import ProductListView from 'src/sections/products/view/products-list-view';

// ----------------------------------------------------------------------

export default function ProductsListPage() {
  return (
    <>
      <Helmet>
        <title>Products: List of products</title>
      </Helmet>

      <ProductListView />
    </>
  );
}