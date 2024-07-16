import { legacy_createStore as createStore, combineReducers } from "redux";
import themeReducer from "../reducers/themeReducer";
import languageReducer from "../reducers/languageReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
});

const store = createStore(rootReducer);

export default store;
