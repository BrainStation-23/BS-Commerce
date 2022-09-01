import { customerData } from 'mock/customer';
import { NextApiRequest, NextApiResponse } from 'next';

const getCustomerProfileAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const customerId = req.headers.token;
  const response = customerData.find((customer) => customer.id === customerId);
  res.status(200).send({ data: response });
};

export default getCustomerProfileAPI;
