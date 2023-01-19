import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../CategoriesPreview/CategoryPreviewComponent";
import Category from "../category/Category";
import { useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../../Store/Categories/categoryAction";
const ShopComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      dispatch(fetchCategoriesAsync());
    };

    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default ShopComponent;
