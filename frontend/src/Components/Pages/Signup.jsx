import React, { Component } from 'react'
import {add} from "../../Helpers/handleLocalStorage"

class Signup extends Component{
    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)

        this.state = {
            user_name: '',
            user_password: ''
        }
    }

    onChangeName(e){
        this.setState({
            user_name: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            user_password: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        let user = {
            name: this.state.user_name,
            password: this.state.user_password
        }

        

        alert(`Signed Up! name: ${this.state.user_name}, password: ${this.state.user_password}, ${localStorage.getItem('users')}`)
        add(user, 'users')
        

        this.setState({
            user_name: '',
            user_password: ''
        })
    }

    render(){
        return(
            <div style={{marginTop: 10}}>
                <h1>Sign Up</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Enter name:  </label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={this.state.user_name}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter password: </label>
                        <input 
                        type="password" 
                        className="form-control"
                        value={this.state.user_password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Re-enter password: </label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign Up" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup 