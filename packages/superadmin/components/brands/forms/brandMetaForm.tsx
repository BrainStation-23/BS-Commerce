import { useState } from 'react';
import { NextComponentType } from 'next';

import FieldTemplate from '@/components/products/forms/fieldTemplate';

const BrandMetaForm: NextComponentType = () => {
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="brand-meta"
        id="brand-meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#brandMetaTab"
            aria-expanded="true"
            aria-controls="brandMetaTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col text-start px-3">
                <i
                  className="bi bi-meta col-1 px-1"
                  style={{ fontSize: '25px' }}
                />
                Brand Meta
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="brandMetaTab">
          <div className="card-body">
            <FieldTemplate
              label="Keywords"
              isRequired={true}
              fieldID="keywords"
              fieldType="text"
            />
            <FieldTemplate
              label="metaTitle"
              isRequired={false}
              fieldID="metaTitle"
              fieldAs="textarea"
            />
            <FieldTemplate
              label="metaDescription"
              isRequired={false}
              fieldID="metaDescription"
              fieldType="checkbox"
              fieldClass="check-box mt-2  "
            />
            <FieldTemplate
              label="SEFN"
              isRequired={false}
              fieldID="SEFN"
              fieldType="checkbox"
              fieldClass="check-box mt-2  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandMetaForm;
