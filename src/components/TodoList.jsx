//**? ================== Component TodoList ===================== */

export function TodoList(props) {
  return (
    <ul className=" w-full flex flex-col p-4 ">
      <li>
        <span>List {props.name}</span>
      </li>
      <li>
        <span>List</span>
      </li>
      <li>
        <span>List</span>
      </li>
      <li>
        <span>List</span>
      </li>
    </ul>
  );
}
