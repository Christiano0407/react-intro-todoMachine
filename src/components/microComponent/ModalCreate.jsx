//**! ================================ === Micro Component === ============================= */

export function ModalCreate() {
  return (
    <>
      <div className=" max-w-2xl w-full fixed z-50 top-[50%] left-[50%] flex flex-col blur-0  bg-slate-200 shadow-md rounded-[2rem] transform translate-x-[-50%] translate-y-[-50%] p-[2rem] mx-auto my-4 ">
        <h1 className="font-bold text-4xl text-[#333] p-[1rem] mx-auto my-4 ">
          Add New Modal
        </h1>
        <input
          placeholder="New Modal"
          className="p-[1rem] rounded-lg outline-none"
        />
        <div className=" w-full flex justify-evenly items-center p-[1rem] mx-auto my-5">
          <button className="py-[1rem] px-[3rem] bg-zinc-800 text-white rounded-xl border-none hover:bg-zinc-500  active:scale-90 ">
            New
          </button>
          <button className="p-[1rem] px-[3rem]  bg-red-900 text-white  rounded-xl border-none hover:bg-red-400 active:scale-90 ">
            Delete
          </button>
        </div>
      </div>
      {/*  <div className=" w-screen h-screen fixed z-0  bg-gray-300 blur-md "></div> */}
    </>
  );
}

/**
 * Modal
 * .overlay {
 * background-color: rgba(0, 0, 0, 0.5); 
 *  position: fixed;
 * width: 100%;
 * height: 100%;
 * 
 * .modalContainer {
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
 */
