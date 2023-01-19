import { Fragment, React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/Categories/categorySelector";
import { CategoryContainer, Categorytitle } from "./Category.styles";
import ProductCard from "../../Components/Products/ProductCardComponent";
import { selectCategoryIsLoading } from "../../Store/Categories/categorySelector";
import Spinner from "../../Components/Spinner/Spinner";
const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoryIsLoading);
  const { category } = useParams();
  const [product, setProduct] = useState(categoriesMap[category]);
  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Categorytitle>{category.toUpperCase()}</Categorytitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {product &&
            product.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
