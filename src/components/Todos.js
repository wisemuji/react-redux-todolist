import React from "react";

function TodoItem({ id, text, checked, onToggle, onRemove }) {
  return (
    <li
      style={{
        textDecoration: checked ? "line-through" : "none",
      }}
      onClick={() => onToggle(id)}
      onDoubleClick={() => onRemove(id)}
    >
      {text}
    </li>
  );
}

function Todos({ todos, input, onInsert, onToggle, onRemove, onChange }) {
  const todoItems = todos.map((todo) => {
    const { id, checked, text } = todo.toJS();
    return (
      <TodoItem
        id={id}
        checked={checked}
        text={text}
        onToggle={onToggle}
        onRemove={onRemove}
        key={id}
      />
    );
  });

  return (
    <div>
      <h2>Todolist</h2>
      <input value={input} onChange={onChange} />
      <button onClick={onInsert}>Add</button>
      <ul>{todoItems}</ul>
    </div>
  );
}

export default Todos;
