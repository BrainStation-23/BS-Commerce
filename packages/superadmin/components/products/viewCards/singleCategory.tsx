import { ProductCategory } from 'models';

interface Props {
  category: ProductCategory;
}

const SingleCategory: React.FC<Props> = ({ category }) => {
  return <div className="ps-5 ">{category.name}</div>;
};

export default SingleCategory;
