import React from "react";
import "../Products/product.styles.scss";
import Button from "../Button/ButtonComponent";
const ProductCard = ({ products }) => {
  const { name, price, imageUrl } = products;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
