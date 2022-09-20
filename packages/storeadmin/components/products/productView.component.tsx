import PhotosCard from '@/components/products/viewCards/photosCard';
import MetaCard from '@/components/products/viewCards/metaCard.Component';
import ProductInfoCard from '@/components/products/viewCards/productInfo.card';
import ManufacturerCard from '@/components/products/viewCards/manufacturerCard.comonent';
import CaegoryCard from '@/components/products/viewCards/categoryCard.component';
import { ViewProductInterface } from '@/components/products/models/index';
import Link from 'next/link';

const ViewProduct: React.FC<ViewProductInterface> = (
  props: ViewProductInterface
) => {
  const { product } = props;

  return (
    <>
      {product ? (
        <div>
          <div className="content-header clearfix mt-3">
            <h1 className="float-start">
              View product details
              <span className="fs-5 p-3">
                <Link href="/Product">
                  <a className="text-decoration-none ">
                    <i className="bi bi-arrow-left-circle-fill p-2" />
                    Back to product list
                  </a>
                </Link>
              </span>
            </h1>
          </div>

          <div className="mt-4">
            <ProductInfoCard product={product} />
            <MetaCard product={product} />
            <PhotosCard product={product} />
            <ManufacturerCard product={product} />
            <CaegoryCard categories={product.categories} />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ViewProduct;
