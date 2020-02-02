import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Max", age: 28 },
      { id: "2", name: "Manu", age: 31 },
      { id: "3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  });

  const switchNameHandler = newName => {
    // console.log("Was clicked!");
    // this.state.persons[0].name = "Lucian";
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: personsState.otherState
    });
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = personsState.persons.findIndex(p => {
      return p.id === id;
    });

    const persons = [...personsState.persons];
    persons[personIndex].name = event.target.value;

    setPersonsState({
      persons: persons,
      otherState: personsState.otherState,
      showPersons: personsState.showPersons
    });
  };

  const deletePerdonHandler = personIndex => {
    // const persons = personsState.persons.slice();
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);
    setPersonsState({
      persons: persons,
      otherState: personsState.otherState,
      showPersons: personsState.showPersons
    });
  };

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };

  const togglePersonsHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      otherState: personsState.otherState,
      showPersons: !personsState.showPersons
    });
  };

  let persons = null;
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => deletePerdonHandler(index)}
              changed={event => nameChangedHandler(event, person.id)}
              key={person.id}
            />
          );
        })}
      </div>
    );
    style.backgroundColor = "red";
  }

  const classes = [];

  if (personsState.persons.length <= 2) {
    classes.push("red");
  }

  if (personsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className="App">
      <h1>Hi,I'm a react developer!</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button onClick={() => togglePersonsHandler()} style={style}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  // return React.createElement("div", null, "h1", "Iam a React App!");
};

export default App;
