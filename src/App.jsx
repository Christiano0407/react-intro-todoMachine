//** === ============= === ===== Component App ===== === ================ === */
//**! === Imports === */
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { BtnCreateTodo } from "./components/BtnCreateTodo";
import { ImagePlus } from "./components/ImagePlus";
import { Data } from "./data/Data";
import "./App.css";
//**! === Hooks States === */
import { useState } from "react";

//**! === LocalStorage === */
//localStorage.setItem("TODO_V1", Data);
//localStorage.setItem("TODO_V1", JSON.stringify(Data));
//localStorage.setItem("TODO_V1", JSON.parse(Data));
//localStorage.removeItem("TODO_V1", Data);

//**! ==== === App === ==== */
function App() {
  const local = localStorage.setItem("TODO_V1", Data);
  const dataLocalStorageTodo = localStorage.getItem(local);

  let dataParsedTodo;

  if (!dataLocalStorageTodo) {
    localStorage.setItem("TODO_V1", JSON.stringify([...Data]));
    dataParsedTodo = [];
  } else {
    dataParsedTodo = JSON.parse(dataLocalStorageTodo);
  }
  //let dataParsedTodo = JSON.parse(dataLocalStorageTodo);

  const [state, setState] = useState(dataParsedTodo);
  console.log("Change " + state);

  const [stateTodo, setStateTodo] = useState(dataParsedTodo);

  const completedTodo = stateTodo.filter((todo) => !!todo.completed).length;
  const totalTodo = stateTodo.length;

  const searchTodo = stateTodo.filter((todo) => {
    const textLower = todo.text.toLowerCase();
    const textUpper = state.toLocaleLowerCase();
    return textLower.includes(textUpper);
  });

  const saveTodo = (todoNew) => {
    localStorage.setItem("TODO_V1", JSON.stringify(todoNew));
    setStateTodo(todoNew);
  };

  /* function createNewTodo(todoName) {
    setStateTodo([...stateTodo, todoName]);
  }
 */
  return (
    <>
      <main className="w-full h-full p-[10px] grid gap-[2rem] sm:grid-cols-1 grid-flow-row md:grid-cols-2 ">
        <section className="w-full sm:auto-cols-max md:col-start-1 col-end-2 flex flex-col">
          <TodoCounter completed={completedTodo} total={totalTodo} />
          <TodoSearch state={state} setState={setState} />
          <TodoList
            searchTodo={searchTodo}
            stateTodo={stateTodo}
            setStateTodo={setStateTodo}
            saveTodo={saveTodo}
            //createNewTodo={createNewTodo}
          />
          <BtnCreateTodo />
        </section>
        <section className="mob:hidden sm:hidden md:col-start-2 col-end-4">
          <ImagePlus />
        </section>
      </main>
    </>
  );
}

export default App;

/**
 * <React.Fragment></React.Fragment> === <></>
 * Element or Component Children into a Element or Component Father
 */

/**
 * const completeDeleteTodo = (text) => {
    const newTodo = [...state];
    const todoIndex = newTodo.findIndex((todo) => todo.text == text);
    newTodo[todoIndex].completed = true;
    setState(newTodo);
  };
 */
