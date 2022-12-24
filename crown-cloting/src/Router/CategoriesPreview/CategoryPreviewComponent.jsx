import React, { Fragment, useContext } from "react";
import { CategoryContext } from "../../Contexts/Categories.context";

import CategoryPreview from "../../Components/categoryPreview/CategoryPreview";
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);
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
