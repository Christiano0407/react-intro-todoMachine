//**? ================= Component Btn ==================== */
import { VscAdd } from "react-icons/vsc";

export function BtnCreateTodo() {
  return (
    <>
      <button className="w-[5rem] h-[5rem] p-[10px] font-bold text-[20px] text-white bg-black mt-8 rounded-[50%] outline-none flex justify-center items-center sm:relative left-[50rem]">
        <VscAdd />
      </button>
    </>
  );
}
