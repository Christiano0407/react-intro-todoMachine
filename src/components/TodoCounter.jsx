//**? ================== Todo Counter ==================== */

export function TodoCounter({ completed, total }) {
  return (
    <div className="w-full p-[1rem mx-[auto] my-[2rem]]">
      <h1 className="font-bold text-black text-[2.4rem]">
        You have {completed} de {total}
      </h1>
    </div>
  );
}
