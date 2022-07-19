import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { userAPI } from '../../APIs/index';
import ManufacturerSearchWindow from './SubComponents/searchWindow';
import ManufactureList from './List/manufactureList';
import Link from 'next/link';

const List = () => {
  const [manufactureData, setManufactureData] = useState<any>();
  const getAllManufacturers = async () => {
    const res = await userAPI.getManufacturer(1000);
    res ? setManufactureData(res) : '';
  };
  useEffect(() => {
    getAllManufacturers();
  }, []);
  return (
    <>
      <main className="px-5">
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="fs-2">Manufacturers</div>
          <Link href={'/Manufacturer/add-new'}>
            <a className="btn btn-primary">Add new</a>
          </Link>
        </div>
        <div>
          <ManufacturerSearchWindow />

          {manufactureData ? (
            <ManufactureList
              manufactureData={manufactureData}
              // getAllManufacturers={getAllManufacturers}
              setManufactureData={setManufactureData}
            />
          ) : (
            'No data found'
          )}
        </div>
      </main>
    </>
  );
};

export default List;
