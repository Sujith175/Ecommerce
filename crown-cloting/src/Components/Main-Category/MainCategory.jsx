import React from "react";
import "../Main-Category/MainCategory.styles.scss";
import CategoryItem from "../category-item/category-item.component";
const MainCategory = ({ categories }) => {
  return (
    <div className="categories-container ">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default MainCategory;
