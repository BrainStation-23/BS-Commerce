import useTranslation from 'next-translate/useTranslation';
import AccountDetailsFormField from './accountDetailFormFieldTemplate';
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
        label={t('myAccount:name')}
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
        label={t('myAccount:phone')}
        verified={isPhoneVerified}
      />
      <AccountDetailsFormField
        id="email"
        fieldType="text"
        label={t('myAccount:email')}
        verified={isEmailVerified}
      />
    </>
  );
};

export default AccountDetailsForm;
