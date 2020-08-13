import React from 'react'

const Greet = (props) => {
    return (<div>
        <h1>hello {props.name}</h1>
        <h2>{props.heroName}</h2>
        {props.children}
    </div>
    )
}


export default Greet;
