import { Category } from '@bs-commerce/models';
import { NextApiRequest, NextApiResponse } from 'next';
import { categoriesData } from 'mock/categories';

type ResponseError = {
  message: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const response = categoriesData.filter((category) => category.id);
  res.status(200).json({ data: { categories: response } });
};

// export default function personHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<Product[] | ResponseError>
// ) {
//   // User with id exists
//   return productsData.length > 0
//     ? res.status(200).json(productsData)
//     : res.status(404).json({ message: `User with id:  not found.` });
// }
