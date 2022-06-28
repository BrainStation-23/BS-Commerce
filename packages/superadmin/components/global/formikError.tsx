import React, { FC } from "react";

interface Props {
  name: string;
  errors: any;
  touched: any;
}

const FormikError: FC<Props> = ({ errors, name, touched }) => {
  const errorRowIndex = `${name}`?.split(".")[1];
  const errorRowName = `${name}`?.split(".")[2];
  const errorMasseage = errors?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];
  const touchedMasseage =
    touched?.itemLists?.[errorRowIndex]?.[`${errorRowName}`];
  return (
    <p
      style={{
        fontSize: "0.9rem",
        fontWeight: 400,
        width: "100%",
        marginTop: "5px",
        marginBottom: "0",
      }}
      className={errors?.[name] || errorMasseage ? "text-danger" : "d-none"}
    >
      {errors && errors?.[name] && touched && touched[name]
        ? errors[name].value || errors[name]
        : ""}

      {errors && errorMasseage && touched && touchedMasseage
        ? errorMasseage.value || errorMasseage
        : ""}
    </p>
  );
};

export default FormikError;
