import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi,I'm a react developer!</h1>
      <p>This is really working</p>
      <Person name="Lucian" age="22" />
      <Person name="Mircea" age="32">
        My Hobbies: Racing
      </Person>
      <Person name="Marina" age="43" />
    </div>
  );
  // return React.createElement("div", null, "h1", "Iam a React App!");
}

export default App;
