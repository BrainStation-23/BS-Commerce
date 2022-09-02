import { customerData } from 'mock/customer';
import { NextApiRequest, NextApiResponse } from 'next';

const placeOrderAPI = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send({ data: req.body });
};

export default placeOrderAPI;
