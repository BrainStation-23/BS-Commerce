import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import Tooltips from '../global/tooltip';
import { searchDiscountSchema } from './schema/discountSchema';

const SearchDiscount = () => {
  return <>
    <div className="float-end pb-2">
      <Link href="/promotion/discount/create" className="btn btn-primary">

        <i className="bi bi-plus-square-fill mx-2"></i>Add new
      </Link>
    </div>
    <Formik
      initialValues={{
        SearchDiscountName: '',
        SearchDiscountType: '',
        goToDiscountByCode: '',
        SearchDiscountStartDate: '',
        SearchDiscountEndtDate: '',
      }}
      onSubmit={(values, actions) => {
        const data = {
          SearchDiscountName: values.SearchDiscountName,
          SearchDiscountType: values.SearchDiscountType,
          goToDiscountByCode: values.goToDiscountByCode,
          SearchDiscountStartDate: values.SearchDiscountStartDate,
          SearchDiscountEndtDate: values.SearchDiscountEndtDate,
        };

        actions.setSubmitting(false);
      }}
      validationSchema={searchDiscountSchema}
    >
      {(formikprops) => {
        return (
          <Form onSubmit={formikprops.handleSubmit}>
            <div className="card border-1 mt-5 rounded px-2">
              <div className="card-body">
                <div className="row search-row opened">
                  <div className="search-text">
                    <i
                      className="bi bi-search float-start mx-2"
                      aria-hidden="true"
                    />
                    <p className="float mx-2">Search</p>{' '}
                  </div>
                </div>
                <div className="search-body ">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper row row-cols-auto float-md-end">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchDiscountStartDate"
                            >
                              Start Date
                            </label>
                            <Tooltips title="Search by Start Date." />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            type="date"
                            className="form-control"
                            id="SearchDiscountStartDate"
                            name="SearchDiscountStartDate"
                          />
                        </div>
                      </div>

                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper row row-cols-auto float-md-end">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchDiscountEndtDate"
                            >
                              End Date
                            </label>
                            <Tooltips title="Search by End date" />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            type="date"
                            className="form-control"
                            id="SearchDiscountEndtDate"
                            name="SearchDiscountEndtDate"
                          />
                          <div className="errMsg text-danger text-red-600"></div>
                        </div>
                      </div>

                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper row row-cols-auto float-md-end">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchDiscountType"
                            >
                              Discount Type
                            </label>
                            <Tooltips title="Search by Discount Type." />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            as="select"
                            className="form-control"
                            data-val="true"
                            data-val-required="The Category field is required."
                            id="SearchDiscountType"
                            name="SearchDiscountType"
                          >
                            <option defaultValue="0">All</option>
                            <option value="1">Assigned to order total</option>
                            <option value="2">Assigned to products</option>
                            <option value="3">Assigned to catagories</option>
                            <option value="4">
                              Assigned to manufacturers
                            </option>
                            <option value="5">Assigned to shipping</option>
                            <option value="6">
                              Assigned to order subtotal
                            </option>
                          </Field>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper row row-cols-auto float-md-end">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="goToDiscountByCode"
                            >
                              Cupon Code
                            </label>
                            <Tooltips title="Search by a specific cupon code." />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            type="text"
                            className="form-control"
                            id="goToDiscountByCode"
                            name="goToDiscountByCode"
                          />
                          <div className="errMsg text-danger text-red-600"></div>
                        </div>
                      </div>
                      <div className="form-group row py-1">
                        <div className="col-md-4">
                          <div className="label-wrapper row row-cols-auto float-md-end">
                            <label
                              className="col-form-label col px-1"
                              htmlFor="SearchDiscountName"
                            >
                              Discount Name
                            </label>
                            <Tooltips title="Discount name." />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <Field
                            className="form-control text-box single-line"
                            id="SearchDiscountName"
                            name="SearchDiscountName"
                            type="text"
                          />
                          <div className="errMsg text-danger text-red-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center ">
                      <button
                        type="submit"
                        id="search-discounts"
                        className="btn btn-primary p my-1 px-4"
                        style={{ borderRadius: '10px' }}
                      >
                        <i className="bi bi-search float-start "></i>
                        <p className="float-end m-0 px-2 ">Search</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  </>;
};

export default SearchDiscount;
