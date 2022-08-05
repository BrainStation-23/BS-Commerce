import { userAPI } from '@/APIs';
import UpdateBrand from '@/components/brands/updateBrand';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UpdateBrandPage: NextPage = () => {
  const router = useRouter();
  const id = '' + `${router.query.id}`;
  const [brand, setBrand] = useState<any>();
  const getBrand = async () => {
    const res = await userAPI.getBrand({ brandId: `${id}` });
    console.log(res);

    res ? setBrand(res) : '';
  };
  useEffect(() => {
    getBrand();
  }, []);
  return (
    <>
      {console.log(brand)}
      <div className="mt-2 px-5">
        <UpdateBrand brand={brand} />
      </div>
    </>
  );
};

export default UpdateBrandPage;
