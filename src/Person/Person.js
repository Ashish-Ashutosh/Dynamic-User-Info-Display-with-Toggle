import React from 'react';
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';


// adding style components using the third-party "styled-components" package and storing it in "const" to be used later.
//note that styled.div already returns a REACT component.
const StyledDiv =  styled.div`
            width: 40%;
            margin: 20px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            
          
            '@media (min-width:500px)': {     
            width: '450px'
            }  
 
        `


const person = (props) => {
    const style = {
        //adding media queries using RADIUM
        '@media (min-width:500px)': {
            //fixed width that does not grow dynamically for the components shown in the UI, in this case <person>
            width: '450px'
        }
    };

    return(
/*        <div className="Person" style={style}>
            <p onClick={props.clickme}>I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type={"text"} onChange={props.changeme} value={props.name}/>
        </div>*/

        <StyledDiv>
            <p onClick={props.clickme}>I am {props.name} and my age is {props.age}.</p>
            <p>{props.children}</p>
            <input type={"text"} onChange={props.changeme} value={props.name}/>
        </StyledDiv>
    );
};

// export default Radium(person);
export default person;
