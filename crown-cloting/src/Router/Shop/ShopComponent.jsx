import React, { useContext } from "react";
import { ProductContext } from "../../Contexts/Products.context";
import ProductCard from "../../Components/Products/ProductCardComponent";
import "../Shop/shop.style.scss";
const ShopComponent = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} products={product} />
      ))}
    </div>
  );
};

export default ShopComponent;
