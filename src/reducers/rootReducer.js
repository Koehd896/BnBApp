import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer";
import usersReducer from "./usersReducer";
import bookingsReducer from "./bookingsReducer";

const rootReducer = combineReducers({
  roomsReducer,
  usersReducer,
  bookingsReducer
});

export default rootReducer;