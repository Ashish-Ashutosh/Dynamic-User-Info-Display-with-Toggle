//import React, {useState} from 'react';
import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';



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
            {id:"asd" , name:"Ashish", age:"27"},
            {id:"yxc", name:"Maximilian", age:"26"},
            {id:"qwe" , name:"Nikki", age:"24"}
        ],
        otherState: "Some random value",
        showPersons: false
    }

    //for OnClick event
    //Here we do not declare the type of switchNamesHandler because inside a Class we can define it directly!
/*    switchNamesHandler = (newName) => {
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
    }*/

    //for onChange event for input text (only for second person)
    nameChangeHandler = (event, id) => {
        // first we look if the event id exists in our list of id's
        const personIndex = this.state.persons.findIndex(p =>{
             return p.id ===id;
        });

        // extracting that particular person and adding it to temporary storage
        const person = {
            ...this.state.persons[personIndex]

        };

        //updating the name of that received input of person in temporary storage
        person.name = event.target.value;

        //fetching the entire state of persons into another STATE temporary storage
        const persons = [...this.state.persons];

        //replacing the temporary STATE person whose input was changed to the latest input
        persons[personIndex] = person;

        //updating the main STATE of the person from temporary STATE person.
        this.setState({
            persons:persons
        });

    }


    // the arrow function is a better option than regular function because of "this" keyword for events
    // this function will display the content or won't based on a toggle button click
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons:!doesShow});

    }

    deletePersonHandler = (personIndex) =>{
        // retrieve elements from the state element into a const (mutable - changes the original state)
        // const person = this.state.persons;
        //copying the state into another const and not just referencing. This creates immutable lists
        //const person = this.state.persons.slice();
        //another alternative of copying the state is using SPREAD operator to create immutable state
        const person = [...this.state.persons];
        //deleting the element that was clicked
        person.splice(personIndex,1);
        //updating the state of the "state" object
        this.setState(
            {persons:person}
            )
    }


  render() {
    const style = {
        backgroundColor: 'green',
        color:'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        //adding hover to inline style using "Radium"
        ':hover': {
            backgroundColor: 'lightgreen',
            color:'black'
        }
    };

    // for conditional check - if false, then nothing is displayed because it is initialized with null
    let persons = null;
    if (this.state.showPersons){
        persons =(
            <div>
                {/*// using an arrow function that converts the array object from JS array to JSX
                array for rendering*/}
                {this.state.persons.map((person,index) => {
                    return <Person
                        clickme = {() => this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age}
                        key = {person.id}
                        //flexible lists used below
                        changeme ={(event)=>this.nameChangeHandler(event, person.id)
                        }/>
                })}
            </div>
        );
        //although "style" is a constant but we are not assigning the object a new value, we are only
        //assigning a property of the object. So,in essence the object is not reassigned to a new object.
        style.backgroundColor='red';
        style[':hover'] = {
            backgroundColor:'salmon',
            color:'black'
        }
        /*persons=(
        <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
                    clickme={this.switchNamesHandler.bind(this, 'AshishAshish')}>He loves playing
                Soccer </Person>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                    changeme={this.nameChangeHandler}>He loves playing Soccer too!</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>She loves sports!</Person>
        </div>
        )*/
    }

    //adding multiple styles into the <p> element below
    //let classes = ['bold', 'red'].join(' ');
    
    // we can also add styles dynamically based on conditions as done below
    const classes = [];
    if (this.state.persons.length<=2){
        classes.push('red');
     }
      if (this.state.persons.length<=1){
          classes.push('bold');
      }
      
      
    return (
        <StyleRoot>
              <div className="App">
                <h1>
                    Hi, I am a REACT application!
                </h1>
                    {/*Adding a new style here to the <p> tag*/}
                    <p className={classes.join(' ')}>
                        This is really working!!! Woot Woot!
                    </p>
                    {/*passing by value to a function*/}
                    {/*<button onClick={this.switchNamesHandler.bind(this,'Ashish Ash')}*/}
                    {/*style={style}>Switch Name </button>*/}
                    <button
                        style={style}
                        onClick={this.togglePersonHandler}>Toggle Persons</button>
                    {/*adding our own created Person component!*/}
                     {/*will run as long as the content in persons is an HTML content*/}
                    {persons}

              </div>
        </StyleRoot>
    );
    // the above code would automatically be converted to the below format (internally)
    //return React.createElement('div', {className:'App'}, React.createElement('h1',null, 'I am a direct React application'));

  }
}

export default Radium(App);
