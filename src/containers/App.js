import React, { useState } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundaty";

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

  const togglePersonsHandler = () => {
    setPersonsState({
      persons: personsState.persons,
      otherState: personsState.otherState,
      showPersons: !personsState.showPersons
    });
  };

  let persons = null;
  let btnClass = "";
  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map((person, index) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={() => deletePerdonHandler(index)}
                changed={event => nameChangedHandler(event, person.id)}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    );
    btnClass = classes.Red;
  }

  const assignedClasses = [];

  if (personsState.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (personsState.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.App}>
      <h1>Hi,I'm a react developer!</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button onClick={() => togglePersonsHandler()} className={btnClass}>
        Toggle Persons
      </button>
      {persons}
    </div>
  );
  // return React.createElement("div", null, "h1", "Iam a React App!");
};

export default App;
