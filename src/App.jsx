//** === ============= === ===== Component App ===== === ================ === */
import { TodoList } from './components/TodoList';
import './App.css';

function App() {
  return (
    <>
      <main className="w-full">
        <TodoList name="Carolina" />
      </main>
    </>
  );
}

export default App;
