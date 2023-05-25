//**? ================ Component Item =============== */
import { Data } from "../data/Data";
console.log(Data);

export function TodoItem() {
  return (
    <>
      <ul className="w-full p-[1rem] flex flex-col ">
        {Data.map((todo) => (
          <li
            key={todo.text}
            className="w-[80%] p-[10px] text-center font-bold text-2xl mx-auto my-5 border-solid border-2 border-black "
          >
            <p>{todo.text}</p>
            <span>{todo.completed}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
