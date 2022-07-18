import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userAPI } from 'APIs';
import ViewBrand from '@/components/brands/viewBrand';

const ViewBrandPage: NextPage = () => {
  const router = useRouter();
  const [brand, setbrand] = useState<any>();
  const id = '' + `${router.query.id}`;

  const getAllBrands = async () => {
    const res = await userAPI.getBrand({ brandId: `${id}` });
    console.log(res);

    res ? setbrand(res) : '';
  };
  useEffect(() => {
    getAllBrands();
  }, []);
  return (
    <div className="bg-light px-5">
      <main>{brand ? <ViewBrand brand={brand} /> : 'Nothing Found'}</main>
    </div>
  );
};

export default ViewBrandPage;
