import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 31 },
      { name: "Stephanie", age: 26 }
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

  const nameChangedHandler = event => {
    setPersonsState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: personsState.otherState,
      showPersons: personsState.showPersons
    });
  };

  const style = {
    backgrounColor: "white",
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
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(undefined, "Max!")}
          changed={nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi,I'm a react developer!</h1>
      <p>This is really working</p>
      <button onClick={() => togglePersonsHandler()} style={style}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  // return React.createElement("div", null, "h1", "Iam a React App!");
};

export default App;
