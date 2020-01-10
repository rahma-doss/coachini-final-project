import { SET_SPECIALITE_FILTER, SET_VILLE_FILTER } from '../actions/types';



const initialstate = "";

const SpecialiteFiterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_SPECIALITE_FILTER:
            return action.payload;

        


        default:
            return state;
    }
}

export default SpecialiteFiterReducer;