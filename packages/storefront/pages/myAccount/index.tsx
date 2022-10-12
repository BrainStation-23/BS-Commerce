import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import AccountDetails from '@/components/myAccount/accountDetails';
import { userAPI } from 'APIs';
import { GetCustomerInformationSuccessResponse } from '@bs-commerce/models';
import { useAppDispatch, useAppSelector } from 'customHooks/hooks';
import { storeCustomerDetails } from 'toolkit/userSlice';

interface Props {
  customerInformation: GetCustomerInformationSuccessResponse;
}

const MyAccount: NextPage<Props> = ({ customerInformation }: Props) => {
  // console.log(customerInformation);
  const dispatch = useAppDispatch();
  dispatch(storeCustomerDetails(customerInformation.data));

  return <AccountDetails />;
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
