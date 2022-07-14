import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import AddButton from "../../../components/global/AddButton";
import TableInfo from "../../../components/global/table";
import { useRouter } from "next/router";
import SearchForm from "../../../components/admin/searchForm";
import Search from "../../../components/global/search";
import { userAPI } from "../../../APIs";

const thead = ["Admin name", "Email", "Password Edit", "Edit"];

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
      <div className="px-2 py-3 d-flex justify-content-between">
        <div className="fs-3">Admin</div>
        <div className="">
          <AddButton
            title="Add New"
            link={"/users/admin/create"}
            icon="bi bi-file-plus"
          />
        </div>
      </div>
      <Search>
        <SearchForm saveHandler={() => {}} initData={initData} />
      </Search>
      <div className="card mt-2 p-3">
        <div className="m-2 fs-5" data-testid="customers">
          Learn more about <span style={{ color: "#007bff" }}>admin</span>
        </div>
        <TableInfo
          tHead={thead}
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
                  <i className="bi bi-pen-fill pe-1 align-middle"></i>Password
                  Edit
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
                  <i className="bi bi-pen-fill pe-1 align-middle"></i>Edit
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
