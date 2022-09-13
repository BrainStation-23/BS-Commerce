import { useAppDispatch } from 'customHooks/hooks';
import { userAPI } from 'APIs';
import { CustomerAddress } from '@bs-commerce/models';
import { useState } from 'react';
import { deleteAddress } from 'toolkit/customerAddressSlice';

import AddNewAddressForm from '@/components/myAccount/addNewAddressForm';
import LocationIcon from '@/components/myAccount/icons/location';
import PencilIcon from '@/components/myAccount/icons/pencil';
import TrashIcon from '@/components/myAccount/icons/trash';
import Link from 'next/link';
import { Toggle } from 'atomic-components';

interface Props {
  singleAddress: CustomerAddress;
}

const SingleAddress: React.FC<Props> = ({ singleAddress }) => {
  const dispatch = useAppDispatch();

  const [showEditAddress, setShowEditAddress] = useState('hidden');
  const [checked, setChecked] = useState(singleAddress.isDefault);
  const [showDefault, setShowDefault] = useState<boolean>(false);

  const editButtonOnClick = () => {
    showEditAddress === ''
      ? setShowEditAddress('hidden')
      : setShowEditAddress('');
  };

  const handleDeleteAddress = async (addressId: string) => {
    await userAPI.deleteCustomerAddress(addressId);
    dispatch(deleteAddress(addressId));
  };

  const address =
    singleAddress?.addressLine1 +
    ', ' +
    singleAddress?.state +
    ' - ' +
    singleAddress?.postCode;

  return (
    <>
      <div
        className="relative"
        onMouseEnter={() => {
          setShowDefault(true);
        }}
        onMouseLeave={() => {
          setShowDefault(false);
        }}
      >
        <div className="mt-3 w-3/4 text-sm lg:w-2/3">
          {/* <div className="md:flex md:flex-row md:justify-between">
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
              <p>{singleAddress?.tag!}</p> */}

          <div className="rounded-lg border p-6">
            <div className="flex flex-wrap items-center justify-between">
              <Link href={`/myAccount/${singleAddress?.id}`} passHref>
                <a className="cursor-pointer">
                  <div className="flex gap-x-3">
                    <LocationIcon />
                    <p>{singleAddress?.tag!}</p>
                  </div>
                </a>
              </Link>
              <div className="flex gap-x-3">
                <div
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => editButtonOnClick()}
                >
                  <PencilIcon />
                </div>
                <div
                  className="cursor-pointer hover:text-blue-600"
                  onClick={() => handleDeleteAddress(singleAddress?.id!)}
                >
                  <TrashIcon />
                </div>
              </div>
            </div>
            <p className="ml-0 md:ml-9">{address}</p>
          </div>
        </div>

        {showDefault && (
          // <label className="absolute top-8 right-0 inline-flex cursor-pointer items-center lg:right-32 ">
          //   <input
          //     type="checkbox"
          //     value=""
          //     className="peer sr-only"
          //     checked={checked}
          //     onClick={() => {
          //       setChecked(!checked);
          //     }}
          //   />
          //   <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white  dark:border-gray-600 dark:bg-gray-700"></div>
          //   <span className="ml-3 hidden text-sm font-medium text-gray-900 dark:text-gray-300 md:block">
          //     Default
          //   </span>
          // </label>

          <Toggle
            type="checkbox"
            value=""
            checked={checked}
            labelClass="absolute top-8 right-0 inline-flex cursor-pointer items-center lg:right-32 "
            labelText="Default"
            onClick={() => {
              setChecked(!checked);
            }}
          />
        )}
      </div>

      {/* <div className="mt-5">
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => editButtonOnClick()}
            >
              Edit{' '}
            </span>
            <span>| </span>
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => handleDeleteAddress(singleAddress?.id!)}
            >
              Delete
            </span>
          </div> */}
      {showEditAddress !== 'hidden' && (
        <>
          <div className={`${showEditAddress} w-full`}>
            <hr className="mt-5 mb-2" />
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
