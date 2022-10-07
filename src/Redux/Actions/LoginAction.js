import { dispatch } from "../Store";
import { SET_LOGIN } from "../Types";

export const setLogin = (v) => dispatch({ type: SET_LOGIN, payload: v });
