import EditOrder from '@/components/sales/editOrder';
import React, { useEffect, useState } from 'react';
import type { NextPage } from "next";
import { useRouter } from 'next/router';
import getData from '@/components/sales/service/get-data.service';

const Edit:NextPage = () => {
    const router = useRouter();
    const id = "" + `${router.query.id}`;
    const [order, setOrder] = useState<any>([]);
    
    useEffect(() => {
        const data = getData();
        setOrder(data);
    }, []);

    const singleOrder = order.filter((data: any) => data.id == id);

    return (
        <div>
            <EditOrder singleOrder={singleOrder[0]}/>
        </div>
    );
};

export default Edit;