import type { NextPage } from 'next';
import CreateTag from '../../../components/Tags/add-new/createTags';
const createTagsPage: NextPage = () => {
  return (
    <>
      <div className="mt-2 px-5">
        <CreateTag />
      </div>
    </>
  );
};

export default createTagsPage;
