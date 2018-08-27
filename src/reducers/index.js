import { combineReducers } from "redux";

const fake_reducer = (state = {}, action) => {
    return state;
};

const allReducers = combineReducers({ fake_reducer });

export default allReducers;
