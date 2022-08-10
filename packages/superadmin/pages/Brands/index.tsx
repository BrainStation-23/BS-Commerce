import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Brand } from 'models';
import { userAPI } from '@/APIs';
import BrandsList from '@/components/brands/brandsList';
import SearchWindowBrands from '@/components/brands/searchWindowBrands';

const Brands: NextPage = () => {
  const [brands, setBrands] = useState<Brand[]>();
  const getAllBrands = async () => {
    const brandsList = await userAPI.getBrands();
    if (brandsList) setBrands(brandsList);
  };
  useEffect(() => {
    getAllBrands();
  }, []);
  return (
    <>
      <main className="px-5">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="fs-2">Brands</div>
          <a className="btn btn-primary" href="/Brands/Create">
            Add new
          </a>
        </div>

        <div>
          <SearchWindowBrands setBrands={setBrands} allbrands={brands!} />
          {brands ? (
            <BrandsList brandsList={brands} setBrands={setBrands} />
          ) : (
            'There is no brands'
          )}
        </div>
      </main>
    </>
  );
};

export default Brands;
