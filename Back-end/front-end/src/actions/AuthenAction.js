import { REGISTER_SUCCES, REGISTER_FAIL, LOGIN_SUCCES, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT, USER_LOADED } from './types'
import axios from 'axios'
import setAuthToken from '../utiles/setAuthToken'
// import { Redirect } from 'react-router-dom'

// Load user
export const loadUser = () => dispatch => {
    // Set the token inside the request's header
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    axios.get('/api/auth')
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(() => dispatch({
            type: AUTH_ERROR
        }))
}
// register user
export const register = FormData => dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    axios.post('/api/users', FormData, config)
        .then(res => {
            dispatch({
            type: REGISTER_SUCCES,
            payload: res.data
        })
        dispatchEvent(loadUser())
    })
        .catch(err => dispatch({
            type: REGISTER_FAIL,
            payload: err
        }))
}
// login user 
export const login = formData => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/auth', formData, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCES,
                payload: res.data
            })
            dispatch(loadUser())
        })
        .catch(err => dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
        }))
}
// Logout user

export const logout = () => dispatch =>{
    dispatch({
        type: LOGOUT
    })

}

// Clear Errors
export const ClearError = () => dispatch => {
    dispatch({
        Type: CLEAR_ERROR
    })
} 