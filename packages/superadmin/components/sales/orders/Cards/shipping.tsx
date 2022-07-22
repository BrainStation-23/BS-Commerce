import { userAPI } from '@/APIs';
import React, { useEffect, useState, FC } from 'react';
import Modal from '../../service/modal';
import Tooltip from './Ui Helpers/tooltip';
interface Props {
  singleOrderInfo: any;
}
const Shipping: FC<Props> = ({ singleOrderInfo }) => {
  const [shippingStatusValue, setShippingStatusValue] = useState(singleOrderInfo.shippingStatus);
  const [modal, setModal] = useState({
    change_shipping_status: false,
    change_shipping_status_save: false,
  });
  const [shippingState, setShippingState] = useState('Delivered');

  const handleShippingStatus = (event: any) => {
    setShippingState(event.target.id);
  };

  const [shippingEnum, setShippingEnum] = useState<any>();

  const getAllShippingEnum = async () => {
    const res = await userAPI.getOrderEnum();
    res ? setShippingEnum(res?.data?.shippingStatusEnum) : '';
  };
  useEffect(() => {
    getAllShippingEnum();
  }, []);

  const handleShippingSaveStatus = () => {
    setModal({ ...modal, change_shipping_status_save: true });
  };

  const handleShippingSaveStatusOff = () => {
    setModal({ ...modal, change_shipping_status_save: false });
  };

  const handleShippingPositive = () => {
    setModal({ ...modal, change_shipping_status_save: false });
    const obj = {
      orderId: singleOrderInfo?.orderId,
      statusType: 'shippingStatusEnums',
      statusValue: shippingState,
    };
    setShippingStatusValue(shippingState);
    userAPI.updateShippingStatus(obj);
  };

  const handlePaymentChange = () => {
    setModal({ ...modal, change_shipping_status: true });
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
        <div className="row">
          <div className="col" style={{ marginLeft: '15%' }}>
            <Tooltip
              label={'Shipping status'}
              data={shippingStatusValue}
            />
          </div>
          <div className="col" style={{}}>
            {modal.change_shipping_status ? (
              <div>
                <button
                  className="dropdown"
                  style={{
                    marginTop: '10px',
                    width: '30%',
                    padding: '10px',
                    border: '1px solid gray',
                    textAlign: 'left',
                  }}
                  onClick={handleShippingStatus}
                >
                  <a
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      padding: '10px',
                    }}
                  >
                    {shippingState}
                  </a>
                  <div className="dropdown-menu">
                    <a id={shippingEnum.NotYetShipped} className="dropdown-item">
                      {shippingEnum.NotYetShipped}
                    </a>
                    <a id={shippingEnum.PartiallyShipped} className="dropdown-item">
                      {shippingEnum.PartiallyShipped}
                    </a>
                    <a id={shippingEnum.Shipped} className="dropdown-item">
                      {shippingEnum.Shipped}
                    </a>
                    <a id={shippingEnum.Delivered} className="dropdown-item">
                      {shippingEnum.Delivered}
                    </a>
                  </div>
                </button>
                <div
                  style={{
                    textAlign: 'left',
                    marginTop: '10px',
                    width: '25%',
                    marginLeft: '35%',
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      marginRight: '10px',
                      backgroundColor: '#3c8dbc',
                      border: '1px solid #3c8dbc',
                    }}
                    onClick={() => handleShippingSaveStatus()}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      setModal({
                        ...modal,
                        change_shipping_status: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                  {modal.change_shipping_status_save ? (
                    <Modal
                      state={'change_shipping_status_save'}
                      handleStatus={handleShippingSaveStatusOff}
                      handlePositive={handleShippingPositive}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  backgroundColor: '#3c8dbc',
                  border: '1px solid #3c8dbc',
                }}
                onClick={() => handlePaymentChange()}
              >
                Change status
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
