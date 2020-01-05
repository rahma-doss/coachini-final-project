import { combineReducers } from 'redux';
import  Reducer from './Reducer';
import CoachReducer from './CoachReducer';
import SpecialiteFiterReducer from './SpecialiteFiterReducer';
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'


const rootReducer = combineReducers({Reducer, CoachReducer, SpecialiteFiterReducer,AuthReducer, AlertReducer})
export default rootReducer;