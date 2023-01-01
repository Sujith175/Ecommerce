import { Fragment, React, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/User/Categories/categorySelector";
import { CategoryContainer, Categorytitle } from "./Category.styles";
import ProductCard from "../../Components/Products/ProductCardComponent";
const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const { category } = useParams();
  const [product, setProduct] = useState(categoriesMap[category]);
  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Categorytitle>{category.toUpperCase()}</Categorytitle>
      <CategoryContainer>
        {product &&
          product.map((product) => (
            <ProductCard key={product.id} products={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
