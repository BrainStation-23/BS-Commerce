import { useState } from 'react';
import { NextComponentType } from 'next';

import FieldTemplate from '@/components/products/forms/fieldTemplate';

const BrandInfoForm: NextComponentType = () => {
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="brand-info"
        id="brand-info"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#brandInfoTab"
            aria-expanded="true"
            aria-controls="brandInfoTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col text-start px-3">
                <i
                  className="bi bi-info-lg col-1 px-1"
                  style={{ fontSize: '25px' }}
                />
                Brand Info
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="brandInfoTab">
          <div className="card-body">
            <FieldTemplate
              label="Name"
              isRequired={true}
              fieldID="name"
              fieldType="text"
            />
            <FieldTemplate
              label="Description"
              isRequired={false}
              fieldID="description"
              fieldAs="textarea"
            />
            <FieldTemplate
              label="Allow To Select Page Size"
              isRequired={false}
              fieldID="allowToSelectPageSize"
              fieldType="checkbox"
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Published"
              isRequired={false}
              fieldID="published"
              fieldType="checkbox"
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="Display Order"
              isRequired={true}
              fieldID="displayOrder"
              fieldType="number"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandInfoForm;
