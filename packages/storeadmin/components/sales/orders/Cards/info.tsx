import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import Tooltip from './Ui Helpers/tooltip';
import Modal from '../../service/modal';
import { userAPI } from '@/APIs';
interface Props {
  singleOrderInfo: any;
}

const Info: FC<Props> = ({ singleOrderInfo }) => {
  const [orderStatusValue, setOrderStatusValue] = useState(
    singleOrderInfo.orderStatus
  );
  const [paymentStatusValue, setPaymentStatusValue] = useState(
    singleOrderInfo.paymentStatus
  );
  const [orderState, setOrderState] = useState('Pending');
  const [paymentState, setPaymentState] = useState('Pending');
  const handleOrderStatus = (event: any) => {
    setOrderState(event.target.id);
  };

  const handlePaymentStatus = (event: any) => {
    setPaymentState(event.target.id);
  };

  const [orderEnum, setOrderEnum] = useState<any>();
  const [paymentEnum, setPaymentEnum] = useState<any>();
  const getAllOrderEnum = async () => {
    const res = await userAPI.getOrderEnum();
    res ? setOrderEnum(res?.data?.orderStatusEnums) : '';
  };

  const getAllPaymentEnum = async () => {
    const res = await userAPI.getOrderEnum();
    res ? setPaymentEnum(res?.data?.paymentStatusEnums) : '';
  };

  useEffect(() => {
    getAllOrderEnum();
    getAllPaymentEnum();
  }, []);

  const [modal, setModal] = useState({
    cancel_order: false,
    change_status: false,
    change_payment_status: false,
    change_status_save: false,
    change_payment_status_save: false,
  });

  const handleCancelOff = () => {
    setModal({ ...modal, cancel_order: false });
  };

  const handleChange = () => {
    setModal({ ...modal, change_status: true });
  };

  const handlePaymentChange = () => {
    setModal({ ...modal, change_payment_status: true });
  };

  const handleSaveStatus = () => {
    setModal({ ...modal, change_status_save: true });
  };

  const handlePaymentSaveStatus = () => {
    setModal({ ...modal, change_payment_status_save: true });
  };

  const handleSaveStatusOff = () => {
    setModal({ ...modal, change_status_save: false });
  };

  const handlePaymentSaveStatusOff = () => {
    setModal({ ...modal, change_payment_status_save: false });
  };

  const handlePositive = () => {
    setModal({ ...modal, change_status_save: false, change_status: false });
    const obj = {
      orderId: singleOrderInfo?.orderId,
      statusType: 'orderStatusEnums',
      statusValue: orderState,
    };
    setOrderStatusValue(orderState);
    userAPI.updateOrderStatus(obj);
  };

  const handlePaymentPositive = () => {
    setModal({
      ...modal,
      change_payment_status_save: false,
      change_payment_status: false,
    });
    const obj = {
      orderId: singleOrderInfo?.orderId,
      statusType: 'paymentStatusEnums',
      statusValue: paymentState,
    };
    setPaymentStatusValue(paymentState);
    userAPI.updatePaymentStatus(obj);
    // router.push('/Sales/Order/List');
  };

  return (
    <>
      <div
        style={{
          border: '1px solid #dddddd',
          textAlign: 'left',
          fontSize: '16px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <Tooltip label="Order Number" data={singleOrderInfo.orderId} />
        <Tooltip label={'Created on'} data={singleOrderInfo.orderedDate} />
        <Tooltip label={'Customer ID'} data={singleOrderInfo.userId} />

        <div className="row">
          <div className="col" style={{ marginLeft: '15%' }}>
            <Tooltip label={'Order status'} data={orderStatusValue} />
          </div>
          <div className="col">
            {modal.change_status ? (
              <div>
                <button
                  className="dropdown"
                  style={{
                    marginTop: '10px',
                    width: '30%',
                    padding: '10px',
                    border: '1px solid gray',
                    borderRadius: '5px',
                    textAlign: 'left',
                  }}
                  onClick={handleOrderStatus}
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
                    {orderState}
                  </a>
                  <div className="dropdown-menu">
                    <a id={orderEnum.Pending} className="dropdown-item">
                      {orderEnum.Pending}
                    </a>
                    <a id={orderEnum.Processing} className="dropdown-item">
                      {orderEnum.Processing}
                    </a>
                    <a id={orderEnum.Completed} className="dropdown-item">
                      {orderEnum.Completed}
                    </a>
                    <a id={orderEnum.Cancelled} className="dropdown-item">
                      {orderEnum.Cancelled}
                    </a>
                  </div>
                </button>
                <span
                  style={{
                    textAlign: 'left',
                    marginTop: '10px',
                    width: '25%',
                    marginLeft: '5%',
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
                    onClick={() => handleSaveStatus()}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      setModal({
                        ...modal,
                        change_status: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                  {modal.change_status_save ? (
                    <Modal
                      state={'change_status_save'}
                      handleStatus={handleSaveStatusOff}
                      handlePositive={handlePositive}
                    />
                  ) : (
                    <></>
                  )}
                </span>
              </div>
            ) : (
              <button
                type="button"
                className="btn btn-danger"
                style={{
                  backgroundColor: '#3c8dbc',
                  border: '1px solid #3c8dbc',
                }}
                onClick={() => handleChange()}
              >
                Change status
              </button>
            )}
          </div>
        </div>
      </div>

      {modal.cancel_order ? (
        <Modal state={'cancel_order'} handleStatus={handleCancelOff} />
      ) : (
        <div />
      )}

      <div
        style={{
          border: '1px solid #dddddd',
          textAlign: 'left',
          fontSize: '16px',
          padding: '20px',
          marginBottom: '20px',
        }}
      >
        <Tooltip label={'Order subtotal'} data={singleOrderInfo.totalCost} />
        <Tooltip label={'Order shipping'} data={singleOrderInfo.shippingCost} />
        <Tooltip label={'Order total'} data={singleOrderInfo.totalCost} />

        <Tooltip
          label={'Payment method'}
          data={singleOrderInfo.paymentMethod}
        />
        <div className="row">
          <div className="col" style={{ marginLeft: '15%' }}>
            <Tooltip label={'Payment status'} data={paymentStatusValue} />
          </div>
          <div className="col" style={{}}>
            {modal.change_payment_status ? (
              <div>
                <button
                  className="dropdown"
                  style={{
                    marginTop: '10px',
                    width: '30%',
                    padding: '10px',
                    border: '1px solid gray',
                    borderRadius: '5px',
                    textAlign: 'left',
                  }}
                  onClick={handlePaymentStatus}
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
                    {paymentState}
                  </a>
                  <div className="dropdown-menu">
                    <a id={paymentEnum.Pending} className="dropdown-item">
                      {paymentEnum.Pending}
                    </a>
                    <a id={paymentEnum.Paid} className="dropdown-item">
                      {paymentEnum.Paid}
                    </a>
                    <a id={paymentEnum.Cancelled} className="dropdown-item">
                      {paymentEnum.Cancelled}
                    </a>
                  </div>
                </button>
                <span
                  style={{
                    textAlign: 'left',
                    marginTop: '10px',
                    width: '25%',
                    marginLeft: '5%',
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
                    onClick={() => handlePaymentSaveStatus()}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() =>
                      setModal({
                        ...modal,
                        change_payment_status: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                  {modal.change_payment_status_save ? (
                    <Modal
                      state={'change_status_save'}
                      handleStatus={handlePaymentSaveStatusOff}
                      handlePositive={handlePaymentPositive}
                    />
                  ) : (
                    <></>
                  )}
                </span>
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
    </>
  );
};

export default Info;
