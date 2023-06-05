//**? ===================== Component Images Plus ============================= */
//import imgPlus from "/src/assets/profile1.png";
import backImg from "/src/assets/backPlus.jpg";

export function ImagePlus() {
  return (
    <>
      <div className="w-full h-full  p-[1rem]">
        <figure className="w-full h-full bg-cover object-cover">
          <img src={backImg} alt="image-plus" />
        </figure>
      </div>
    </>
  );
}
