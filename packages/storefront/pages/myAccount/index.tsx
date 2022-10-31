import { GetServerSideProps, NextPage } from 'next';
import { useEffect } from 'react';
var cookie = require('cookie');

import Profile from '@/modules/myAccount/profile/components';
import { userAPI } from 'APIs';
import { GetCustomerInformationSuccessResponse } from '@bs-commerce/models';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { storeCustomerDetails } from 'store/slices/userSlice';

interface Props {
  customerInformation: GetCustomerInformationSuccessResponse;
}

const MyAccount: NextPage<Props> = ({ customerInformation }: Props) => {
  // console.log(customerInformation);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(storeCustomerDetails(customerInformation.data));
  }, [dispatch, customerInformation]);

  return <Profile />;
};
export default MyAccount;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = cookie?.parse(context.req?.headers?.cookie);
  const customerInformation = await userAPI.getCustomer(token.token);
  return {
    props: {
      customerInformation,
    },
  };
};
