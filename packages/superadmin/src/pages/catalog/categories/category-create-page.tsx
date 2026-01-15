import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import CategoryForm from 'src/sections/categories/components/category-form';

// ----------------------------------------------------------------------

export default function CategoryCreatePage() {
  return (
    <>
      <Helmet>
        <title>Category: Create new category</title>
      </Helmet>

      <Container maxWidth="xl">
        <CategoryForm />
      </Container>
    </>
  );
}
