import type { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import AddressesComponent from '@/modules/myAccount/addresses/components';
import { userAPI } from 'APIs';
import { Customer } from '@bs-commerce/models';
import { useAppDispatch } from 'store/hooks';
import { storeCustomerDetails } from 'store/slices/userSlice';
import { storeAddresses } from 'store/slices/customerAddressSlice';

interface Props {
  customerProfile: Customer;
}

const Addresses: NextPage<Props> = ({ customerProfile }) => {
  const dispatch = useAppDispatch();
  dispatch(storeCustomerDetails(customerProfile!));
  dispatch(storeAddresses(customerProfile?.addresses!));

  return <AddressesComponent />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);
  const customerProfile = await userAPI.getCustomerProfile(token.token);

  return {
    props: {
      customerProfile: customerProfile?.data,
    },
  };
};

export default Addresses;
