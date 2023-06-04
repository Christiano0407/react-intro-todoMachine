//** === ============= === ===== Component App ===== === ================ === */
//**! === Imports === */
import { TodoCounter } from "./components/TodoCounter/index";
import { TodoSearch } from "./components/TodoSearch/index";
import { TodoList } from "./components/TodoList/index";
import { BtnCreateTodo } from "./components/BtnCreateTodo/index";
import { ImagePlus } from "./components/ImagePlus/index";
import { Data } from "./data/Data";
import { useLocalStorage } from "./hooks/UseLocalStorage";
import "./App.css";
//**! === Hooks States === */
import { useState } from "react";

//**? ==== ====  === App ===  ==== ==== */
function App() {
  const [todos, saveTodo] = useLocalStorage("TODO_V1", []);
  const [stateTodo, setStateTodo] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodo = todos.length;

  const completeTodo = (text) => {
    const newTodo = [...todos];
    const todoIndex = newTodo.findIndex((todo) => todo.text == text);
    newTodo[todoIndex].completed = true;
    saveTodo(newTodo);
  };

  const notCompletedTodo = (text) => {
    const todoNew = [...todos];
    const indexTodo = todoNew.findIndex((todo) => todo.text == text);
    todoNew[indexTodo].completed = false;
    saveTodo(todoNew);
  };

  const deleteTodo = (text) => {
    const newTodo = [...todos];
    const indexDelete = newTodo.findIndex((todo) => todo.text == text);
    //newTodo[indexDelete].completed = false;
    newTodo.splice(indexDelete, 1);
    saveTodo(newTodo);
  };

  const searchTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = stateTodo.toLowerCase();
    return todoText.includes(searchText);
  });

  /* function createNewTodo(todoName) {
    setStateTodo([...stateTodo, todoName]);
  }
 */
  return (
    <>
      <main className="w-full h-full p-[10px] grid gap-[2rem] sm:grid-cols-1 grid-flow-row md:grid-cols-2 ">
        <section className="w-full sm:auto-cols-max md:col-start-1 col-end-2 flex flex-col">
          <TodoCounter completed={completedTodos} total={totalTodo} />
          <TodoSearch state={todos} setState={saveTodo} />
          <TodoList
            searchTodo={searchTodo}
            stateTodo={stateTodo}
            setStateTodo={setStateTodo}
            complete={completeTodo}
            notComplete={notCompletedTodo}
            deleteTodo={deleteTodo}
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
