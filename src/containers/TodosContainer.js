import React from "react";
import Todos from "../components/Todos";
import { connect } from "react-redux";
import { TodoActions } from "../store/actionCreators";

function TodosContainer(props) {
  const { input, todos } = props;

  function handleChange(e) {
    TodoActions.changeInput(e.target.value);
  }

  function handleInsert() {
    if (input === "") return;
    TodoActions.insert(input);
    TodoActions.changeInput("");
  }

  function handleToggle(id) {
    TodoActions.toggle(id);
  }

  function handleRemove(id) {
    TodoActions.remove(id);
  }

  return (
    <Todos
      input={input}
      todos={todos}
      onChange={handleChange}
      onInsert={handleInsert}
      onToggle={handleToggle}
      onRemove={handleRemove}
    />
  );
}

export default connect(({ todo }) => ({
  input: todo.input,
  todos: todo.todos,
}))(TodosContainer);
