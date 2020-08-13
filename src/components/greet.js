import React from 'react'

const Greet = (props) => {
    return (<div>
        <h1>greet</h1>
        <p>hello {props.name}</p>
        <p>{props.heroName}</p>
        {props.children}
    </div>
    )
}


export default Greet;
