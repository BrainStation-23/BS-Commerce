import { FC, useEffect, useState } from 'react';
import { NestedCategoryList } from '@bs-commerce/models';
import { CategoryInterface } from '@/components/products/models/index';

const CategoryCheckbox: FC<{
  category: NestedCategoryList;
  categoryData: any;
  removeCategory: Function;
  addCategory: Function;
  isSelected: boolean;
}> = ({ category, categoryData, removeCategory, addCategory, isSelected }) => {
  const [isChecked, setChecked] = useState(isSelected);

  const handleChange = (catID: string) => {
    isChecked === false ? addCategory(catID) : removeCategory(catID);
    setChecked(!isChecked);
  };
  useEffect(() => {}, [isChecked]);

  useEffect(() => {
    categoryData.forEach((cat: CategoryInterface) => {
      if (cat.id === category.id) {
        setChecked(cat.isSelected!);
      }
    });
  });
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        defaultChecked={isChecked}
        id={category.id}
        onClick={() => {
          handleChange(category.id);
        }}
      />
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {category.name}
      </label>
      {category.subCategories &&
        isChecked &&
        category.subCategories.map((category: NestedCategoryList) => {
          return (
            <>
              <CategoryCheckbox
                categoryData={categoryData}
                category={category}
                removeCategory={removeCategory}
                addCategory={addCategory}
                isSelected={
                  categoryData.filter(
                    (cat: CategoryInterface) => cat.id === category.id
                  )[0]?.isSelected
                }
              />
            </>
          );
        })}
    </div>
  );
};

export default CategoryCheckbox;
