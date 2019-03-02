import React, { Component } from 'react'

class Login extends Component {
    handleSubmit(event){
        alert("Logged in!")
        this.setState({value: event.target.value})
        
        event.preventDefault()
    }

    render() {
        return (
            <main>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <strong>Name: </strong><input type="text" name="name" />
                        <br/>
                        <br/>
                        <strong>Password: </strong><input type="password" name="password" />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </main>
        )
    }
}

export default Login