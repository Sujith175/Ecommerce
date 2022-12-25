import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoryPreviewComponent";
import Category from "../category/Category";
const ShopComponent = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default ShopComponent;
