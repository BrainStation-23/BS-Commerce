import { ErrorMessage, Field, Form, Formik } from 'formik';
import Tooltips from '../../global/tooltip';
import { toast } from 'react-toastify';

const ManufacturerSearchWindow = ({ setProducts, allProducts }: any) => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          published: '',
        }}
        onSubmit={(values, actions) => {
          const data = {
            name: values.name,
            published: values.published,
          };
        }}
        //    actions.setSubmitting(false);
      >
        {(formikprops) => {
          return <Form onSubmit={formikprops.handleSubmit}></Form>;
        }}
      </Formik>
    </>
  );
};

export default ManufacturerSearchWindow;
