import {REGISTER_SUCCES,REGISTER_FAIL,  LOGIN_SUCCES, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR,LOGOUT} from '../actions/types'

const initialstate ={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    error: null
}

const AuthReducer = (state = initialstate , action) =>{
    switch(action.type){
        case REGISTER_SUCCES:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true
            }
            case REGISTER_FAIL:
                localStorage.removeItem('token')
                return{
                    ...state,
                    token: null,
                    isAuthenticated:false,
                    error: action.payload.msg}
                
        default:
            return state
    }
}

export default AuthReducer