import {REGISTER_SUCCES,REGISTER_FAIL,  LOGIN_SUCCES, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR,LOGOUT} from './types'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// Load user

// register user
export const register = FormData => dispatch =>{
    const config ={
        headers :{
            'content-Type': 'application/json'
        }
    }
 axios.post('/api/user', FormData,config)
 .then(res => dispatch({
     type: REGISTER_SUCCES,
     payload: res.data
 })) 
 .catch(err => dispatch ({
     type : REGISTER_FAIL,
     payload: err.response.data.msg
 }))  
}
// login user 

// Logout user

// Clear Errors 