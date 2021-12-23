import { combineReducers } from "redux";
import newsReducer from "./News/newsReducer";

const rootReducer = combineReducers({
    news: newsReducer
})

export default rootReducer