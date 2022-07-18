import { GetServerSideProps, NextPage } from 'next';
var cookie = require('cookie');

import AccountDetails from '@/components/myAccount/account-details';
import { userAPI } from 'APIs';
import { GetCustomerInformationSuccessResponse } from 'models';

interface Props {
  customerInformation: GetCustomerInformationSuccessResponse;
}

const MyAccount: NextPage<Props> = ({ customerInformation }: Props) => {
  console.log(customerInformation);

  return <AccountDetails customer={customerInformation.data} />;
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
