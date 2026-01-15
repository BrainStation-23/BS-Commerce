import { Helmet } from 'react-helmet-async';
import TagsListView from 'src/sections/tags/view/tags-list-view';

// ----------------------------------------------------------------------

export default function TagsListPage() {
  return (
    <>
      <Helmet>
        <title>Tags: List of tags</title>
      </Helmet>

      <TagsListView />
    </>
  );
}
