import { Helmet } from 'react-helmet-async';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';
import TagView from 'src/sections/tags/view/tag-details-view';
import { useGetTagDetails } from 'src/query/hooks/tag';

// ----------------------------------------------------------------------

export default function TagViewPage() {
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
        <title>Tag: View tag</title>
      </Helmet>

      <Container maxWidth="xl">
        <TagView tag={tag} />
      </Container>
    </>
  );
}
