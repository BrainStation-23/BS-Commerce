import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import TableInfo from "../../../components/global/table";
import { useRouter } from "next/router";
import { userAPI } from "../../../APIs";
import Link from "next/link";

const tableHead = ["Admin name", "Email", "Password Edit", "Edit"];

const initData = {
  name: "",
};

const Admin: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);

  const [adminsList, setAdminsList] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return adminsList?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, adminsList]);

  const router = useRouter();

  useEffect(() => {
    async function loadAdmins() {
      const response = await userAPI.getAdmins();
      let admins: any = [];
      if (response) {
        admins = [response];
      }
      setAdminsList(admins);
    }
    loadAdmins();
  }, []);

  return (
    <div className="px-5">
      <div className="d-flex justify-content-between px-2 py-3">
        <div className="fs-3">Admin</div>
        <Link href="/users/admin/create">
          <a className="btn btn-primary btn-raised">Add Admin</a>
        </Link>
      </div>
      <div className="card mt-2 p-3 shadow-lg p-3 mb-5 bg-light rounded">
        <TableInfo
          tHead={tableHead}
          currentPage={currentPage}
          totalCount={adminsList?.length}
          pageSize={PageSize}
          setCurrentPage={setCurrentPage}
          setPageSize={setPageSize}
        >
          {currentTableData?.map((data: any, index: number) => (
            <tr key={index}>
              <td>{data?.displayName}</td>
              <td>{data?.email}</td>

              <td className="text-center">
                <button
                  className="btn btn-light"
                  onClick={() =>
                    router.push({
                      pathname: `/users/admin/edit/${data.id}`,
                      query: { name: "pass" },
                    })
                  }
                >
                  <i className="bi bi-pen-fill pe-1 align-middle"></i>
                  Edit Password
                </button>
              </td>
              <td className="text-center">
                <button
                  className="btn btn-light"
                  onClick={() =>
                    router.push({
                      pathname: `/users/admin/edit/${data.id}`,
                      query: { name: "edit" },
                    })
                  }
                >
                  <i className="bi bi-pen-fill pe-1 align-middle"></i>
                  Edit Info
                </button>
              </td>
            </tr>
          ))}
        </TableInfo>
      </div>
    </div>
  );
};

export default Admin;
