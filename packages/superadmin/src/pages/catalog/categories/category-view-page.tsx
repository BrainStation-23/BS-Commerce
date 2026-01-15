import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import CategoryView from 'src/sections/categories/view/category-details-view';
import { useGetCategoryDetails } from 'src/query/hooks/category';

// ----------------------------------------------------------------------

export default function CategoryViewPage() {
  const { categoryId } = useParams<{ categoryId: string }>();

  const {
    data: category,
    isPending,
    error,
  } = useGetCategoryDetails(categoryId || '', !!categoryId);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error || !category) {
    return (
      <Container maxWidth="xl">
        <div>Error loading category or category not found</div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Category: View category</title>
      </Helmet>

      <Container maxWidth="xl">
        <CategoryView category={category} />
      </Container>
    </>
  );
}
