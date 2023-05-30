//**? ================= Component Btn ==================== */
import { VscAdd } from "react-icons/vsc";

export function BtnCreateTodo(props) {
  return (
    <>
      <button
        className="w-[80%] p-[1.5rem] mx-auto my-0 bg-[#333] text-white flex items-center justify-center rounded-2xl active:scale-90"
        onClick={(e) => {
          e.preventDefault();
          console.log("Click On Btn");
          console.log(e.target);
        }}
      >
        <VscAdd />
      </button>
    </>
  );
}
