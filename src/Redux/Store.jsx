import { legacy_createStore as createStore } from "redux";
import Reducer from "./Reducer/Reducer";

const Store = createStore(Reducer)

export default Store;