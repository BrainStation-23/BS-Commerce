import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
interface Props {
  singleOrderInfo: any;
}
const Billing: FC<Props> = ({ singleOrderInfo }) => {
  const router = useRouter();
  const id = '' + `${router.query.id}`;

  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{
          display: 'flex',
          border: '1px solid #dddddd',
          textAlign: 'center',
          fontSize: '16px',
          padding: '20px',
          marginBottom: '20px',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '50%',
            border: '1px solid #dddddd',
            textAlign: 'center',
            fontSize: '16px',
            padding: '20px',
            margin: '20px',
          }}
        >
          <div
            style={{
              border: '1px solid #dddddd',
              textAlign: 'center',
              fontSize: '16px',
              padding: '20px',
              margin: '20px',
            }}
          >
            <table
              style={{
                fontSize: '20px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <tr>
                <th
                  style={{
                    borderLeft: '1px solid #dddddd',
                    borderTop: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Billing Address
                </th>
                <th
                  style={{
                    borderTop: '1px solid #dddddd',
                    borderRight: '1px solid #dddddd',
                    padding: '20px',
                  }}
                ></th>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  First name
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.firstName}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Last Name
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.lastName}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Email
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.email}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Address
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.addressLine1}
                  {singleOrderInfo.billingAddress.addressLine2}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  City
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.city}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Country
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Bangladesh
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Post Code
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.postCode}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Phone Number
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.billingAddress.phoneNumber}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div
          style={{
            width: '50%',
            border: '1px solid #dddddd',
            textAlign: 'center',
            fontSize: '16px',
            padding: '20px',
            margin: '20px',
          }}
        >
          <div
            style={{
              border: '1px solid #dddddd',
              textAlign: 'center',
              fontSize: '16px',
              padding: '20px',
              margin: '20px',
            }}
          >
            <table
              style={{
                fontSize: '20px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <tr>
                <th
                  style={{
                    borderLeft: '1px solid #dddddd',
                    borderTop: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Shipping Address
                </th>
                <th
                  style={{
                    borderTop: '1px solid #dddddd',
                    borderRight: '1px solid #dddddd',
                    padding: '20px',
                  }}
                ></th>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  First Name
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.firstName}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Last Name
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.lastName}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Email
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.email}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Address
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.addressLine1}
                  {singleOrderInfo.shippingAddress.addressLine2}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  City
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.city}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Country
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Bangladesh
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Post Code
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.postCode}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  Phone Number
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '20px',
                  }}
                >
                  {singleOrderInfo.shippingAddress.phoneNumber}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
