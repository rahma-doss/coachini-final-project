import {ADD_COMMENT} from '../actions/types';


const initialState = []


const CommentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload]

        default:
            return state;
    }

}
export default CommentsReducer;
