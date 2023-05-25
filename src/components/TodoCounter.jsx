//**? ================== Todo Counter ==================== */

export function TodoCounter({ completed, total }) {
  return (
    <div className="max-w-max p-[10px] mx-auto mb-8]">
      <h1 className="font-bold text-black text-[3rem]">
        You have {completed} de {total}
      </h1>
    </div>
  );
}
