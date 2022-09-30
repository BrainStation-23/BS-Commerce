import useTranslation from 'next-translate/useTranslation';
import AccountDetailsFormField from './account-detailFormFieldTemplate';
interface props {
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
}
const AccountDetailsForm: React.FC<props> = ({
  isPhoneVerified,
  isEmailVerified,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <AccountDetailsFormField
        id="name"
        fieldType="text"
        label={t('myAccount:Name')}
      />
      {/* <AccountDetailsFormField
        id="firstName"
        fieldType="text"
        label="First Name"
      />
      <AccountDetailsFormField
        id="lastName"
        fieldType="text"
        label="Last Name"
      /> */}
      <AccountDetailsFormField
        id="phone"
        fieldType="text"
        label={t('myAccount:Phone')}
        verified={isPhoneVerified}
      />
      <AccountDetailsFormField
        id="email"
        fieldType="text"
        label={t('myAccount:Email')}
        verified={isEmailVerified}
      />
    </>
  );
};

export default AccountDetailsForm;
