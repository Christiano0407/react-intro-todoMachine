//**? ================== Component TodoList ===================== */
import { TodoItem } from "./TodoItem";

export function TodoList({ searchTodo, stateTodo, setStateTodo }) {
  return (
    <div className="w-full p-[1rem]">
      <TodoItem
        searchTodo={searchTodo}
        stateTodo={stateTodo}
        setStateTodo={setStateTodo}
      />
    </div>
  );
}
