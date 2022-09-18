import React, { useState, FC } from 'react';
import ShowData from './showData';
interface Props {
  singleOrderInfo: any;
}
const Products: FC<Props> = ({ singleOrderInfo }) => {
  const products = singleOrderInfo?.products;
  console.log('info', singleOrderInfo);

  console.log(products);

  return (
    <div>
      <table
        className="table"
        style={{
          border: '1px solid #dddddd',
          textAlign: 'left',
          margin: '10px',
        }}
      >
        <thead style={{ backgroundColor: '#dddddd' }}>
          <tr style={{ fontSize: '20px' }}>
            <th>
              <span>Picture</span>
            </th>
            <th>
              <span>Product name</span>
            </th>
            <th>
              <span>Price</span>
            </th>
            <th>
              <span>Quantity</span>
            </th>
            <th>
              <span>Total</span>
            </th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid #dddddd' }}>
          {products?.length > 0
            ? products.map((data: any) => {
                return <ShowData key={data.productId} data={data} />;
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
