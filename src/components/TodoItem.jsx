//**? ================ Component Item =============== */
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { Data } from "../data/Data";
console.log(Data);

export function TodoItem() {
  return (
    <>
      <ul className="w-full p-[1rem] flex flex-col ">
        {Data.map((todo) => (
          <li
            key={todo.text}
            className="w-[80%] p-[10px] text-center font-bold text-2xl mx-auto my-5 border-solid border-2 border-black flex items-center justify-evenly "
          >
            <button
              className={`${todo.completed} w-[2.5rem] h-[2.5rem] rounded-[50%] bg-black  text-white flex items-center justify-center`}
            >
              <FaRegCheckCircle />
            </button>
            <p>{todo.text}</p>
            <button className="w-[2.5rem] h-[2.5rem] rounded-[50%] bg-black text-white flex items-center justify-center ">
              <FaRegTimesCircle />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
