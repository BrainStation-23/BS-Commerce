import { useState } from 'react';
import { NextComponentType } from 'next';

import CustomSelect from '@/components/products/CustomSelect.component';
import FieldTemplate from '@/components/products/forms/fieldTemplate';

const MetaForm: NextComponentType = () => {
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  const keywordOptions = [
    {
      label: 'mobile',
      value: 'mobile',
    },
    {
      label: 'car',
      value: 'car',
    },
    {
      label: 'video',
      value: 'video',
    },
    {
      label: 'Fruit',
      value: 'Fruit',
    },
    {
      label: 'color',
      value: 'color',
    },
  ];
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="meta"
        data-hideattribute="ProductPage.HideInfoBlock"
        id="meta"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#metaTab"
            aria-expanded="true"
            aria-controls="metaTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col px-3 text-start">
                <i
                  className="bi bi-meta col-1 px-1"
                  style={{ fontSize: '25px' }}
                />
                Meta
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="metaTab">
          <div className="card-body">
            <FieldTemplate
              label="Keywords"
              isRequired={false}
              fieldID="keywords"
              fieldType="text"
            />
            <FieldTemplate
              label="Title"
              isRequired={false}
              fieldID="metaTitle"
              fieldType="text"
            />
            <FieldTemplate
              label="Description"
              isRequired={false}
              fieldID="metaDescription"
              fieldType="text"
            />
            <FieldTemplate
              label="Friendly Page Name"
              isRequired={true}
              fieldID="metaFriendlyPageName"
              fieldType="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaForm;
