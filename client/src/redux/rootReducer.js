import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import layoutReducer from "./reducers/layout";
const rootReducer = combineReducers({
  user: userReducer,
  layout: layoutReducer
});

export default rootReducer;
