import Link from 'next/link';
import { NestedCategoryList } from '@bs-commerce/models';

interface Props {
  categories: NestedCategoryList[];
}

const CategoryTable: React.FC<Props> = ({ categories }: Props) => {
  return (
    <table className="table-striped table rounded border text-center">
      <thead>
        <tr>
          {/* <th scope="col">
            <input type="checkbox" />
          </th> */}
          <th scope="col">Name</th>
          <th scope="col">Published</th>
          <th scope="col">Display order</th>
          {/* <th scope="col">Edit</th> */}
          <th scope="col">View</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => {
          return (
            <tr key={category.id}>
              {/* <th scope="row">
                <input type="checkbox" />
              </th> */}
              <td className="">{category.name}</td>
              <td>
                <i className="bi bi-check-lg" />
              </td>
              <td>1</td>
              {/* <td>
                <button className="btn disabled rounded border bg-white">
                  <i className="bi bi-pencil-fill me-1" />
                  Edit
                </button>
              </td> */}
              <td>
                <Link href={`category/view/${category.id}`} passHref legacyBehavior>
                  <button className="btn rounded border bg-white">
                    <i className="bi bi-eye me-1" />
                    View
                  </button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CategoryTable;
