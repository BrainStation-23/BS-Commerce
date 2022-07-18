import { CustomerAddress } from 'models';
import { NextComponentType } from 'next';
import { useState } from 'react';
import AddNewAddressForm from './addNewAddressForm';

interface Props {
  singleAddress: CustomerAddress;
}

const SingleAddress: React.FC<Props> = ({ singleAddress }) => {
  const [showEditAddress, setShowEditAddress] = useState('hidden');
  const [showAddAddress, setShowAddAddress] = useState('hidden');

  const editButtonOnClick = () => {
    showEditAddress === ''
      ? setShowEditAddress('hidden')
      : setShowEditAddress('');
  };

  const addButtonOnClick = () => {
    showAddAddress === '' ? setShowAddAddress('hidden') : setShowAddAddress('');
  };

  return (
    <>
      {showEditAddress === 'hidden' && (
        <>
          <div className="mt-3 text-sm">
            <p>{singleAddress?.addressLine1!}</p>
            <p>{singleAddress?.postCode!}</p>
            <p>Bangladesh</p>
            <p>{singleAddress?.phone!}</p>
            <p>{singleAddress?.tag!}</p>
          </div>
          <div className="mt-5">
            {/* <Link href="/account/addresses"> */}
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => editButtonOnClick()}
            >
              Edit{' '}
            </span>
            {/* </Link> */}
            <span>| </span>
            <span className="cursor-pointer hover:text-blue-600">Delete</span>
          </div>
        </>
      )}
      {showEditAddress !== 'hidden' && (
        <>
          <div className={`${showEditAddress}`}>
            <hr className="my-2" />
            <p className="my-5 font-bold">Edit Address</p>
            <AddNewAddressForm
              user={{
                firstName: singleAddress?.firstName,
                lastName: singleAddress?.lastName,
                address1: singleAddress?.addressLine1,
                address2: singleAddress?.addressLine2,
                city: singleAddress?.state,
                postalCode: singleAddress?.postCode,
                phone: singleAddress?.phone,
                tag: singleAddress?.tag,
              }}
              cancelForm={editButtonOnClick}
            />
            <hr className="my-2" />
          </div>
        </>
      )}
    </>
  );
};

export default SingleAddress;
