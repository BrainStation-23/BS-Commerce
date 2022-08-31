/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../mock/product';
export default (req: NextApiRequest, res: NextApiResponse) => {
  const productName = req.query.productName;
  const response = products.filter(product => product.meta?.friendlyPageName === productName);
  res.status(200).json(response[0]);
};
