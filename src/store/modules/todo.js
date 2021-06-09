import { createAction, handleActions } from "redux-actions";
import { List, Record } from "immutable";
import { v4 as uuidv4 } from "uuid";

const CHANGE_INPUT = "todo/CHANGE_INPUT";
const INSERT = "todo/INSERT";
const TOGGLE = "todo/TOGGLE";
const REMOVE = "todo/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, (value) => value);
export const insert = createAction(INSERT, (text) => text);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = Record({
  input: "",
  todos: List(),
})();

const TodoRecord = Record({
  id: uuidv4(),
  text: "",
  checked: false,
});

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => state.set("input", action.payload),
    [INSERT]: (state, { payload: text }) => {
      const item = TodoRecord({ text: text });
      return state.update("todos", (todos) => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
      const index = state
        .get("todos")
        .findIndex((item) => item.get("id") === id);
      return state.updateIn(["todos", index, "checked"], (checked) => !checked);
    },
    [REMOVE]: (state, { payload: id }) => {
      const index = state
        .get("todos")
        .findIndex((item) => item.get("id") === id);
      return state.deleteIn(["todos", index]);
    },
  },
  initialState
);
