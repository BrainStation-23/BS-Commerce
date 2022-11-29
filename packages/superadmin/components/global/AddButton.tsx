import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  link: string;
  icon?: string;
}

const AddButton: FC<Props> = ({ title, link, icon = "bi bi-file-plus" }) => {
  return (
    <div className="btn btn-primary ">
      <i className={`${icon} me-2 align-middle`}></i>
      <Link href={link} className="text-white text-decoration-none">
        {title}
      </Link>
    </div>
  );
};

export default AddButton;
