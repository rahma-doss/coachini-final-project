import { combineReducers } from 'redux';
import  Reducer from './Reducer';
import CoachReducer from './CoachReducer';
import SpecialiteFiterReducer from './SpecialiteFiterReducer';


const rootReducer = combineReducers({Reducer, CoachReducer, SpecialiteFiterReducer})
export default rootReducer;