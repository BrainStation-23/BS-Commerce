import CreateCategoryComponent from '@/components/category/create';
import type { NextPage } from 'next';

const CreateCategory: NextPage = () => {
  return (
    <main className="mt-3 px-5">
      <CreateCategoryComponent />
    </main>
  );
};

export default CreateCategory;
