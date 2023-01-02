import CATEGORY_ACTION_TYPES from "./categoryTypes";

const INITIANL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
