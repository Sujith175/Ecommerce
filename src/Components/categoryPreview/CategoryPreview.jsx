import React from "react";
import { Link } from "react-router-dom";
import {
  CartPreviewTitle,
  CategoryPreviewContainer,
  CartPreview,
} from "./categoryPreview.styles";
import ProductCard from "../Products/ProductCardComponent";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CartPreviewTitle to={title}>{title.toUpperCase()}</CartPreviewTitle>
      </h2>
      <CartPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => {
            <ProductCard key={product.id} products={product} />;
          })}
      </CartPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
