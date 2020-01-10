import React from 'react'
import uuid from 'uuid'
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../actions/AlertAction'
import { register, ClearError } from '../actions/AuthenAction'
import Navbar from './Navbar/Navbar'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            // date: '',

        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    RegisterNow = () => {
        if (this.state.firstname === '' || this.state.lastname === '' || this.state.email === '') {
            let id = uuid()
            this.props.setAlert('All fields are required', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
            }, 5000);
        } else {
            this.props.register(this.state)
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if (nextProps.auth.error === 'User already exists!!') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                this.props.ClearError()
            }, 5000);
        }
    }

    render() {
        return (
            <div className='register'>
                <Navbar bg={true} />
                <h1>Register</h1>
                <div className='container formRegister'>
                    <input name='firstname' type='text' onChange={this.handleChange} placeholder='Your firstname ' />
                    <input name='lastname' type='text' onChange={this.handleChange} placeholder='Your lastname ' />
                    <input name='email' type='text' onChange={this.handleChange} placeholder='Your email ' />
                    <input name='password' type='password' onChange={this.handleChange} placeholder='Your password ' />
                    {/* <input name='date' type='text' onChange={this.handleChange} placeholder='Your date ' /> */}
                </div>
                <button onClick={this.RegisterNow} className='btn btn-info'>Register</button>
            </div>
        )
    }
}

// const mapdispatchToprops =dispatch=>{
//     return {
//         setAlert : (msg, type,id) => dispatch(setAlert(msg, type,id)),
//          clearAlert: id => dispatch(removeAlert(id))
//     }
// }

const mapStateToProps = state => {
    return {
        auth: state.auth

    }
}

export default connect(mapStateToProps, { setAlert, removeAlert, register, ClearError })(Register)