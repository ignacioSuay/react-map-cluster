export default (state = {id:1}, action) => {

    var i = 0;
    if(action.type === "CHANGE"){
        console.log("reducer changing state");
        console.log(action.data);
        i = i + 1;
        var newObj = {id: i};
        return newObj;
    }

    return state;
}