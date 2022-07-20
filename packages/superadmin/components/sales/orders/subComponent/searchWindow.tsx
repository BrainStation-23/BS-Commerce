import { ErrorMessage, Field, Form, Formik } from 'formik';
import Tooltips from '../../../global/tooltip';
import { toast } from 'react-toastify';

const OrderSearchWindow = ({ setProducts, allProducts }: any) => {
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
                }}
                className="col"
              >
                End Time
                <input type="time" className="form-control" placeholder="" />
              </div>
              <button
                type="submit"
                style={{
                  height: '50px',
                  width: '100px',
                  margin: '15px',
                }}
                className="btn btn-primary"
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
