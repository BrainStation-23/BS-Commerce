import AccountDetailsFormField from './account-detailFormFieldTemplate';
interface props {
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
}
const AccountDetailsForm: React.FC<props> = ({
  isPhoneVerified,
  isEmailVerified,
}) => {
  return (
    <>
      <AccountDetailsFormField
        id="firstName"
        fieldType="text"
        label="First Name"
      />
      <AccountDetailsFormField
        id="lastName"
        fieldType="text"
        label="Last Name"
      />
      <AccountDetailsFormField
        id="phone"
        fieldType="text"
        label="Phone"
        verified={isPhoneVerified}
      />
      <AccountDetailsFormField
        id="email"
        fieldType="text"
        label="Email"
        verified={isEmailVerified}
      />
    </>
  );
};

export default AccountDetailsForm;
