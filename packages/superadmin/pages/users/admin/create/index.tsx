import type { NextPage } from "next";
import { useState } from "react";
import { userAPI } from "../../../../APIs";
import CreateForm from "../../../../components/admin/createForm";
import Accordion from "../../../../components/global/accordion";
import SubmitForm from "../../../../components/global/submitForm";
import { adminCreate } from "../../../../utils/types";

export const initData: adminCreate = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

const CreateCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});

  const saveHandler = async (values: adminCreate, cb: any) => {
    const adminCreate: any = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };
    await userAPI.createAdmin(adminCreate, cb);
  };

  return (
    <div
      className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
      data-testid="heading"
    >
      <SubmitForm
        isDisabled={false}
        title="Admin"
        isHiddenSaveWithContinue={true}
        getProps={setObjprops}
        isHiddenSave={false}
        submitBtnText="Save"
        continueBtnText="Save and Continue Edit"
        isDelete={false}
        link={"/users/admin"}
      >
        <Accordion title="Admin info" id={1} icon="bi bi-info-lg" show={true}>
          <CreateForm
            {...objProps}
            initData={initData}
            saveHandler={saveHandler}
          />
        </Accordion>
      </SubmitForm>
    </div>
  );
};

export default CreateCustomer;
