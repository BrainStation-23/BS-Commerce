import { NestedCategoryList } from 'models';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronRightIcon, PlusSolidIcon } from './headerIcons';
import { HeaderSubCategory } from './headerSubCategory';

interface Props {
  category: NestedCategoryList;
}

export const HeaderCategory: React.FC<Props> = ({ category }: Props) => {
  const [subOff, settt] = useState(false);

  return (
    <div
      className="group"
      // style={{ outline: '1px solid red' }}
    >
      <div className="flex cursor-pointer flex-row items-center justify-between py-1 px-3 text-sm transition-all duration-100 ease-linear hover:text-green-600">
        <Link
          href={{
            pathname: `/collections/${category.name}`,
            query: {
              categoryId: category.id,
              name: category.name,
            },
          }}
          as={`/collections/${category.name}`}
        >
          <a className="">{category.name}</a>
        </Link>

        <span className="hidden lg:block">
          {category.subCategories ? <ChevronRightIcon /> : ''}
        </span>
        <span className="block lg:hidden">
          {category.subCategories ? <PlusSolidIcon size={4} /> : ''}
        </span>
      </div>
      {category.subCategories ? (
        <div className="absolute top-0 left-56 z-50 hidden h-60 w-56 bg-white shadow-lg transition-all duration-300 ease-in hover:block lg:group-hover:block">
          <ul className="">
            {category.subCategories?.map((subCategory: any) => (
              <>
                <HeaderSubCategory category={subCategory} subOff={subOff} />
              </>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
