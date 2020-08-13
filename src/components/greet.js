import React from 'react'

const Greet = (props) => {
    return <div>
        <h1>hello {props.name}</h1>
        <p>{props.heroName}</p>
    </div>
}


export default Greet;
