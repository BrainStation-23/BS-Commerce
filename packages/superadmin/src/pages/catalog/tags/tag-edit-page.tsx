import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import TagForm from 'src/sections/tags/components/tag-form';
import { useGetTagDetails } from 'src/query/hooks/tag';

// ----------------------------------------------------------------------

export default function TagEditPage() {
  const { tagId } = useParams<{ tagId: string }>();

  const {
    data: tag,
    isPending,
    error,
  } = useGetTagDetails(tagId || '', !!tagId);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error || !tag) {
    return (
      <Container maxWidth="xl">
        <div>Error loading tag or tag not found</div>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Tag: Edit tag</title>
      </Helmet>

      <Container maxWidth="xl">
        <TagForm tag={tag} />
      </Container>
    </>
  );
}
