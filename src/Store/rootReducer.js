import { combineReducers } from "redux";
import { categoriesReducer } from "./Categories/categoryReducer";
import { userReducer } from "./User/userReducer";
import { cartReducer } from "./Cart/cartReducer";
export const rootReducer = combineReducers({
  user: userReducer, //passing as object
  categories: categoriesReducer,
  cart: cartReducer,
});
