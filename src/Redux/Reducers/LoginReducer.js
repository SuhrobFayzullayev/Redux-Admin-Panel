import { SET_LOGIN } from "../Types";

const initialState = {
  login: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, login: action.payload };

    default:
      return state;
  }
};

export default loginReducer;
