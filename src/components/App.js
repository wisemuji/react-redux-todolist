import React from "react";
import "./App.css";
import TodosContainer from "../containers/TodosContainer";

function App() {
  return (
    <div className="wrapper">
      <div className="content">{<TodosContainer />}</div>
    </div>
  );
}

export default App;
