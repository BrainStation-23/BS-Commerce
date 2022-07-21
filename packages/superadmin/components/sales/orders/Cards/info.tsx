import React, { FC } from 'react';
import { useState, useEffect } from 'react';
import Tooltip from './Ui Helpers/tooltip';
import { Field, Form, Formik } from 'formik';
import Modal from '../../service/modal';
import { userAPI } from '@/APIs';
interface Props {
  singleOrderInfo: any;
}

const Info: FC<Props> = ({ singleOrderInfo }) => {
  const [orderEnum, setOrderEnum] = useState<any>();
  const getAllOrderEnum = async () => {
    const res = await userAPI.getOrderEnum();
    res ? setOrderEnum(res?.data?.orderStatusEnums) : '';
  };
  useEffect(() => {
    getAllOrderEnum();
  }, []);

  function handleSearchSubmit(data: any) {
    console.log(data);
  }

  const [modal, setModal] = useState({
    cancel_order: false,
    change_status: false,
    change_status_save: false,
    save_order_totals: false,
    refund: false,
    total: false,
  });

  const handleCancel = () => {
    setModal({ ...modal, cancel_order: true });
  };

  const handleCancelOff = () => {
    setModal({ ...modal, cancel_order: false });
  };

  const handleChange = () => {
    setModal({ ...modal, change_status: true });
  };

  const handleTotal = () => {
    setModal({ ...modal, total: true });
  };

  const handleSaveOrderTotal = () => {
    setModal({ ...modal, save_order_totals: true });
  };

  const handleSaveOrderTotalOff = () => {
    setModal({ ...modal, save_order_totals: false });
  };

  const handleSaveStatus = () => {
    setModal({ ...modal, change_status_save: true });
  };

  const handleSaveStatusOff = () => {
    setModal({ ...modal, change_status_save: false });
  };

  const handleRefund = () => {
    setModal({ ...modal, refund: true });
  };

  const handleRefundOff = () => {
    setModal({ ...modal, refund: false });
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
            <Tooltip
              label={'Order status'}
              data={singleOrderInfo.orderStatus}
            />
          </div>
          <div className="col" style={{}}>
            {modal.change_status ? (
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
                >
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      padding: '10px',
                    }}
                  >
                    {orderEnum.Pending}
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Processing
                    </a>
                    <a href="#" className="dropdown-item">
                      Complete
                    </a>
                    <a href="#" className="dropdown-item">
                      Cancelled
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
                  <p>
                    This option is only for advanced users (not recommended to
                    change manually). All appropriate actions (such as inventory
                    adjustment, sending notification emails, reward points, gift
                    card activation/deactivation, etc) should be done manually
                    in this case.
                  </p>
                  {modal.change_status_save ? (
                    <Modal
                      state={'change_status_save'}
                      handleStatus={handleSaveStatusOff}
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
        <Tooltip
          label={'Payment status'}
          data={singleOrderInfo.paymentStatus}
        />
      </div>
    </>
  );
};

export default Info;
