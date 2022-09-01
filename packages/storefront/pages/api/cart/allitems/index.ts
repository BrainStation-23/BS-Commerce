import { NextApiRequest, NextApiResponse } from 'next';

const deleteAllCartItem = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    code: 0,
    data: {
      message: 'REMOVE_CART_SUCCESSFULLY',
    },
  });
};

export default deleteAllCartItem;
