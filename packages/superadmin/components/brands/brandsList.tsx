import { FC, useMemo, useState } from 'react';
import Link from 'next/link';

import Table from '@/components/global/table/table';
import Pagination from '@/components/global/pagination';
import { Brand } from 'models';
import { userAPI } from '@/APIs';

interface Props {
  brandsList: Brand[];
  setBrands: Function;
}

const BrandsList: FC<Props> = ({ brandsList, setBrands }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);
  const [BrandID, setBrandID] = useState('');

  const onChangeForList = async () => {
    const brandsList = await userAPI.getBrands();
    setBrands(brandsList);
  };

  const deleteProductFunction = async () => {
    const res = await userAPI.deleteBrand(BrandID);
    if (res) {
      onChangeForList();
    }
    setModal({
      ...modal,
      delete: false,
    });
  };

  const onClickForDelete = (id: string) => {
    setBrandID(id);
    setModal({ ...modal, delete: true });
  };
  const [modal, setModal] = useState({
    delete: false,
  });
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return brandsList?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, brandsList]);

  const columns = [
    {
      label: 'Brand name',
      path: 'name',
      content: (data: Brand, key: any) => (
        <td className="text-center align-middle">{data?.info[key]}</td>
      ),
    },
    {
      label: 'Display Order',
      path: 'displayOrder',
      content: (data: Brand, key: any) => (
        <td className="text-center align-middle">{data?.info[key]}</td>
      ),
    },
    {
      label: 'Published',
      path: 'published',
      content: (data: Brand, key: any) => (
        <td className="p-auto m-auto text-center">
          {data?.info[key] ? <i className="bi bi-check-lg"></i> : '-'}
        </td>
      ),
    },
    {
      label: 'Allow To Select Page Size',
      path: 'allowToSelectPageSize',
      content: (data: Brand, key: any) => (
        <td className="p-auto m-auto text-center">
          {data?.info[key] ? <i className="bi bi-check-lg"></i> : '-'}
        </td>
      ),
    },
    {
      label: 'Edit',
      path: 'id',
      content: (data: Brand, key: any) => (
        <td className="text-center align-middle">
          <Link
            href={{
              pathname: `/Brands/Create/[id]`,
              query: { id: data?.[key] },
            }}
            passHref
          >
            <button className="btn btn-default btn-outline-info">
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
      content: (data: Brand, key: any) => (
        <td className="text-center align-middle">
          <Link
            href={{
              pathname: `/Brands/View/[id]`,
              query: { id: data?.[key] },
            }}
            passHref
          >
            <button className="btn btn-default btn-outline-primary">
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
      content: (data: Brand) => (
        <td className="text-center align-middle">
          <button
            className="btn btn-default btn-outline-danger"
            onClick={() => onClickForDelete(data.id)}
          >
            <i className="bi bi-trash3-fill me-2 align-middle"></i>
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
            <a href="#" style={{ textDecoration: 'none', marginLeft: '5px' }}>
              Brands
            </a>
          </p>
          <Table items={currentTableData} columns={columns} />

          <div className="">
            {brandsList?.length > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={brandsList.length}
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
                    Delete
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

export default BrandsList;
