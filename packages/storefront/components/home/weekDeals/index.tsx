import Link from 'next/link';

import { SwiperSlide } from 'swiper/react';
import { useAppSelector } from 'customHooks/hooks';
import { NextComponentType } from 'next';

import SwiperGrid from '@/components/global/components/swipergrid';
import Container from '@/components/global/components/container';
import Picture from '@/components/global/components/product/common/picture';
import Icon from '@/components/global/components/icon';
import { CustomerProduct } from '@bs-commerce/models';

const WeekDeals: NextComponentType = () => {
  const products = useAppSelector(
    (state) => state.persistedReducer.product.publicProducts
  );
  const getMinimumProduct = () => {
    const w = window.innerWidth;
    if (w >= 980) return 6;
    if (w >= 768) return 3;
    return 2;
  };
  return (
    <>
      <Container className="max-w-7xl">
        <div className="mb-6 text-center">
          <p className="font-serif text-lg italic">Recently added our store</p>
          <h1 className="text-bold text-4xl ">Deals Of The Weeks</h1>
        </div>
        <SwiperGrid
          slidesPerViewmobile={2}
          slidesPerView768={3}
          slidesPerView980={5}
          rows={1}
          loop={products?.length > getMinimumProduct() ? true : false}
        >
          {products &&
            products.length > 0 &&
            products.map((product: CustomerProduct) => (
              <SwiperSlide key={product.id}>
                <Link
                  href={{
                    pathname: `/product/${product.meta.friendlyPageName}`,
                    // query: {
                    //   id: product.id,
                    //   name: product.info.name,
                    // },
                  }}
                  // as={`product/${product.info.name}`}
                >
                  <div className="mb-0 overflow-hidden" key={product.id}>
                    <div className="duration-0 group cursor-pointer transition hover:bg-white hover:duration-700">
                      <div className="max-w-sm overflow-hidden rounded">
                        <div className="relative flex flex-col items-center justify-center">
                          <div className="relative overflow-hidden text-white transition-all duration-700">
                            <div className="relative inset-0 z-0 bg-cover bg-center">
                              <Picture
                                height={212}
                                width={212}
                                src={product.photos![0].url!}
                                alt={product.tags![0]}
                              />

                              {product?.info?.oldPrice !== 0 ? (
                                <div className="absolute top-3 left-3 rounded-lg border border-[#40a944] bg-[#40a944] px-1 py-1 text-xs text-white">
                                  <p>Sale</p>
                                </div>
                              ) : null}

                              {product?.info?.oldPrice !== 0 ? (
                                <div className="absolute top-3 right-3 rounded-lg border border-[#40a944] bg-[#40a944] px-1 py-1 text-xs text-white">
                                  <p>{`-$${Math.abs(
                                    product?.info?.oldPrice -
                                      product?.info?.price
                                  )}`}</p>
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-black duration-300 hover:-translate-y-3 hover:opacity-70 md:opacity-0">
                            <Icon product={product} />
                          </div>

                          <div className="py-4 text-center">
                            <Link
                              href={{
                                pathname: `/product/${product.meta.friendlyPageName}`,
                                // query: {
                                //   id: product.id,
                                //   name: product.info.name,
                                // },
                              }}
                              // as={`product/${product.info.name}`}
                            >
                              <div className="text-xl font-medium text-inherit text-gray-600">
                                {product.info.name}
                              </div>
                            </Link>
                            <p className="m-1 font-['arial'] text-lg text-gray-600">
                              {product.tags![0]}
                            </p>
                            <div className="text-lg font-semibold text-green-600">
                              {product.info.price}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </SwiperGrid>
      </Container>
    </>
  );
};

export default WeekDeals;
