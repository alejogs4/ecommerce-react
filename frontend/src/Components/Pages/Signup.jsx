import React, { Component } from 'react'

class Signup extends Component{
    render(){
        return(
            <main>
                <h1>Signup</h1>
                <form>
                    <label>
                        <strong>Name: </strong><input type="text" name="name"/>
                        <br/>
                        <br/>
                        <strong>Password: </strong><input type="password" name="password" />
                    </label>
                </form>
            </main>
        )
    }
}

export default Signup 