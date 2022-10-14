import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { userAPI } from 'APIs';
import { storeUserToken } from 'store/slices/authSlice';
import { addToShippingInfo } from 'store/slices/checkoutSlice';
import { storeAddresses } from 'store/slices/customerAddressSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import { informationSchema } from '@/modules/checkout/components/schemas/checkout.schema';
import ChevronLeft from '@/modules/common/icons/chevronLeft';
import FieldTemplate from '../formInput/fieldTemplate';
import { CustomerAddress } from '@bs-commerce/models';
import useTranslation from 'next-translate/useTranslation';

interface FormData {
  email: string;
  contact: string;
  sendNotificationCheckbox?: string;
  firstName: string;
  lastName: string;
  country?: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postCode: string;
  tag: string;
}

interface Props {
  setModal: Function;
}

const InformationForm: React.FC<Props> = ({ setModal }: Props) => {
  const [dropdownText, setDropdownText] = useState('Use a new address');
  const [showLabel, setShowLabel] = useState(true);
  const user = useAppSelector(
    (state) => state.persistedReducer.user.customerDetails
  );
  const handleLogout = () => {
    localStorage.clear();
    dispatch(storeUserToken(''));
    toast.error('Logged out successfully!', {
      containerId: 'bottom-right',
    });
  };

  const shippingInfo = useAppSelector(
    (state) => state.persistedReducer.checkout.shippingInfo
  );

  const addresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const token = useAppSelector(
    (state) => state.persistedReducer.auth.access_token
  );

  let initialValues = {
    email: user?.email,
    contact: shippingInfo?.phoneNumber
      ? shippingInfo?.phoneNumber
      : addresses?.length > 0
      ? addresses[0]?.phone
      : '',
    firstName: shippingInfo?.firstName
      ? shippingInfo?.firstName
      : addresses?.length > 0
      ? addresses[0]?.firstName
      : '',
    lastName: shippingInfo?.lastName
      ? shippingInfo?.lastName
      : addresses?.length > 0
      ? addresses[0]?.lastName
      : '',
    addressLine1: shippingInfo?.addressLine1
      ? shippingInfo?.addressLine1
      : addresses?.length > 0
      ? addresses[0]?.addressLine1
      : '',
    addressLine2: shippingInfo?.addressLine2
      ? shippingInfo?.addressLine2
      : addresses?.length > 0
      ? addresses[0]?.addressLine2
      : '',
    city: shippingInfo?.city
      ? shippingInfo?.city
      : addresses?.length > 0
      ? addresses[0]?.state
      : '',
    postCode: shippingInfo?.postCode
      ? shippingInfo?.postCode
      : addresses?.length > 0
      ? addresses[0]?.postCode
      : '',
    tag: shippingInfo?.tag
      ? shippingInfo?.tag
      : addresses?.length > 0
      ? addresses[0]?.tag
      : '',
    tag2: '',
  };

  const [update, setUpdate] = useState(initialValues);
  const [tags, setTags] = useState<string[]>([]);
  const customerAddresses = useAppSelector(
    (state) => state.persistedReducer.customerAddress.addresses
  );

  const setTagsOptions = () => {
    const ntags = new Set<string>();
    customerAddresses?.map((addressn) => {
      ntags.add(addressn?.tag);
    });
    const nArray: Array<string> = [];
    ntags.forEach((tag) => nArray.push(tag));
    nArray.length === tags.length ? '' : setTags(nArray);
  };
  const dispatch = useAppDispatch();
  // const { setModal } = props;

  const handlePreviousAddress = (detail: string, setFieldValue: Function) => {
    if (detail === 'Use a new address') {
      setShowLabel(true);
      setFieldValue('firstName', '');
      setFieldValue('lastName', '');
      setFieldValue('addressLine1', '');
      setFieldValue('addressLine2', '');
      setFieldValue('city', '');
      setFieldValue('postCode', '');
      setFieldValue('contact', '');
    } else {
      setShowLabel(false);
      const selectedAddress = addresses.find((address) => {
        return address.tag === detail;
      });
      setFieldValue('firstName', selectedAddress?.firstName);
      setFieldValue('lastName', selectedAddress?.lastName);
      setFieldValue('addressLine1', selectedAddress?.addressLine1);
      setFieldValue('addressLine2', selectedAddress?.addressLine2);
      setFieldValue('city', selectedAddress?.state);
      setFieldValue('postCode', selectedAddress?.postCode);
      setFieldValue('contact', selectedAddress?.phone);
    }
  };

  const handleCheckoutSubmit = (data: FormData) => {
    const shippingData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: user?.email!,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      postCode: data.postCode,
      phoneNumber: data.contact,
      tag: data.tag,
    };
    dispatch(addToShippingInfo(shippingData));
    const obj = {
      info: false,
      ship: true,
      pay: false,
    };
    setModal(obj);
  };

  useEffect(() => {
    shippingInfo?.tag
      ? setDropdownText(shippingInfo.tag)
      : setDropdownText('Use a new address');
    addresses?.length > 0 ? setShowLabel(false) : setShowLabel(true);
    setTagsOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tags, shippingInfo]);
  const { t } = useTranslation();

  useEffect(() => {
    setTagsOptions();
  });

  const setAddCustomerNewAddress = async (data: CustomerAddress) => {
    await userAPI.addCustomerNewAddress(data);
    await userAPI.getCustomer(token).then((response) => {
      dispatch(storeAddresses(response?.data?.addresses));
    });
    setTagsOptions();
  };

  return (
    <div className="">
      <Formik
        enableReinitialize={true}
        initialValues={update}
        onSubmit={(values, actions) => {
          const data = {
            email: user?.email!,
            contact: values.contact,
            firstName: values.firstName,
            lastName: values.lastName,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2 ? values.addressLine2 : '',
            city: values.city ? values.city : '',
            postCode: values.postCode!,
            tag:
              dropdownText === 'Use a new address' ? values.tag2 : values.tag,
          };
          const addressData = {
            phone: values.contact,
            firstName: values.firstName,
            lastName: values.lastName,
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            state: values.city,
            postCode: values.postCode,
            tag:
              dropdownText === 'Use a new address' ? values.tag2 : values.tag,
          };
          if (values?.tag2) {
            setAddCustomerNewAddress(addressData);
          }
          handleCheckoutSubmit(data);
          actions.setSubmitting(false);
        }}
        validationSchema={informationSchema}
      >
        {(formikprops) => {
          return (
            <>
              <Form onSubmit={formikprops.handleSubmit}>
                <div className="mt-8">
                  <p className="text-lg">{t('checkout:shipping_address')}</p>

                  <div className="mt-5">
                    <div className="mb-3">
                      <Field
                        as="select"
                        id="tag"
                        name="tag"
                        className="input required peer block w-full rounded border border-gray-300  p-4 text-sm text-gray-500 focus:border-2 focus:border-black focus:outline-none focus:ring-0 dark:bg-dark_bg dark:text-dark_text dark:focus:border-gray-300"
                        onClick={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setDropdownText(event.target.value);
                          handlePreviousAddress(
                            event.target.value,
                            formikprops.setFieldValue
                          );
                        }}
                      >
                        <option>{dropdownText}</option>
                        {tags
                          ? tags?.map((tag: string) => {
                              return (
                                <React.Fragment key={tag}>
                                  {tag !== dropdownText ? (
                                    <option>{`${tag}`}</option>
                                  ) : null}
                                </React.Fragment>
                              );
                            })
                          : null}
                        {dropdownText !== 'Use a new address' ? (
                          <option>Use a new address</option>
                        ) : null}
                      </Field>
                      <div className="errMsg text-red-600">
                        <ErrorMessage name="tag" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                        <FieldTemplate
                          label={t('checkout:first_name')}
                          fieldID="firstName"
                          fieldType="text"
                          placeholder=" "
                        />
                        <FieldTemplate
                          label={t('checkout:last_name')}
                          fieldID="lastName"
                          fieldType="text"
                          placeholder=" "
                        />
                      </div>
                    </div>

                    <FieldTemplate
                      label={t('checkout:mobile_number')}
                      fieldID="contact"
                      fieldType="text"
                      placeholder=" "
                    />

                    <FieldTemplate
                      label={t('checkout:address_line1')}
                      fieldID="addressLine1"
                      fieldType="text"
                      placeholder=" "
                      extraClass="mb-3"
                    />

                    <FieldTemplate
                      label={t('checkout:address_line2')}
                      fieldID="addressLine2"
                      fieldType="text"
                      placeholder=" "
                      extraClass="mb-3"
                    />

                    <div className="row">
                      <div className="grid grid-cols-1 gap-0 sm:grid-cols-1 sm:gap-0 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-2 xl:gap-4">
                        <FieldTemplate
                          label={t('checkout:city')}
                          fieldID="city"
                          fieldType="text"
                          placeholder=" "
                          extraClass="mb-3"
                        />

                        <FieldTemplate
                          label={t('checkout:postal_code')}
                          fieldID="postCode"
                          fieldType="text"
                          placeholder=" "
                          extraClass="mb-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {showLabel ? (
                  <div>
                    <div className="">
                      <div className="mb-3">
                        <label htmlFor="tag2" className="pb-8 text-sm">
                          {t('checkout:tag2_label')}
                        </label>

                        <div className="mt-2">
                          <FieldTemplate
                            fieldID="tag2"
                            fieldType="text"
                            placeholder="E.g. Home, Office, Others etc."
                            isRequired={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="flex flex-col flex-wrap items-center gap-5 sm:flex-col md:flex-row">
                  <button
                    type="submit"
                    className="my-2 w-full rounded bg-black p-3 text-sm text-white dark:bg-dark_primary sm:w-full md:w-44"
                  >
                    {t('checkout:continue_to_shipping')}
                  </button>
                  <div className="flex flex-wrap items-center">
                    <div className="block items-center sm:block sm:items-center md:hidden lg:hidden xl:hidden">
                      <Link href="/cart" passHref>
                        <a className="text-decoration-none">
                          {<ChevronLeft />}
                        </a>
                      </Link>
                    </div>
                    <Link href="/cart" passHref>
                      <a className="text-decoration-none">
                        {t('checkout:return_to_cart')}
                      </a>
                    </Link>
                  </div>
                </div>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default InformationForm;
