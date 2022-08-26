import React, { FC, useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import Table from '../../global/table/table';
import Pagination from '../../global/pagination';
import { userAPI } from '../../../APIs';
import { useRouter } from 'next/router';
import Image from 'next/image';
import GetTagsSuccessResponse from 'models';
interface Props {
  TagData: any;
}

// const ManufactureList: FC<Props> = ({
//   manufactureData,
//   // getAllManufacturers,
//   setManufactureData,
// ) => {
const AllTagLists: FC<Props> = ({ TagData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);
  const [ProductID, setProductID] = useState('');
  const router = useRouter();
  const onChangeForList = async (pageSize: number) => {
    const manufactureData = await userAPI.getManufacturer(pageSize);
    // setProducts(productsList);
    // setManufactureData(manufactureData);
  };

  const deleteProductFunction = async () => {
    const res = await userAPI.deleteManufacturer(ProductID, router);
    if (res) {
      onChangeForList(1000);
    }
    setModal({
      ...modal,
      delete: false,
    });
  };

  const onClickForDelete = (id: string) => {
    setProductID(id);
    setModal({ ...modal, delete: true });
  };
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
      label: 'Tag ID',
      path: 'name',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">{data.id}</td>
      ),
    },
    {
      label: 'Tag Name',
      path: 'displayOrder',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">{data?.name}</td>
      ),
    },
    {
      label: 'Edit',
      path: 'id',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          <Link
            href={{
              pathname: `/Manufacturer/Edit/[id]`,
              query: { id: data?.id },
            }}
            passHref
          >
            <button className="btn btn-outline-info">
              <span>
                <i className="bi bi-pencil me-2 align-middle"></i>
              </span>
              Edit
            </button>
          </Link>
        </td>
      ),
    },
    {
      label: 'View',
      path: 'id',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          <Link
            href={{
              pathname: `/Manufacturer/View/[id]`,
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
    {
      label: 'Delete',
      path: 'id',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          <button
            className="btn btn-outline-danger"
            // onClick={() => onClickForDelete(data.id)}
          >
            <i className="bi bi-pencil me-2 align-middle"></i>
            Delete
          </button>
        </td>
      ),
    },
  ];
  return (
    <>
      <div className="card border-1 mt-3 rounded px-2">
        <div className="card-body">
          <p>
            Learn more about
            <a href="#" style={{ textDecoration: 'none', marginLeft: '15px' }}>
              Tags
            </a>
          </p>
          <Table items={currentTableData} columns={columns} />
        </div>
      </div>
      {modal.delete ? (
        <div
          className="modal"
          style={{ display: modal.delete ? 'block' : 'none' }}
        >
          <div
            className="modal-backdrop"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => {
              setModal({ ...modal, delete: false });
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => {
                e.stopPropagation();
              }}
              style={{
                textAlign: 'left',
                width: '30%',
                marginLeft: '40%',
                marginTop: '5%',
                border: '1px solid gray',
                boxShadow: '1px 1px 10px gray',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              <div className="container">
                <h1>Are you sure?</h1>
                <hr />
                <p>Are you sure you want to delete this item?</p>
                <br />

                <div className="clearfix">
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{
                      border: '1px solid gray',
                      backgroundColor: 'gray',
                      color: 'white',
                      marginRight: '10px',
                    }}
                    onClick={() =>
                      setModal({
                        ...modal,
                        delete: false,
                      })
                    }
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteProductFunction()}
                  >
                    <span id="deleteModal"> Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default AllTagLists;
