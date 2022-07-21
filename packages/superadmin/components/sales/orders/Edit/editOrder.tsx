import Info from '../Cards/info';
import Biling from '../Cards/billing';
import Shipping from '../Cards/shipping';
import Products from '../Cards/products';
import Notes from '../../service/notes';
import { useState } from 'react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  singleOrderInfo: any;
}

const EditOrder: FC<Props> = ({ singleOrderInfo }) => {
  return (
    <>
      <main className="px-5">
        <div className="d-flex justify-content-between flex-md-nowrap align-items-center border-bottom mb-3 flex-wrap pt-3 pb-2">
          <div className="d-flex justify-content-between ">
            <h1 className="h2">Edit order details </h1>
            <div
              style={{ marginLeft: '10px', fontSize: '20px' }}
              className="mb-2 pt-1 pb-2"
            >
              <Link href="/Sales/Order/List" passHref>
                <p
                  style={{
                    cursor: 'pointer',
                    color: '#3c8dbc',
                  }}
                >
                  <i className="bi bi-arrow-left-circle-fill"></i> back to order
                  list
                </p>
              </Link>
            </div>
          </div>
        </div>

        <button
          // onClick={() => setInfo(!info)}
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{
            width: '100%',
            border: '1px solid #dddddd',
            textAlign: 'left',
            fontSize: '20px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <i className="bi bi-info-lg"></i> Info
        </button>

        <Info singleOrderInfo={singleOrderInfo} />

        <button
          data-bs-toggle="collapse"
          data-bs-target="#collapse1Example"
          aria-expanded="false"
          aria-controls="collapse1Example"
          style={{
            width: '100%',
            border: '1px solid #dddddd',
            textAlign: 'left',
            fontSize: '20px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <i className="bi bi-truck"></i> Billing and shipping
        </button>
        <Biling singleOrderInfo={singleOrderInfo} />
        <Shipping singleOrderInfo={singleOrderInfo} />

        <button
          data-bs-toggle="collapse"
          data-bs-target="#collapse2Example"
          aria-expanded="false"
          aria-controls="collapse2Example"
          style={{
            width: '100%',
            border: '1px solid #dddddd',
            textAlign: 'left',
            fontSize: '20px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <i className="bi bi-list-ul"></i> Products
        </button>
        <Products singleOrderInfo={singleOrderInfo} />
      </main>
    </>
  );
};

export default EditOrder;
