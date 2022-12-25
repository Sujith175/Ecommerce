import React from "react";
import { CategoryContainer } from "./MainCategory.styles";
import DirectoryItem from "../directory-item/directory-item.component";
const MainCategory = ({ categories }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </CategoryContainer>
  );
};

export default MainCategory;
