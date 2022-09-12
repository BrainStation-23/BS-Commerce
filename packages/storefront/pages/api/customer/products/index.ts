import { productsData } from '../../../../mock/product';
import { NextApiRequest, NextApiResponse } from 'next';
import _ from 'lodash';
import { CustomerProduct } from 'models';

type ResponseError = {
  message: string;
};

const getPublicProductsAPI = (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;
  let { categoryId, orderBy, minPrice, maxPrice, brand } = query;

  let response: CustomerProduct[] = [];
  let brands = new Set<string>();

  if (categoryId) {
    
    for (let i = 0; i < productsData.length; i++) {
      for (let j = 0; j < productsData[i].categories.length; j++) {
        if (productsData[i].categories[j].id === categoryId) {
          response.push(productsData[i]);
        }
      }
    }
    
    for(let i = 0; i < response.length; i++) {
      for(let j = 0; j < response[i].brands?.length! ; j++) {
        brands.add(response[i].brands![j]);
      }
    }

    if (orderBy === 'asc') {
      response = _.orderBy(response, ['info.price'], ['asc']);
    } else if (orderBy === 'desc') {
      response = _.orderBy(response, ['info.price'], ['desc']);
    }

    if (minPrice && maxPrice) {
      const newList: CustomerProduct[] = [];
      for (let i = 0; i < response.length; i++) {
        if (
          response[i].info.price >= parseFloat(minPrice as string) &&
          response[i].info.price <= parseFloat(maxPrice as string)
        ) {
          newList.push(response[i]);
        }
      }
      response = newList;
    }

    if (brand) {
      const newList: CustomerProduct[] = [];
      for (let i = 0; i < response.length; i++) {
        for (let j = 0; j < response[i].brands!.length; j++) {
          if (response[i]?.brands![j] === brand) {
            newList.push(response[i]);
          }
        }
      }
      response = newList;
    }
  }

  if (!categoryId && !brand && !orderBy && !minPrice && !maxPrice) {
    response = productsData.filter(
      (product) => product.info.published === true
    );
  }
  res.status(200).json({ data: { products: response, brands: Array.from(brands), quantity: response.length} });
};

export default getPublicProductsAPI;

// export default function personHandler(
//   req: NextApiRequest,
//   res: NextApiResponse<Product[] | ResponseError>
// ) {
//   // User with id exists
//   return productsData.length > 0
//     ? res.status(200).json(productsData)
//     : res.status(404).json({ message: `User with id:  not found.` });
// }
