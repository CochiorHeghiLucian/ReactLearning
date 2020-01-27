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
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // this.state.persons[0].name = "Lucian";
    setPersonsState({
      persons: [
        { name: "Lucian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ],
      otherState: personsState.otherState
    });
  };

  console.log(personsState);

  return (
    <div className="App">
      <h1>Hi,I'm a react developer!</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement("div", null, "h1", "Iam a React App!");
};

export default App;
