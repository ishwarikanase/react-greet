import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome ishwari
        //         </div>
        //     )
        // }
        // else {
        //     return (<div>Welcome guest</div>)
        // }

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>welcome ishwari</div>
        // }
        // else{
        //     message=<div>welcome guest</div>
        // }
        return (
            this.state.isLoggedIn?<div>welcome ishwari</div>:<div>welcome guest</div>
        )
    }
}

export default UserGreeting
