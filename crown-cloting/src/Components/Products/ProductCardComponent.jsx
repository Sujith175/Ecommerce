import React from "react";
import "../Products/product.styles.scss";
import Button from "../Button/ButtonComponent";
import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
const ProductCard = ({ products }) => {
  const { addItemtoCart } = useContext(CartContext);
  const { name, price, imageUrl } = products;
  const addProductToCart = () => addItemtoCart(products);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
