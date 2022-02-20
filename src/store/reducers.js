import { combineReducers } from "redux";

import {reducer} from "../duck/reducers"


const reducers = combineReducers({
    app:reducer,
})

export default reducers