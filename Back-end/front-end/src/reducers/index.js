import { combineReducers } from 'redux';
import  Reducer from './Reducer';
import CoachReducer from './CoachReducer';
import ActivitesReducer from './ActivitiesReducer';
import formulaireReducer from './FormulaireReducer'
import SpecialiteFiterReducer from './SpecialiteFiterReducer';


import CommentsReducer from './CommentsReducer';
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'


const rootReducer = combineReducers({Reducer, CoachReducer, formulaireReducer, SpecialiteFiterReducer, auth: AuthReducer, AlertReducer,ActivitesReducer, CommentsReducer})
export default rootReducer;