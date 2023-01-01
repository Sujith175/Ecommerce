import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../CategoriesPreview/CategoryPreviewComponent";
import Category from "../category/Category";
import { useDispatch } from "react-redux";
import { setCategoriesMap } from "../../Store/User/Categories/categoryAction";
const ShopComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");

      dispatch(setCategoriesMap(categoryMap));
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
