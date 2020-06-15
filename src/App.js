//import React, {useState} from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


// using "states" inside a function-based component!
/*
const app = (props) => {
    const [personState, setPersonState] = useState({
            persons:[
                {name:"Ashish", age:"27"},
                {name:"Ashesh", age:"26"},
                {name: "Nikki", age:"23"}
            ],
            otherState : "Some random value"
        });
    //we can declare a function "switchNamesHandler" inside another function "app"
    const switchNamesHandler = () => {
        //console.log("The button was clicked")
        // DO NOT DO THIS bcs state cant be changed like this -> this.state.persons[0].name = "Ashish Ash"
        //changing the state based on button click event!
        setPersonState({
            persons:[
                {name:"Ashish Ash", age:"28"},
                {name:"Ashesh", age:"26"},
                {name: "Nikki", age:"23"}
            ],
            otherState:personState.otherState
        });
    };
    return (
        <div className="App">
            <h1>
                I am a REACT application!
                <p>
                    I am working fine!
                </p>
                <button onClick={switchNamesHandler}>Switch Name </button>
                {/!*{/!*adding our own created Person component!*!/}*!/}
                <Person name= {personState.persons[0].name} age={personState.persons[0].age}>He loves playing Soccer </Person>
                <Person name= {personState.persons[1].name} age={personState.persons[1].name}>He loves playing Soccer too!</Person>
                <Person name= {personState.persons[2].name} age={personState.persons[2].name}>She loves sports!</Person>
            </h1>
        </div>
    );

}

export default app;*/

//using "states" inside a class-based component!

class App extends Component {
    //creating a special "state" property to control the component data from inside the component.
    state = {
        persons:[
            {name:"Ashish", age:"27"},
            {name:"Maximilian", age:"26"},
            {name: "Nikki", age:"24"}
        ],
        otherState : "Some random value"
    }

    //for OnClick event
    //Here we do not declare the type of switchNamesHandler because inside a Class we can define it directly!
    switchNamesHandler = (newName) => {
        //console.log("The button was clicked")
        // DO NOT DO THIS bcs state cant be changed like this -> this.state.persons[0].name = "Ashish Ash"
        //changing the state based on button click event using setState()!
       this.setState({
           persons:[
               {name: newName, age:"28"},
               {name:"Maximilian", age:"26"},
               {name: "Nikki", age:"24"}
           ]
       })
    }

    //for onChange event for input text
    nameChangeHandler = (event) => {
        this.setState({
            persons:[
                {name: 'Ashish Ashish', age:"28"},
                {name: event.target.value, age:"26"},
                {name: 'Nikki', age:"24"}
            ]
        })
    }
  render() {
    const style = {
        backgroundColor: 'gray',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>
            I am a REACT application!
            <p>
                I am working fine!
            </p>
            <button onClick={this.switchNamesHandler.bind(this,'Ashish Ash')}
            style={style}>Switch Name </button>
            {/*adding our own created Person component!*/}
            <div>
                <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}
                        clickme = {this.switchNamesHandler.bind(this,'AshishAshish')} >He loves playing Soccer </Person>
                <Person name= {this.state.persons[1].name} age={this.state.persons[1].age}
                        changeme = {this.nameChangeHandler}>He loves playing Soccer too!</Person>
                <Person name= {this.state.persons[2].name} age={this.state.persons[2].age}>She loves sports!</Person>
            </div>

        </h1>
      </div>
    );
    // the above code would automatically be converted to the below format (internally)
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'I am a direct React application'));

  }
}

export default App;
