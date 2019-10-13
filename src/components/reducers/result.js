import * as actionTypes from "../store/action.js";

const initialState = {
    results: []
}

const reducerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                results: state.results.concat({ id: Math.random(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            return {
                results: state.results.filter(item => {
                    return (
                        item.id !== action.deleteId
                    )
                })
            }
    }
    return state;
};

export default reducerReducer;