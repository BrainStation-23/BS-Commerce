import { productsData } from '../../../../mock/product';
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from 'models';

type ResponseError = {
  message: string;
};


export default (req: NextApiRequest, res: NextApiResponse) => {
  const response = productsData.filter(
    (product) => product.info.published === true
  );
  res.status(200).json({data : {products : response}});
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
