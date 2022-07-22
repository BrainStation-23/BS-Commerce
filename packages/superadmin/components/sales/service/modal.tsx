import React from 'react';

interface STATUS {
  state: string;
}

const Modal = ({ state, handleStatus, handlePositive }: any) => {
  return (
    <div
      className="modal"
      style={{ display: `{modal.${state}` ? 'block' : 'none' }}
    >
      <div
        className="modal-backdrop"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
        onClick={() =>
          // close modal when outside of modal is clicked
          handleStatus()
        }
      >
        <div
          className="modal-content"
          onClick={(e) => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
          style={{
            textAlign: 'left',
            width: '30%',
            marginLeft: '40%',
            marginTop: '5%',
            border: '1px solid gray',
            boxShadow: '1px 1px 10px gray',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <div className="container">
            <h1>Are you sure?</h1>
            <hr />
            <p>Are you sure you want to perform this action?</p>
            <br />

            <div className="clearfix">
              <button
                type="button"
                className="btn btn-primary"
                style={{marginRight: '10px', width: '70px'}}
                onClick={() => handlePositive()}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-light"
                style={{
                  border: '1px solid gray',
                  backgroundColor: 'gray',
                  color: 'white',
                }}
                onClick={() => handleStatus()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
