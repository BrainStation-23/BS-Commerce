import useTranslation from 'next-translate/useTranslation';
import ProfileFormField from './profileFormFieldTemplate';
interface props {
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
}
const ProfileForm: React.FC<props> = ({
  isPhoneVerified,
  isEmailVerified,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <ProfileFormField
        id="name"
        fieldType="text"
        label={t('myAccount:name')}
      />
      {/* <ProfileFormField
        id="firstName"
        fieldType="text"
        label="First Name"
      />
      <ProfileFormField
        id="lastName"
        fieldType="text"
        label="Last Name"
      /> */}
      <ProfileFormField
        id="phone"
        fieldType="text"
        label={t('myAccount:phone')}
        verified={isPhoneVerified}
      />
      <ProfileFormField
        id="email"
        fieldType="text"
        label={t('myAccount:email')}
        verified={isEmailVerified}
      />
    </>
  );
};

export default ProfileForm;
