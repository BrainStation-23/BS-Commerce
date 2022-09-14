import { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { userAPI } from '@/APIs';
import { Brand } from '@bs-commerce/models';

const SearchWindow: FC<{ allbrands: Brand[]; setBrands: Function }> = ({
  allbrands,
  setBrands,
}) => {
  const handleSearchSubmit = async (data: string) => {
    if (data == '') {
      const brandsList = await userAPI.getBrands();

      if (brandsList) setBrands(brandsList);
    } else {
      // const searchProduct: any = await userAPI.searchProduct(data);
      // if (searchProduct) {
      //   setBrands([searchProduct]);
      // }
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          searchByBrandName: '',
        }}
        onSubmit={(values, actions) => {
          handleSearchSubmit(values.searchByBrandName);
          actions.setSubmitting(false);
        }}
      >
        {(formikprops) => {
          return (
            <Form onSubmit={formikprops.handleSubmit}>
              <div className="card border-1 mt-3 rounded">
                <div className="card-header">
                  <span className="ms-2 fs-4">Search</span>
                </div>
                <div className="card-body">
                  <div className="form-group row py-2">
                    <div className="col-md-3">
                      <div className="label-wrapper row row-cols-auto float-md-end px-2">
                        <label
                          className="col-form-label"
                          htmlFor="searchByBrandName"
                        >
                          Search Brands
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="Field-group Field-group-short ">
                        <div className="row">
                          <Field
                            className="form-control col rounded-start rounded-0 my-3 mt-0 "
                            id="searchByBrandName"
                            name="searchByBrandName"
                            type="text"
                          />
                        </div>
                        <div className="errMsg text-danger text-red-600">
                          <ErrorMessage name="searchByBrandName" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <span className="Field-group-append">
                        <button
                          type="submit"
                          id="goToProductBySku"
                          name="goToProductBySku"
                          className="btn btn-primary btn-flat rounded-end  rounded-0 my-0 "
                        >
                          Go
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SearchWindow;
