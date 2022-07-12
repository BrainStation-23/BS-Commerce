import React from 'react';
import CartDetails from "./cartTable/main";


const Detail = ({singleOrder} : any) => {

    return (
        <>
            <CartDetails singleOrder={singleOrder}/>
        </>
      
    );
};

export default Detail;