import React from 'react'
import uuid from 'uuid'
import {connect} from 'react-redux'
import {setAlert , removeAlert} from '../actions/AlertAction'
import {register} from '../actions/AuthenAction'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            FirstName:'',
            LastName:'',
            Email :'',
            password:'',
            date:'',

        }
    }
    handleChange=e => {
        this.setState({[e.target.name]:e.target.value})
    }
    RegisterNow = ()=>{
        if(this.state.FirstName === '' || this.state.LastName === '' || this.state.Email===''  ){
            let id =uuid()
            this.props.setAlert('All fields are required', 'danger', id)
            setTimeout(()=>{
                this.props.removeAlert(id)
            },5000);
        }

    }

    render(){
        return (
        <div>
            <h1>Register</h1>
            <div className='container'>
            <input name='FirstName' type='text' onChange={this.handleChange} placeholder='Your FirstName '  />
            <input name='LastName' type='text' onChange={this.handleChange} placeholder='Your LastName '  />
            <input name='Email' type='text' onChange={this.handleChange} placeholder='Your Email '  />
            <input name='password' type='password' onChange={this.handleChange} placeholder='Your password '  />
            <input name='date' type='text' onChange={this.handleChange} placeholder='Your date '  />
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
export default connect (null,  {setAlert, removeAlert , register} ) (Register)