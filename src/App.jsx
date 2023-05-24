//** === ============= === ===== Component App ===== === ================ === */
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { BtnCreateTodo } from './components/BtnCreateTodo';
import './App.css';

function App() {
  return (
    <>
      <main className="w-full p-[10px]">
        <TodoCounter completed={5} total={10} />
        <TodoSearch />
        <TodoList />
        <BtnCreateTodo />
      </main>
    </>
  );
}

export default App;

/**
 * <React.Fragment></React.Fragment> === <></>
 * Element or Component Children into a Element or Component Father
 */
