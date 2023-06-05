//**? ================== Component TodoList ===================== */
import { TodoItem } from "../TodoItem/index";

export function TodoList({
  searchTodo,
  stateTodo,
  setStateTodo,
  completeTodo,
  notCompletedTodo,
  deleteTodo,
}) {
  return (
    <div className="w-full p-[1rem]">
      <TodoItem
        searchTodo={searchTodo}
        stateTodo={stateTodo}
        setStateTodo={setStateTodo}
        complete={completeTodo}
        notComplete={notCompletedTodo}
        deleteTodo={deleteTodo}
        //createNewTodo={createNewTodo}
      />
    </div>
  );
}
