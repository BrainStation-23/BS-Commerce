import { ErrorMessage, Field, Form, Formik } from 'formik';
import Tooltips from '../../../global/tooltip';
import { toast } from 'react-toastify';
import { useState } from 'react';

const OrderSearchWindow = ({ setProducts, allProducts, handleSearch }: any) => {
  const [id, setId] = useState('');

  return (
    <>
      <div className="card border-1 mt-3 rounded">
        <div className="card-header">
          <span className="ms-2 fs-4">Search</span>
        </div>

        <div>
          <form
            style={{
              padding: '5px',
              margin: '5px',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '5px',
                margin: '5px',
              }}
              className="form-col"
            >
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                  marginBottom: '5px'
                }}
                className="col"
              >
                Start Date
                <input type="date" className="form-control" placeholder="" />
              </div>
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                  marginBottom: '5px'
                }}
                className="col"
              >
                Start Time
                <input type="time" className="form-control" placeholder="" />
              </div>
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                  marginBottom: '5px'
                }}
                className="col"
              >
                End Date
                <input type="date" className="form-control" placeholder="" />
              </div>
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                  marginBottom: '5px'
                }}
                className="col"
              >
                End Time
                <input type="time" className="form-control" placeholder="" />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '5px',
                margin: '5px',
              }}
              className="form-col"
            >
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                }}
                className="col"
              >Order Status
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected> </option>
                  <option value="1">Pending</option>
                  <option value="2">Processing</option>
                  <option value="3">Completed</option>
                  <option value="4">Cancelled</option>
                </select>
              </div>
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                }}
                className="col"
              >Payment Status
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected> </option>
                  <option value="1">Pending</option>
                  <option value="2">Paid</option>
                  <option value="3">Cancelled</option>
                </select>
              </div>
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                }}
                className="col"
              >
                Shipping Status
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected> </option>
                  <option value="1">NotYetShipped</option>
                  <option value="2">PartiallyShipped</option>
                  <option value="3">Shipped</option>
                  <option value="4">Delivered</option>
                </select>
              </div>
              <div
                style={{
                  padding: '5px',
                  marginRight: '100px',
                }}
                className="col"
              >
                Order ID
                <input
                      type="text"
                      className="form-control"
                      id="orderId"
                      placeholder=""
                      onChange={(e) => {
                        setId(e.target.value);
                      }}
                    />
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  height: '50px',
                  width: '200px',
                  margin: '15px',
                }}
                className="btn btn-primary"
                onClick={() => handleSearch(id)}
              >
                <i className="bi bi-search"></i> Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OrderSearchWindow;
