import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/User/Categories/categorySelector";
import CategoryPreview from "../../Components/categoryPreview/CategoryPreview";
const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
