import { combineReducers } from "redux";
import { categoriesReducer } from "./User/Categories/categoryReducer";
import { userReducer } from "./User/userReducer";

export const rootReducer = combineReducers({
  user: userReducer, //passing as object
  categories: categoriesReducer,
});
