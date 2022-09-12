import { customerData } from 'mock/customer';
import { NextApiRequest, NextApiResponse } from 'next';

const getCustomerProfileAPI = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const customerId = req.headers.token;
    const response = customerData.find(
      (customer) => customer.id === customerId
    );
    res.status(200).send({ data: response });
  }
  else if(req.method === 'PATCH') {
    res.status(200).send({ data: customerData[0] });
  }
};

export default getCustomerProfileAPI;
