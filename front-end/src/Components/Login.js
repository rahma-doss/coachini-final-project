import React from 'react'

class Login extends React.Component{
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
    render(){
        return(
        <div>
            <h1>Login</h1>
            <div className='container'>
            <input name='Email' type='text' onChange={this.handleChange} placeholder='Your Email '  />
            <input name='password' type='password' onChange={this.handleChange} placeholder='Your password '  />
            </div>
            <button className='btn btn-info'>Login</button>
        </div>
        )

    }
}
export default Login