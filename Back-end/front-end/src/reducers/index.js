import { combineReducers } from 'redux';
import  Reducer from './Reducer';
import CoachReducer from './CoachReducer';
import SpecialiteFiterReducer from './SpecialiteFiterReducer';
import ActivitesReducer from './ActivitiesReducer';
import CommentsReducer from './CommentsReducer';


const rootReducer = combineReducers({Reducer, CoachReducer, SpecialiteFiterReducer,ActivitesReducer, CommentsReducer})
export default rootReducer;