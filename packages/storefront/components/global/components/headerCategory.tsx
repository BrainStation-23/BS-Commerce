import Link from 'next/link';
import React, { useState } from 'react';
import { NestedCategoryList, subCategoryList } from 'models';
import { ChevronRightIcon, MinusSolidIcon, PlusSolidIcon } from './headerIcons';
import HeaderSubCategory from '@/components/global/components/headerSubCategory';

interface Props {
  category: NestedCategoryList;
}

const HeaderCategory: React.FC<Props> = ({ category }: Props) => {
  const [showSubCategory, settt] = useState(false);
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpandClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setExpand(!expand);
  };

  return (
    <div
      className={`group`}
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
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
          //as={`/collections/${category.name}`}
        >
          <a className="">{category.name}</a>
        </Link>

        <span className="hidden lg:block">
          {category.subCategories ? <ChevronRightIcon /> : ''}
        </span>
        <span
          className="block lg:hidden"
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
            handleExpandClick(e)
          }
        >
          {category.subCategories ? (
            expand ? (
              <MinusSolidIcon size={4} />
            ) : (
              <PlusSolidIcon size={4} />
            )
          ) : (
            ''
          )}
        </span>
      </div>
      {/* render on sm to md */}
      {category.subCategories && expand ? (
        <div className="lg:hidden">
          <ul className="pl-2">
            {category.subCategories?.map((subCategory: subCategoryList) => (
              <li key={subCategory.name}>
                {/* {subCategory.name} */}
                <HeaderSubCategory
                  category={subCategory}
                  level={1}
                  showSub={expand}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
      {/* render on lg+ screen */}
      {document.body.clientWidth > 768 && category.subCategories ? (
        <div
          className={`absolute top-0 left-56 z-50 h-auto w-56 origin-left bg-white shadow-lg transition-all duration-300 ease-in hover:block lg:h-60 ${
            expand ? 'scale-x-100' : 'scale-x-0'
          }`}
        >
          <ul className="pl-2">
            {category.subCategories?.map((subCategory: subCategoryList) => (
              <li key={subCategory.name}>
                <HeaderSubCategory
                  category={subCategory}
                  showSub={showSubCategory}
                  level={1}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default HeaderCategory;
