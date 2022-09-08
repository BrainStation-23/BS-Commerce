import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { userAPI } from '@/APIs';
import ViewProduct from '@/components/products/productView.component';
import { Product } from '@bs-commerce/models'';

const LogDetailPage: NextPage = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();
  const id = '' + `${router.query.id}`;

  const getProduct = async () => {
    const res = await userAPI.getProduct({ productId: `${id}` });
    res?.data ? setProduct(res.data) : '';
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="bg-light px-5">
      <main>
        {product ? <ViewProduct product={product} /> : 'Nothing Found'}
      </main>
    </div>
  );
};
export default LogDetailPage;
