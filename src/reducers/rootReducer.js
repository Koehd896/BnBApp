import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  roomsReducer,
  usersReducer
});

export default rootReducer;