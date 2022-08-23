import SingleCart from '@/components/sales/singleCart';
import { ProductCategory } from 'models';
import SingleCat from './singlecat';

interface Props {
  categories: ProductCategory[];
}

const CaegoryCard: React.FC<Props> = ({ categories }) => {
  return (
    <>
      {categories?.length > 0 ? (
        <div
          className="card card-secondary card-outline my-4"
          data-card-name="categoryCard"
          id="categoryCard"
        >
          <div className="card-header with-border d-flex justify-content-between align-items-center">
            <div className="card-title row align-items-center  ps-2 pt-2">
              <i
                className="bi bi-diagram-3-fill col-1"
                style={{ fontSize: '25px' }}
              />
              <div className="fs-5 col text-start px-3">Categories</div>
            </div>
          </div>
          <div className="" id="categoryCardTab">
            <div className="card-body">
              <div className="w-50 m-auto py-3 " style={{ minWidth: '216px' }}>
                {categories.map((category) => (
                  <SingleCat key={category.id} category={category} />
                ))}
                {/* <table className="table-bordered table-striped table  ">
                  <thead>
                    <tr>
                      <th className="py-3 text-center">Category</th>
                      <th className="py-3 text-center">Feaured</th>
                      <th className="py-3 text-center">Display order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td className="text-center">{data.name}</td>
                          <td className="text-center">
                            {data.isFeatured ? (
                              <i className="bi bi-check-lg"></i>
                            ) : (
                              'X'
                            )}
                          </td>
                          <td className="text-center">{data.displayOrder}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default CaegoryCard;
