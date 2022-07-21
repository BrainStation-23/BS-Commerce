import React, { useEffect, useState, FC } from 'react';
import Pagination from '../../pagination';
import getData from '../service/get-shipping-data.service';
import Tooltip from './Ui Helpers/tooltip';
interface Props {
  singleOrderInfo: any;
}
const Shipping: FC<Props> = ({ singleOrderInfo }) => {
  const [editMethod, setEditMethod] = useState(false);
  const [saveMethod, setSaveMethod] = useState(false);

  const handleEditShippingMethod = () => {
    setEditMethod(true);
  };

  const handleSaveShippingMethod = () => {
    setSaveMethod(true);
  };

  return (
    <div>
      <div
        style={{
          border: '1px solid #dddddd',
          textAlign: 'left',
          fontSize: '20px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <Tooltip
          label={'Shipping method'}
          data={singleOrderInfo?.shippingMethod}
        />
        <Tooltip
          label={'Shipping status'}
          data={singleOrderInfo.shippingStatus}
        />
      </div>
    </div>
  );
};

export default Shipping;
