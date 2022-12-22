import { React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../category/Category.styles.scss";
import ProductCard from "../../Components/Products/ProductCardComponent";
import { CategoryContext } from "../../Contexts/Categories.context";
const Category = () => {
  const { categoriesMap } = useContext(CategoryContext);
  const { category } = useParams();
  const [product, setProduct] = useState(categoriesMap[category]);
  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {product &&
        product.map((product) => (
          <ProductCard key={product.id} products={product} />
        ))}
    </div>
  );
};

export default Category;
