import { combineReducers } from "redux";
import dashboardReducer from "./Dashboard";
import loginReducer from "./LoginReducer";

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
});

export default rootReducer;
