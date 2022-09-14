import { useState } from 'react';
import { NextComponentType } from 'next';
import Image from 'next/image';

import FieldTemplate from '@/components/products/forms/fieldTemplate';

const PhotosForm: NextComponentType = () => {
  const [btnToggler, setBtnToggler] = useState('bi-plus-lg');

  const toggleButton = () => {
    if (btnToggler == 'bi-plus-lg') setBtnToggler('bi-dash');
    else setBtnToggler('bi-plus-lg');
  };
  return (
    <>
      <div
        className="card card-secondary card-outline my-4"
        data-card-name="photos"
        id="photos"
      >
        <div className="card-header with-border d-flex justify-content-between align-items-center">
          <button
            className="btn w-100 text-top invisible m-0 h-auto p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#photosTab"
            aria-expanded="true"
            aria-controls="photosTab"
            onClick={() => toggleButton()}
          >
            <div className="card-title row align-items-center visible">
              <div className="fs-5 col px-3 text-start">
                <i
                  className="bi bi-image-fill col-1  px-1"
                  style={{ fontSize: '25px' }}
                />
                Photos
              </div>
              <div className="col-1">
                <i className={`bi ${btnToggler}`} />
              </div>
            </div>
          </button>
        </div>
        <div className="collapse " id="photosTab">
          <div className="card-body">
            <div className="row justify-content-center">
              {(document.getElementById('photosUrl') as HTMLInputElement)
                ?.value ? (
                <Image
                  className="col-2"
                  src={
                    (document.getElementById('photosUrl') as HTMLInputElement)
                      ?.value
                  }
                  alt="No Image"
                  width={130}
                  height={130}
                />
              ) : (
                'No preview'
              )}
            </div>
            <FieldTemplate
              label="URL"
              isRequired={false}
              fieldID="photosUrl"
              fieldType=""
              fieldAs="textarea"
              extraClass=""
              fieldClass=""
            />

            <FieldTemplate
              label="Title"
              isRequired={false}
              fieldID="photosTitle"
              fieldType="text"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
            <FieldTemplate
              label="Display Order"
              isRequired={false}
              fieldID="displayOrderPhotos"
              fieldType="number"
              fieldAs=""
              extraClass=""
              fieldClass=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotosForm;
