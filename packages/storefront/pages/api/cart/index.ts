import { productsData } from '../../../mock/product';

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const productID = req.body.productId;
  const quantity = req.body.quantity;

  const response = productsData.filter((product) => product.id === productID);
  // console.log('qqqq', response);
  const res2 = {
    code: 0,
    data: {
      id: 'admin',
      userId: 'admin',
      items: [
        {
          product: response[0] ? response[0] : productsData[0],
          productId: productID,
          quantity: quantity,
        },
      ],
    },
  };
  res.status(200).json(res2);
};

// export default addToCart;
