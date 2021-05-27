import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import write, { writeSaga } from "./write";

const rootReducer = combineReducers({
  auth,
  loading,
  write,
});

export function* rootSaga() {
  yield all([authSaga(), writeSaga()]);
}
export default rootReducer;
