import Link from 'next/link';
import { FC, useMemo, useState } from 'react';

import { userAPI } from '@/APIs';
import Table from '@/components/global/table/table';
import Pagination from '@/components/global/pagination';
import { ProductListProps } from '@/components/products/models/index';
import Image from 'next/image';

const ProductsList: FC<ProductListProps> = ({ productsList, setProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [PageSize, setPageSize] = useState(7);
  const [ProductID, setProductID] = useState('');

  const onChangeForList = async (pageSize: number) => {
    const productsList = await userAPI.getProducts(pageSize);
    setProducts(productsList);
  };

  const deleteProductFunction = async () => {
    const res = await userAPI.deleteProduct(ProductID);
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

  const onClickForSort = (name: string) => {
    // console.log(name);
  };

  const [modal, setModal] = useState({
    delete: false,
  });
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return productsList?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, PageSize, productsList]);

  const columns = [
    {
      label: 'Picture',
      path: 'url',
      content: (data: any, key: any, index: any) => (
        <td className="text-center align-middle">
          <Image
            src={`${data?.photos[0][key]}`}
            height={75}
            width={75}
            alt="..."
          />
        </td>
      ),
    },
    {
      label: 'Product name',
      path: 'name',
      content: (data: any, key: any, index: any) => (
        <td className="align-middle">{data?.info[key]}</td>
      ),
    },
    {
      label: 'SKU',
      path: 'sku',
      content: (data: any, key: any, index: any) => (
        <td className="align-middle">{data?.info[key]}</td>
      ),
    },
    {
      label: 'Price',
      path: 'price',
      content: (data: any, key: any, index: any) => (
        <td className="text-center align-middle">{data?.info[key]}</td>
      ),
    },
    {
      label: 'Manufacturer',
      path: 'name',
      content: (data: any, key: any, index: any) => (
        <td className="text-center align-middle">
          {data?.manufacturer && data?.manufacturer[key]
            ? data?.manufacturer[key]
            : '---'}
        </td>
      ),
    },
    {
      label: 'Categories',
      path: 'categories',
      content: (data: any, key: any, index: any) => (
        <td className="text-center align-middle">
          {data?.info[key]}
          {data?.categories[0] ? data?.categories[0].name : '---'}
          {data?.categories?.map((category: any, index: any) =>
            index > 0 ? ` , ${category?.name}` : ''
          )}
        </td>
      ),
    },
    {
      label: 'Published',
      path: 'published',
      content: (data: any, key: any, index: any) => (
        <td className="p-auto m-auto text-center align-middle">
          {data?.info[key] ? <i className="bi bi-check-lg"></i> : 'X'}
        </td>
      ),
    },
    {
      label: 'Edit',
      path: 'id',
      content: (data: any, key: any, index: any) => (
        <td className="text-center align-middle">
          <Link
            href={{
              pathname: `/Product/Edit/[id]`,
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
      content: (data: any, key: any, index: any) => (
        <td className="text-center align-middle">
          <Link
            href={{
              pathname: `/Product/View/[id]`,
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
      content: (data: any, key: any, index: any) => (
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
              Product
            </a>
          </p>
          <Table
            items={currentTableData}
            columns={columns}
            onClickForSort={onClickForSort}
          />
          <div className="">
            {productsList?.length > 1 ? (
              <Pagination
                currentPage={currentPage}
                totalCount={productsList.length}
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

export default ProductsList;
