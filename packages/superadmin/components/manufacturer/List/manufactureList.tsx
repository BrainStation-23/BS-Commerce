import React, { FC, useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import Table from '../../global/table/table';
import Pagination from '../../global/pagination';
// import SingleManufacturer from "../SubComponents/singleManufacturer";
// import Modal from "../../sales/service/modal";
import { userAPI } from '../../../APIs';
import { useRouter } from 'next/router';
interface Props {
  manufactureData: any;
  // getAllManufacturers: any;
  setManufactureData: any;
}

const ManufactureList: FC<Props> = ({
  manufactureData,
  // getAllManufacturers,
  setManufactureData,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);
  const [ProductID, setProductID] = useState('');
  const router = useRouter();
  // const [modal, setModal] = useState({
  //     delete: false,
  //   });

  const onChangeForList = async (pageSize: number) => {
    const manufactureData = await userAPI.getManufacturer(pageSize);
    // setProducts(productsList);
    setManufactureData(manufactureData);
  };

  const deleteProductFunction = async () => {
    const res = await userAPI.deleteManufacturer(ProductID, router);
    if (res) {
      onChangeForList(1000);
      // alert("successfull");
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
    return manufactureData.manufacturers?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, manufactureData]);
  const columns = [
    {
      label: 'Picture',
      path: 'url',
      content: (data: any, key: any, index: any) => (
        <td className="text-center">
          <img
            // src={`${data?.photos[0][key]}`}
            src={data.picture}
            height="75px"
            width={'75px'}
            alt="..."
          ></img>
        </td>
      ),
    },
    {
      label: 'Manufacturer name',
      path: 'name',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">{data.name}</td>
      ),
    },
    {
      label: 'Display Order',
      path: 'displayOrder',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          {data?.displayOrder}
        </td>
      ),
    },
    {
      label: 'Published',
      path: 'published',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          {data?.isPublished ? <i className="bi bi-check-lg"></i> : '-'}
        </td>
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
            onClick={() => onClickForDelete(data.id)}
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
              Manufacturers
            </a>
          </p>
          <Table items={currentTableData} columns={columns} />

          <div className="">
            {manufactureData?.manufacturers?.length > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={manufactureData.manufacturers.length}
                pageSize={PageSize}
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
              />
            ) : null}
          </div>
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
              // close modal when outside of modal is clicked
              setModal({ ...modal, delete: false });
            }}
          >
            <div
              className="modal-content"
              onClick={(e) => {
                // do not close modal if anything inside modal content is clicked
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

export default ManufactureList;
