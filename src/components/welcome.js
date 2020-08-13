import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (<div>
            <h1>welcome</h1>
            <p>Welcome {this.props.name} and you are {this.props.heroName}</p>
        </div>
        )
    }
}
export default Welcome;