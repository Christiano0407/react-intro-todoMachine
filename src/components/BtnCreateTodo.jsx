//**? ================= Component Btn ==================== */
import { VscAdd } from 'react-icons/vsc';

export function BtnCreateTodo() {
  return (
    <div>
      <span>Add Todo</span>
      <button className="p-[10px] font-medium text-[15px] text-white bg-black mt-8 rounded-lg outline-none">
        <VscAdd />
      </button>
    </div>
  );
}
