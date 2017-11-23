import {combineReducers} from "redux";

const tableData = (state = {}, action) => {

    if(action.type === "CHANGE"){
        console.log("reducer changing state");
        return action.data;
    }

    return state;
};

export default combineReducers({
    tableData
})