import EditShipment from '@/components/sales/editShipment';
import React, { useEffect, useState } from 'react';
import type { NextPage } from "next";
import { useRouter } from 'next/router';
import getData from "@/components/sales/service/get-shipping-data.service";

const Edit: NextPage = () => {
    const router = useRouter();
    const id = "" + `${router.query.id}`;
    const [shipment, setShipment] = useState<any>([]);
    
    useEffect(() => {
        const data = getData();
        setShipment(data);
    }, []);

    const singleShipment = shipment.filter((data: any) => data.id == id);
    return (
        <div>
            <EditShipment singleShipment={singleShipment[0]}/>
        </div>
    );
};

export default Edit;