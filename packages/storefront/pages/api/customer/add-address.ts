import { customerData } from 'mock/customer';
import { NextApiRequest, NextApiResponse } from 'next';

const addCustomerAddressAPI = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).send({ data: customerData[0] });
};

export default addCustomerAddressAPI;
