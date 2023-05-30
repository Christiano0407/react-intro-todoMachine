//**? ================== Component TodoList ===================== */
import { TodoItem } from "./TodoItem";

export function TodoList({ searchTodo }) {
  return (
    <div className="w-full p-[1rem]">
      <TodoItem searchTodo={searchTodo} />
    </div>
  );
}
