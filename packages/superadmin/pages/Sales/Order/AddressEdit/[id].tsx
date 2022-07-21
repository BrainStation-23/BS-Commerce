import EditAddress from "@/components/sales/editAddress";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Address:NextPage = () => {
    return (
        <div>
            <EditAddress/>
        </div>
    );
};

export default Address;