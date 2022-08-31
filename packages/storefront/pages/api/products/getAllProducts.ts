/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next';
import { productsData } from '../../../mock/product';
export default (req: NextApiRequest, res: NextApiResponse) => {
  const response = productsData
  res.status(200).json(response);
};