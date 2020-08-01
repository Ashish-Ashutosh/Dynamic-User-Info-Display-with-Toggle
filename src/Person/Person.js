import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        //adding media queries using RADIUM
        '@media (min-width:500px)': {
            //fixed width that does not grow dynamically for the components shown in the UI, in this case <person>
            width: '450px'
        }
    };


    return(
        <div className="Person" style={style}>
            <p onClick={props.clickme}>I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type={"text"} onChange={props.changeme} value={props.name}/>
        </div>

    )
};

export default Radium(person);
