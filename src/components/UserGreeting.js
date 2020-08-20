import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <div>
                    Welcome ishwari
                </div>
            )
        }
        else {
            return (<div>Welcome guest</div>)
        }
        return <div />
    }
}

export default UserGreeting
