import { ordersData } from './../../../../mock/orders';
import { NextApiRequest, NextApiResponse } from 'next';

const placeOrderAPI = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ data: ordersData });
  } else if (req.method === 'POST') {
    res.status(200).send({ data: req.body });
  }
};

export default placeOrderAPI;
