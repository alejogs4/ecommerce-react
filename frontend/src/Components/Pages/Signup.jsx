import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { add } from "../../Helpers/handleLocalStorage"

class Signup extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.onChangeRePassword = this.onChangeRePassword.bind(this)

        this.state = {
            userName: '',
            userPassword: '',
            rePassword: ''
        }
    }

    onChangeName(e) {
        this.setState({
            userName: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            userPassword: e.target.value
        })
    }

    onChangeRePassword(e) {
        this.setState({
            rePassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        if (this.state.userPassword === this.state.rePassword) {

            let user = {
                name: this.state.userName,
                password: this.state.userPassword
            }
            if (add(user, 'users')) {
                alert("Signed Up!")
                this.props.history.push("/login")
                this.setState({
                    userName: '',
                    userPassword: '',
                    rePassword: ''
                })
            }
        } else {
            alert("Passwords must match!")
        }

    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h1>Sign Up</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label><strong>Enter name: </strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userName}
                            onChange={this.onChangeName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Enter password: </strong></label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.userPassword}
                            onChange={this.onChangePassword}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Re-enter password: </strong></label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.rePassword}
                            onChange={this.onChangeRePassword}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Sign Up"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup)