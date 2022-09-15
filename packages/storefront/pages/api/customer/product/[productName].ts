import { productsData } from '../../../../mock/product';
import { NextApiRequest, NextApiResponse } from 'next';

const getPublicProductByUniqueNameAPI = (req: NextApiRequest, res: NextApiResponse) => {
const productName = req.query.productName;
  const response = productsData.filter(product => product.meta?.friendlyPageName === productName)
  res.status(200).json({data : response[0]});
};

export default getPublicProductByUniqueNameAPI;

