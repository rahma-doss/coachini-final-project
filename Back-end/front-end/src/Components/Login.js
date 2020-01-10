import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/AuthenAction'
import {setAlert,removeAlert} from '../actions/AlertAction'
import uuid from 'uuid'
import Navbar from './Navbar/Navbar'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Email :'',
            password:'',

        }
    }
    handleChange=e => {
        this.setState({[e.target.name]:e.target.value})
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/')
        }
        if(nextProps.auth.error === 'Please Register Before!' || nextProps.auth.error === "Wrong Password"){
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.clearError()
            }, 5000);
        }
    }

    loginNow = () => {
        if(this.state.email === '' || this.state.password === ''){
            let id = uuid()
            this.props.setAlert('Please enter your credentials before!', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000)
        } else {
            this.props.login({
                email: this.state.email,
                password: this.state.password
            })
        }
    }

    render(){
        return(
        <div>
             <Navbar bg={true}/>
            <h1>Login</h1>
            <div className='container'>
            <input name='Email' type='text' onChange={this.handleChange} placeholder='Your Email '  />
            <input name='password' type='password' onChange={this.handleChange} placeholder='Your password '  />
            </div>
            <button  onClick={this.loginNow} className='btn btn-info'>Login</button>
        </div>
        )

    }
}

const mapStateToProps = state => {
    return{
        auth : state.auth
    }
}

export default connect (mapStateToProps, {login, setAlert, removeAlert})(Login)