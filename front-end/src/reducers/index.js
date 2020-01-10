import { combineReducers } from 'redux';
import  Reducer from './Reducer';
import CoachReducer from './CoachReducer';
import SpecialiteFiterReducer from './SpecialiteFiterReducer';
import ProductReducer from './ProductReducer';
import ReducerBlog from './ReducerBlog' ;
import cartReducer from './CartReducer' ;




const rootReducer = combineReducers({cartReducer, Reducer, CoachReducer, ProductReducer , ReducerBlog , SpecialiteFiterReducer})
export default rootReducer;