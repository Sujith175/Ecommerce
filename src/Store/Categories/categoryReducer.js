import CATEGORY_ACTION_TYPES from "./categoryTypes";

const INITIANL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (state = INITIANL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
