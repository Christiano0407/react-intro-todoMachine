//**? ================== Component TodoList ===================== */
import { TodoItem } from "./TodoItem";

export function TodoList({
  searchTodo,
  stateTodo,
  setStateTodo,
  saveTodo,
  createNewTodo,
}) {
  return (
    <div className="w-full p-[1rem]">
      <TodoItem
        searchTodo={searchTodo}
        stateTodo={stateTodo}
        setStateTodo={setStateTodo}
        saveTodo={saveTodo}
        //createNewTodo={createNewTodo}
      />
    </div>
  );
}
