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

function App() {
  const [state, setState] = useState("");
  console.log("Change " + state);

  const [stateTodo, setSateTodo] = useState(Data);

  const completedTodo = stateTodo.filter((todo) => !!todo.completed).length;
  const totalTodo = stateTodo.length;

  const searchTodo = stateTodo.filter((todo) => {
    const textLower = todo.text.toLowerCase();
    const textUpper = state.toLocaleUpperCase();
    return textLower.includes(textUpper);
  });

  return (
    <>
      <main className="w-full h-full p-[10px] grid gap-[2rem] sm:grid-cols-1 grid-flow-row md:grid-cols-2 ">
        <section className="w-full sm:auto-cols-max md:col-start-1 col-end-2 flex flex-col">
          <TodoCounter completed={completedTodo} total={totalTodo} />
          <TodoSearch state={state} setState={setState} />
          <TodoList searchTodo={searchTodo} />
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
