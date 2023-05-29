//**? =================== Component Todo Search ================= */
import { FaSearch } from "react-icons/fa";

export function TodoSearch() {
  return (
    <div className=" w-[90%] p-[1rem] flex items-center mx-auto my-2 border-solid border-2 border-black rounded-[5rem] font-semibold text-lg ">
      <input
        placeholder="Call List"
        className="p-[1rem] w-[90%] outline-none border-none"
      ></input>
      <a className="ml-2">
        <FaSearch />
      </a>
    </div>
  );
}
