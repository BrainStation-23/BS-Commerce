import { singleOrderData } from './../../../../mock/singleOrder';
import { NextApiRequest, NextApiResponse } from 'next';

const getOrderProduct = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: singleOrderData });
};

export default getOrderProduct;
