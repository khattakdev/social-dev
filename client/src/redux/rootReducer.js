import { combineReducers } from "redux";
import userReducer from "./reducers/user";
import layoutReducer from "./reducers/layout";
import postReducer from "./reducers/posts";
const rootReducer = combineReducers({
  user: userReducer,
  layout: layoutReducer,
  posts: postReducer
});

export default rootReducer;
