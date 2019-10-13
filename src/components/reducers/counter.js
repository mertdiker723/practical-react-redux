import * as actionType from "../store/action.js";

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return {                
                counter: state.counter + 1
            }
        case actionType.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case actionType.ADD:
            return {
                counter: state.counter + action.val
            }
        case actionType.SUBTRACT:
            return {
                counter: state.counter - action.val
            }
    }
    return state;
}

export default counterReducer;