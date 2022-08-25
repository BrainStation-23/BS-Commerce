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
  const [checked, setChecked] = useState(singleAddress.isDefault);

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
      <div>
        <div>
          <div className="relative mt-3 text-sm lg:w-2/3">
            <div className="md:flex md:flex-row md:justify-between">
              <p>
                {singleAddress?.firstName!} {singleAddress?.lastName!}
              </p>
              <label className="absolute top-0 right-0 inline-flex cursor-pointer items-center ">
                <input
                  type="checkbox"
                  value=""
                  className="peer sr-only"
                  checked={checked}
                  onClick={() => {
                    setChecked(!checked);
                  }}
                />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                <span className="ml-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300 md:block">
                  Default
                </span>
              </label>
            </div>
            <p>{singleAddress?.addressLine1!}</p>
            <p>{singleAddress?.state!}</p>
            <p>{singleAddress?.postCode!}</p>
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
        </div>
      </div>
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
