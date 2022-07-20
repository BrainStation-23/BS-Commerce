import React from 'react';
import { FC } from 'react';

interface TOOL {
  label: string;
  data: string;
}

const Tooltip: FC<TOOL> = ({ label, data }) => {
  return (
    <div>
      <>
        <div className="row mt-1">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3">
            <p className="float-lg-end float-xl-end">
              <strong className="fs-6 me-1">{label}</strong>
            </p>
          </div>
          {
            <div className="col" style={{ marginLeft: '5px' }}>
              <p>{data}</p>
            </div>
          }
        </div>
      </>
    </div>
  );
};

export default Tooltip;
