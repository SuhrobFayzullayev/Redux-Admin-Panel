import { dispatch } from "../Store";
import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  DELETE_USER,
  EDIT_USER_ROLE,
} from "../Types";

export const deleteUser = (i) => dispatch({ type: DELETE_USER, payload: i });
export const editUserRole = (v, i) =>
  dispatch({ type: EDIT_USER_ROLE, payload: { v, i } });

export const addCategory = (v) => dispatch({ type: ADD_CATEGORY, payload: v });
export const addProduct = (v) => dispatch({ type: ADD_PRODUCT, payload: v });
