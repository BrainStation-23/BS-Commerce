import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import TagForm from 'src/sections/tags/components/tag-form';

// ----------------------------------------------------------------------

export default function TagCreatePage() {
  return (
    <>
      <Helmet>
        <title>Tag: Create new tag</title>
      </Helmet>

      <Container maxWidth="xl">
        <TagForm />
      </Container>
    </>
  );
}
