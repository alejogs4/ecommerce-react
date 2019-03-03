import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { add } from "../../Helpers/handleLocalStorage"

class Signup extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)

        this.state = {
            user_name: '',
            user_password: '',
            re_password: ''
        }
    }

    onChangeName(e) {
        this.setState({
            user_name: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            user_password: e.target.value
        })
    }

    onChangeRePassword(e) {
        this.setState({
            re_password: e.target.value
        })
    }

    onSubmit(e) {
        if (this.state.password === this.state.re_password) {
            e.preventDefault()
            let user = {
                name: this.state.user_name,
                password: this.state.user_password
            }
            alert(`Signed Up! name: ${this.state.user_name}, password: ${this.state.user_password}, ${localStorage.getItem('users')}`)
            add(user, 'users')
            this.props.history.push("/login")


            this.setState({
                user_name: '',
                user_password: '',
                re_password: ''
            })
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
                            value={this.state.user_name}
                            onChange={this.onChangeName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Enter password: </strong></label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.user_password}
                            onChange={this.onChangePassword}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Re-enter password: </strong></label>
                        <input
                            type="password"
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Sign Up"
                            className="btn btn-primary"
                            required
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup)