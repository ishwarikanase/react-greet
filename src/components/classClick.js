import React, { Component } from 'react'

export class classClick extends Component {
    
    clickHandler(){
        console.log("button is clicked")
    } 

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default classClick;
