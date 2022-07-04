import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userAPI } from "../../../../APIs";
import EditForm from "../../../../components/admin/editForm";
import SubmitForm from "../../../../components/global/submitForm";
import { adminCreate } from "../../../../utils/types";

const EditCustomer: NextPage = () => {
  const [objProps, setObjprops] = useState({});
  const [adminData, setAdminData] = useState<any>();

  const initData: adminCreate = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };

  const router = useRouter();
  const q = router.query.name;
  const id = `${router.query.id}`;

  const getAdmins = async () => {
    const adminData = await userAPI.getAdmins();

    adminData ? setAdminData(adminData) : "";
  };
  useEffect(() => {
    getAdmins();
  }, []);
  console.log(adminData);

  const saveHandlerAdmin = async (values: adminCreate, isPass: boolean) => {
    const adminUpdate: any = {
      firstName: values.firstName,
      lastName: values.lastName,
    };
    await userAPI.updateAdmin(adminUpdate, router);
  };
  const saveHandlerPassword = async (values: any, isPass: boolean) => {
    const adminUpdate: any = {
      password: values.newPassword,
      newPassword: values.Password,
    };
    await userAPI.changePassword(adminUpdate, router);
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
        {id ? (
          <EditForm
            {...objProps}
            initData={id ? adminData : initData}
            saveHandlerAdmin={saveHandlerAdmin}
            saveHandlerPassword={saveHandlerPassword}
            id={id}
            isPass={q === "pass"}
          />
        ) : (
          ""
        )}
      </SubmitForm>
    </div>
  );
};

export default EditCustomer;
