import EditShipment from '@/components/sales/editShipment';
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Edit: NextPage = () => {
  const router = useRouter();
  const id = '' + `${router.query.id}`;
  const [shipment, setShipment] = useState<any>([]);

  useEffect(() => {
    const data: any = [];
    setShipment(data);
  }, []);

  const filteredShipment = shipment.filter((data: any) => data.id == id);
  const singleShipment = filteredShipment[0];

  return (
    <div>
      {singleShipment ? <EditShipment singleShipment={singleShipment} /> : null}
    </div>
  );
};

export default Edit;
