import type { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import Address from '@/components/myAccount/address';
import { userAPI } from 'APIs';
import { Customer } from 'models';
import { useAppDispatch } from 'customHooks/hooks';
import { storeCustomerDetails } from 'toolkit/userSlice';
import { storeAddresses } from 'toolkit/customerAddressSlice';

interface Props {
  customerProfile: Customer;
}

const Addresses: NextPage<Props> = ({ customerProfile }) => {
  const dispatch = useAppDispatch();
  dispatch(storeCustomerDetails(customerProfile));
  dispatch(storeAddresses(customerProfile?.addresses!));

  return <Address />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);
  const customerProfile = await userAPI.getCustomerProfile(token.token);
  return {
    props: {
      customerProfile: customerProfile,
    },
  };
};

export default Addresses;
