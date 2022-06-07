import type { GetServerSideProps, NextPage } from "next";
import ForgotPasswordComponent from "../../components/user-account/forgot-password";

const ForgotPassword: NextPage = () => {
  return (
    <>
       <ForgotPasswordComponent />
    </>
  );
};
export default ForgotPassword;
