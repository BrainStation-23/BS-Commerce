import Link from 'next/link';
import Image from 'next/image';

import useTranslation from 'next-translate/useTranslation';
import { toast } from 'react-toastify';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks/index';
import { setModalState } from 'store/slices/modalSlice';
import {
  deleteComparedProductPublic,
  storeCompare,
} from 'store/slices/compareSlice';
import { userAPI } from 'APIs';
import { ICompareItems } from '@bs-commerce/models';
import CrossIcon from '../common/icons/crossIcon';
import ElementButton from '../common/buttons/elementButton';
import TextButton from '../common/buttons/textButton';

interface Props {
  setModal: boolean;
}

const ComparisonModal: React.FC<Props> = ({ setModal }) => {
  const [showModal, setShowModal] = useState(setModal);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const currency = useAppSelector((state) => state.persistedReducer.currency);

  const comparisonProducts = useAppSelector(
    (state) => state?.persistedReducer?.compare?.compareList?.items
  );

  const token = useAppSelector(
    (state) => state?.persistedReducer?.auth?.access_token
  );

  const handleDeleteCompareItem = async (productId: string) => {
    if (token) {
      try {
        const res = await userAPI.deleteFromCompare(productId);
        if ('data' in res!) {
          dispatch(storeCompare(res.data));
        }
      } catch (error) {
        toast.error('Some error happend. Try again.', {
          containerId: 'bottom-right',
        });
      }
    } else {
      dispatch(deleteComparedProductPublic(productId));
    }
  };

  if (comparisonProducts?.length === 0) return null;

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex justify-center bg-neutral-900/40 bg-opacity-75 transition-opacity dark:text-dark_text">
            <div className="my-auto overflow-auto md:w-3/4 md:overflow-x-hidden">
              <div className="flex w-full flex-col rounded-lg bg-white shadow-lg dark:bg-slate-800">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 text-xl ">
                  <h3 className="mr-3 font-bold">{t('compare:title')}</h3>
                  <ElementButton
                    onClickFunction={() => {
                      setShowModal(false);
                      dispatch(setModalState(false));
                    }}
                  >
                    <CrossIcon />
                  </ElementButton>
                </div>
                <div className="overflow-auto p-6 sm:-mx-6 lg:-mx-8">
                  <div className="inline-block py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="w-full border text-center md:table-fixed">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className={`col col-span-1 border-r px-6 py-4 text-sm font-normal`}
                            >
                              {t('compare:action')}
                            </th>
                            {comparisonProducts?.map(
                              (product: ICompareItems) => {
                                return (
                                  <React.Fragment key={product?.productId}>
                                    <th
                                      scope="col"
                                      className={`col col-span-1 border-r px-6 py-4 text-sm font-normal`}
                                    >
                                      <TextButton
                                        onClickFunction={() => {
                                          handleDeleteCompareItem(
                                            product?.productId
                                          );
                                        }}
                                        text={t('common:remove')}
                                      />
                                    </th>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-100 dark:hover:bg-black">
                            <td className="border-r px-6 py-4 text-sm font-normal">
                              {t('compare:product_name')}
                            </td>
                            {comparisonProducts?.map(
                              (product: ICompareItems) => {
                                return (
                                  <React.Fragment key={product.productId}>
                                    <td className="border-r px-6 py-4 text-sm font-normal">
                                      {product?.productDetails?.info?.name!}
                                    </td>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </tr>
                          <tr className="border-b hover:bg-gray-100 dark:hover:bg-black">
                            <td className="border-r px-6 py-4 text-sm font-normal">
                              {t('compare:product_image')}
                            </td>
                            {comparisonProducts?.map(
                              (product: ICompareItems) => {
                                return (
                                  <React.Fragment key={product?.productId}>
                                    <td className="border-r p-5 align-top font-normal">
                                      <div>
                                        <Image
                                          src={
                                            product?.productDetails?.photos![0]!
                                          }
                                          alt={
                                            product?.productDetails?.info?.name!
                                          }
                                          height={100}
                                          width={100}
                                          layout="fixed"
                                        />
                                        <br />
                                        {product?.productDetails?.info
                                          ?.oldPrice ? (
                                          <span className="text-sm text-red-600">
                                            {t('compare:on_sale')}{' '}
                                            {Intl.NumberFormat(
                                              `${currency.currencyLanguage}-${currency.currencyStyle}`,
                                              {
                                                style: 'currency',
                                                currency: `${currency.currencyName}`,
                                              }
                                            ).format(
                                              product?.productDetails?.info
                                                .price!
                                            )}
                                          </span>
                                        ) : (
                                          <span className="font-normal text-red-600">
                                            {Intl.NumberFormat(
                                              `${currency.currencyLanguage}-${currency.currencyStyle}`,
                                              {
                                                style: 'currency',
                                                currency: `${currency.currencyName}`,
                                              }
                                            ).format(
                                              product?.productDetails?.info
                                                .price!
                                            )}
                                          </span>
                                        )}
                                        <br />
                                        <Link
                                          href={{
                                            pathname: `/product/${product
                                              ?.productDetails?.meta
                                              ?.friendlyPageName!}`,
                                          }}
                                          passHref
                                          className="text-xs text-gray-500/100 hover:text-red-600 dark:text-dark_text"
                                        >
                                          {t(
                                            'compare:view_product'
                                          ).toUpperCase()}
                                        </Link>
                                      </div>
                                    </td>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </tr>
                          <tr className="border-b hover:bg-gray-100 dark:hover:bg-black">
                            <td className="border-r px-6 py-4 text-sm font-normal">
                              {t('compare:product_description')}
                            </td>
                            {comparisonProducts?.map(
                              (product: ICompareItems) => {
                                return (
                                  <React.Fragment key={product?.productId}>
                                    <td className="border-r px-6 py-4 text-sm font-normal">
                                      {
                                        product?.productDetails?.info
                                          ?.shortDescription
                                      }
                                    </td>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </tr>
                          <tr className="border-b hover:bg-gray-100 dark:hover:bg-black">
                            <td className="border-r px-6 py-4 text-sm font-normal">
                              {t('compare:availability')}
                            </td>
                            {comparisonProducts?.map(
                              (product: ICompareItems) => {
                                return (
                                  <React.Fragment key={product?.productId}>
                                    <td className="border-r px-6 py-4 text-sm font-normal">
                                      {t('compare:available')}
                                    </td>
                                  </React.Fragment>
                                );
                              }
                            )}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ComparisonModal;
