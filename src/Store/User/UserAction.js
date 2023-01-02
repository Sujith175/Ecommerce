import { createAction } from "../../utils/reducer/reducer.utils";

import USER_ACTION_TYPES from "./userTypes";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};