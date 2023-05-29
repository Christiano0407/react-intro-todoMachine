//** === ============= === ===== Component App ===== === ================ === */
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { BtnCreateTodo } from "./components/BtnCreateTodo";
import { ImagePlus } from "./components/ImagePlus";
import "./App.css";

function App() {
  return (
    <>
      <main className="w-full h-screen p-[10px] grid gap-[2rem] sm:grid-cols-1 grid-flow-row md:grid-cols-2 ">
        <section className="w-full sm:auto-cols-max md:col-start-1 col-end-2 flex flex-col">
          <TodoCounter completed={5} total={10} />
          <TodoSearch />
          <TodoList />
          <BtnCreateTodo />
        </section>
        <section className="mob:hidden sm:hidden md:col-start-2 col-end-4">
          <ImagePlus />
        </section>
      </main>
    </>
  );
}

export default App;

/**
 * <React.Fragment></React.Fragment> === <></>
 * Element or Component Children into a Element or Component Father
 */
