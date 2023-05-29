//**? =================== Component Todo Search ================= */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export function TodoSearch() {
  const [state, setState] = useState("");

  console.log("Changes add" + state);

  return (
    <div className=" w-[90%] p-[1rem] flex items-center mx-auto my-2 border-solid border-2 border-black rounded-[5rem] font-semibold text-lg ">
      <input
        placeholder="Call List"
        className="p-[1rem] w-[90%] outline-none border-none"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      ></input>
      <a className="ml-2">
        <FaSearch />
      </a>
    </div>
  );
}
