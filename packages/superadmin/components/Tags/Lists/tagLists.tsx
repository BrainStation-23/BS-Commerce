import React, { FC, useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import Table from '../../global/table/table';
import Pagination from '../../global/pagination';
import { useRouter } from 'next/router';
import { Tag } from '@bs-commerce/models';
interface Props {
  TagData: Tag[];
}
const AllTagLists: FC<Props> = ({ TagData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(9);
  const [ProductID, setProductID] = useState('');
  const router = useRouter();
  const [modal, setModal] = useState({
    delete: false,
  });
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return TagData?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, TagData]);
  const columns = [
    {
      label: 'Tag Name',
      path: 'displayOrder',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">{data?.name}</td>
      ),
    },
    // {
    //   label: 'Edit',
    //   path: 'id',
    //   content: (data: any, key: any, index: any) => (
    //     <td className="p-auto m-auto text-center align-middle">
    //       <button className="btn disabled rounded border bg-white">
    //         <span>
    //           <i className="bi bi-pencil me-2 align-middle"></i>
    //         </span>
    //         Edit
    //       </button>
    //     </td>
    //   ),
    // },
    {
      label: 'View',
      path: 'id',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          <Link
            href={{
              pathname: `/tags/view/[id]`,
              query: { id: data?.[key] },
            }}
            passHref
          >
            <button className="btn btn-outline-success">
              <span>
                <i className="bi bi-eye me-2 align-middle"></i>
              </span>
              View
            </button>
          </Link>
        </td>
      ),
    },
  ];
  return (
    <>
      <div className="card border-1 mt-3 rounded px-2">
        <div className="card-body">
          {/* <p>
            Learn more about
            <a href="#" style={{ textDecoration: 'none', marginLeft: '15px' }}>
              Tags
            </a>
          </p> */}
          <Table items={currentTableData} columns={columns} />
          <div className="">
            {TagData.length > 0 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={TagData.length}
                pageSize={PageSize}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
              />
            ) : (
              'No Tag Data Found'
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTagLists;
