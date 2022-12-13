import { FC } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { userAPI } from '../../../APIs';
import Link from 'next/link';
import TagInfo from './forms/tagInfo';
import { tagSchema } from '../schema/tags.Schema';

const CreateTag: FC = () => {
  const router = useRouter();
  const handleSubmit = (data: any) => {
    userAPI.createTags(data, router);
  };
  return <>
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={(values, actions) => {
        const data = {
          name: values.name,
        };
        handleSubmit(data);
        actions.setSubmitting(false);
      }}
      validationSchema={tagSchema}
    >
      {(formikprops) => {
        return (
          <Form onSubmit={formikprops.handleSubmit}>
            <div
              className="content-header clearfix"
              style={{ paddingTop: '10px' }}
            >
              <h3 className="float-start">
                Add a Tag
                <span className="fs-5 p-3">
                  <Link href="/tags/" className="text-decoration-none">

                    <i className="bi bi-arrow-left-circle-fill p-2" />
                    <span style={{ fontSize: '14px' }}>
                      Back to Tag list
                    </span>

                  </Link>
                </span>
              </h3>
              <div className="float-end">
                <button
                  type="submit"
                  name="save"
                  className="btn btn-primary m-1"
                >
                  <i className="bi bi-save" />
                  <p className="float-end mx-1 my-0">Save</p>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <TagInfo />
            </div>
          </Form>
        );
      }}
    </Formik>
  </>;
};

export default CreateTag;
