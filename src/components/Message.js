import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'welcome visitor'
        }
    }

    changeMessage(){
        this.setState(
            {
                message:'thank you for subscription' 
            })
    }
    render() {
        return (<div>
            <h1>Message</h1>
            <p>{this.state.message}</p>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message;