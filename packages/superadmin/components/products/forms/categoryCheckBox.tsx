import { Category, NestedCategoryList } from 'models';
import { FC, useEffect, useState } from 'react';

const CategoryCheckbox: FC<{
  category: NestedCategoryList;
  categoryData: any;
  removeCat: Function;
  addCat: Function;
  isSelected: boolean;
}> = ({ category, categoryData, removeCat, addCat, isSelected }) => {
  const [ttt, setTTT] = useState(isSelected);

  const handleChange = (catID: any) => {
    ttt === false ? setTTT(true) : setTTT(false);
    ttt === false ? addCat(catID) : removeCat(catID);
  };

  useEffect(() => {
    categoryData.forEach((cat) => {
      if (cat.id === category.id) {
        setTTT(cat.isSelected);
        console.log('>>>>>', cat.isSelected);
      }
    });
  });
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        defaultChecked={isSelected}
        id={category.id}
        onChange={() => {
          handleChange(category.id);
        }}
      />
      {console.log(
        'isSelected  > ',
        isSelected,
        'KKKK > ',
        categoryData.filter((cat) => cat.id === category.id)[0]?.isSelected
      )}
      <label className="form-check-label" htmlFor="flexCheckChecked">
        {category.name} {`${ttt}`}
      </label>
      {category.subCategories &&
        ttt &&
        category.subCategories.map((category: any) => {
          return (
            <>
              <CategoryCheckbox
                categoryData={categoryData}
                category={category}
                removeCat={removeCat}
                addCat={addCat}
                isSelected={
                  categoryData.filter(cat => cat.id === category.id)[0]?
                    .isSelected
                }
              />
            </>
          );
        })}
    </div>
  );
};

export default CategoryCheckbox;
