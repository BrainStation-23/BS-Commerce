import { User } from "models";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { userAPI } from "../../../../APIs";
import EditForm from "../../../../components/admin/editForm";
import SubmitForm from "../../../../components/global/submitForm";
import { adminCreate } from "../../../../utils/types";

const EditCustomer: NextPage<{ adminData: User; id: string }> = ({
  adminData,
  id,
}) => {
  const [objProps, setObjprops] = useState({});

  const initData: adminCreate = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const router = useRouter();
  const q = router.query.name;

  const saveHandlerAdmin = async (values: adminCreate, isPass: boolean) => {
    const adminUpdate: any = {
      firstName: values.firstName,
      lastName: values.lastName,
     
    };
    await userAPI.updateAdmin(adminUpdate);
  };
  const saveHandlerPassword = async (values: any, isPass: boolean) => {
    const adminUpdate: any = {
      password: values.newPassword,
      newPassword: values.Password,
     
    };
    ;
    await userAPI.changePassword(adminUpdate);
  };

  return (
    <div className="px-5">
      <SubmitForm
        isDisabled={false}
        title="Admin"
        isHiddenSaveWithContinue={true}
        getProps={setObjprops}
        isHiddenSave={false}
        submitBtnText="Save"
        continueBtnText="Save and Continue Edit"
        isDelete={true}
        link={"/users/admin"}
        isEdit={true}
      >
        <EditForm
          {...objProps}
          initData={id ? adminData : initData}
          saveHandlerAdmin={ saveHandlerAdmin }
          saveHandlerPassword={ saveHandlerPassword }
          id={id}
          isPass={q === "pass"}
        />
      </SubmitForm>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const adminData = await userAPI.getAdmins();
  return {
    props: {
      adminData: adminData || {},
      id: context.params.id,
    },
  };
}

export default EditCustomer;
