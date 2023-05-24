//**? ================ Component Item =============== */
import { Data } from '../data/Data';
console.log(Data);

export function TodoItem() {
  return (
    <>
      <ul className="w-full p-[1rem] flex flex-col ">
        {Data.map((todo) => (
          <li key={todo.text}>
            <p>{todo.text}</p>
            <span>{todo.completed}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
