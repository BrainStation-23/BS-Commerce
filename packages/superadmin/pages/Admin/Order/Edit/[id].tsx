import React, {  useEffect, useState } from 'react';
import type { NextPage } from "next";
import { useRouter } from 'next/router';
import getData from '@/components/sales/service/get-data.service';
import EditOrder from '@/components/sales/editOrder';

const Edit:NextPage = () => {
    const router = useRouter();
    const id = "" + `${router.query.id}`;
    const [order, setOrder] = useState<any>([]);

    useEffect(() => {
        const data = getData();
        setOrder(data);
    }, []);

    const filteredOrder = order?.filter((data: any) => data.id == id);
    const singleOrder = filteredOrder[0];
  
    return (
        <div>
            {singleOrder ? <EditOrder singleOrder={singleOrder}/> : null}
        </div>
    );
};

export default Edit;