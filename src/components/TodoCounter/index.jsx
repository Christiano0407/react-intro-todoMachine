//**? ================== Todo Counter ==================== */

export function TodoCounter({ completed, total }) {
  return (
    <div className="max-w-max p-[10px] mx-auto mb-8] flex flex-col items-center">
      <h1 className="font-bold text-black text-[4rem] md:text-[3rem] mb-4 uppercase">
        Todo Task List
      </h1>
      <h2 className="font-bold text-zinc-500 text-[2rem]">
        You have {completed} de {total}
      </h2>
    </div>
  );
}
