import { call, put } from "redux-saga/effects";
import types from "../actionsTypes";
import { setItems } from "../actions/registerActions";

let data = [
  {
    name: "Dan",//string, up to 30 characters, mandatory
    id: 4567,
    description:"sorting of evidence table  should be by date descending", //(string, up to 200 characters, optional)
    price: 1,// (number, larger than zero, mandatory)c
    creationDate: new Date()// (Date, mandatory)
  },
];

export function* fetchItems(action) {
  try {
    // const result = yield call(fetchItemsApi, action.payload);

    yield put(setItems(data));
  } catch (error) {
    yield put({ type: types.ACTION_FAILED, payload: error.message });
  }
}
