import { combineReducers } from "redux";
import firstProductReducer from "../../component/redux/FirstProduct/FirstProductReducer";
import secondProductReducer from "../../component/redux/SecondProduct/secondProductReducer";
import newsReducer from "./News/newsReducer";

const rootReducer = combineReducers({
    news: newsReducer,
    firstProduct: firstProductReducer,
    secondProduct: secondProductReducer
})

export default rootReducer