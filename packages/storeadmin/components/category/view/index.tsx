import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Category } from '@bs-commerce/models';
import { userAPI } from '@/APIs';
import Accordion from '@/components/global/accordion';
import TextView from './text-view';
import InputView from './input-view';

const ViewCategory: React.FC = () => {
  const [category, setCategory] = useState<Category>();
  const router = useRouter();
  const id: string = router.query.id as string;

  useEffect(() => {
    async function loadCategoryDetails() {
      const response = await userAPI.getCategory({ categoryId: id! });
      setCategory(response?.data);
    }
    loadCategoryDetails();
  }, [id]);

  return (
    <div className="mt-2 px-5">
      <h2>Category details - {category?.name} </h2>
      <div className="mt-4">
        <Accordion
          title="Category info"
          id={1}
          show={true}
          icon={'bi bi-info-lg'}
        >
          <div className="d-flex flex-column">
            <TextView label="Name" text={category?.name!} />
            {category?.description ? (
              <TextView label="Description" text={category?.description!} />
            ) : (
              ''
            )}
          </div>
        </Accordion>
      </div>
      <div className="mt-4">
        <Accordion
          title="Display info"
          icon="bi bi-display"
          id={2}
          show={false}
        >
          <div className="d-flex flex-column align-items-start">
            <InputView label="Published" checked={category?.published!} />
            <InputView
              label="Show on home page"
              checked={category?.showOnHomePage!}
            />
            <InputView
              label="Allow customers to select page size"
              checked={category?.allowToSelectPageSize!}
            />
            <TextView label="Display order" value={category?.displayOrder!} />
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default ViewCategory;
