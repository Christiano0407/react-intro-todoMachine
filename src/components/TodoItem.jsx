//**? ================ Component Item =============== */
import {
  FaRegCheckCircle,
  FaRegTimesCircle,
  FaTimes,
  FaExclamationTriangle,
} from "react-icons/fa";
//import { Data } from "../data/Data";
//console.log(Data);

export function TodoItem({ searchTodo, stateTodo, setStateTodo }) {
  const completeTodo = (text) => {
    const newTodo = [...stateTodo];
    const todoIndex = newTodo.findIndex((todo) => todo.text == text);
    newTodo[todoIndex].completed = true;
    setStateTodo(newTodo);
  };

  const notCompletedTodo = (text) => {
    const todoNew = [...stateTodo];
    const indexTodo = todoNew.findIndex((todo) => todo.text === text);
    todoNew[indexTodo].completed = false;
    setStateTodo(todoNew);
  };

  const deleteTodo = (text) => {
    const newTodo = [...stateTodo];
    const indexDelete = newTodo.findIndex((todo) => todo.text === text);
    //newTodo[indexDelete].completed = false;
    newTodo.splice(indexDelete, 1);
    setStateTodo(newTodo);
  };

  return (
    <>
      <ul className="w-full p-[1rem] flex flex-col ">
        {searchTodo.map((todo) => (
          <li
            key={todo.text}
            className="w-[80%] p-[10px] text-center font-bold text-2xl mx-auto my-5 border-solid border-[3px] border-black flex items-center justify-evenly shadow-sm rounded-[1rem] "
          >
            <button
              className={`${
                !!todo.completed && "btn-active"
              } w-[2.5rem] h-[2.5rem] rounded-[50%] bg-black  text-white flex items-center justify-center active:scale-90`}
              onClick={() => completeTodo(todo.text)}
            >
              <FaRegCheckCircle />
            </button>

            <p>{todo.text}</p>

            <button
              className={`${
                todo.completed === false && "btn-inactive"
              }  w-[2.5rem] h-[2.5rem] rounded-[50%] bg-black text-white flex items-center justify-center active:scale-90`}
              onClick={() => notCompletedTodo(todo.text)}
            >
              <FaExclamationTriangle />
            </button>

            <button
              className={`${
                todo.completed === false
              }  w-[2.5rem] h-[2.5rem] rounded-[50%] bg-black text-white flex items-center justify-center active:scale-90`}
              onClick={() => deleteTodo(todo.text)}
            >
              <FaTimes />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
/**
 * => todo.completed ? "color" :  && "btn-inactive"
 */
