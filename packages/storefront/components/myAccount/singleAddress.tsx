import { useAppDispatch } from 'customHooks/hooks';
import { userAPI } from 'APIs';
import { CustomerAddress } from 'models';
import { useState } from 'react';
import { deleteAddress } from 'toolkit/customerAddressSlice';

import AddNewAddressForm from '@/components/myAccount/addNewAddressForm';

interface Props {
  singleAddress: CustomerAddress;
}

const SingleAddress: React.FC<Props> = ({ singleAddress }) => {
  const dispatch = useAppDispatch();

  const [showEditAddress, setShowEditAddress] = useState('hidden');

  const editButtonOnClick = () => {
    showEditAddress === ''
      ? setShowEditAddress('hidden')
      : setShowEditAddress('');
  };

  const handleDeleteAddress = async (addressId: string) => {
    await userAPI.deleteCustomerAddress(addressId);
    dispatch(deleteAddress(addressId));
  };

  return (
    <>
      <>
        <div className="mt-3 text-sm">
          <p>{singleAddress?.addressLine1!}</p>
          <p>{singleAddress?.state!}</p>
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
          <span
            className="cursor-pointer hover:text-blue-600"
            onClick={() => handleDeleteAddress(singleAddress?.id!)}
          >
            Delete
          </span>
        </div>
      </>
      {showEditAddress !== 'hidden' && (
        <>
          <div className={`${showEditAddress}`}>
            <hr className="my-2" />
            <p className="my-5 font-bold">Edit Address</p>
            <AddNewAddressForm
              user={{
                firstName: singleAddress?.firstName,
                lastName: singleAddress?.lastName,
                addressLine1: singleAddress?.addressLine1,
                addressLine2: singleAddress?.addressLine2,
                state: singleAddress?.state,
                postCode: singleAddress?.postCode,
                phone: singleAddress?.phone,
                tag: singleAddress?.tag,
              }}
              id={singleAddress?.id}
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
