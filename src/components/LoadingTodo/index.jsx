//**! ========================== === === Component Lazy Loading === === =====================================  */
//import ContentLoader from "react-content-loader";
import "./lazyLoading.css";
/* export function LoadingTodo(props) {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={350}
      viewBox="0 0 500 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="200" y="6" rx="4" ry="4" width="500" height="38" />
      <rect x="200" y="6" rx="4" ry="4" width="500" height="38" />
      <rect x="200" y="55" rx="4" ry="4" width="500" height="38" />
      <rect x="200" y="55" rx="4" ry="4" width="500" height="38" />
      <rect x="200" y="104" rx="4" ry="4" width="500" height="38" />
      <rect x="200" y="104" rx="4" ry="4" width="500" height="38" />
    </ContentLoader>
  );
} */

export const LoadingTodo = () => {
  return (
    <section className="w-[80%] bg-white border-[5px] border-solid border-[#e5e6e9] rounded-md p-3 my-0 mx-auto mb-3">
      <p className="font-bold text-[#333] text-2xl">Loading...</p>
      <div className="min-h-[500px] bg-[#f6f7f8] bg-gradient-[to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%] flex background">
        <div className="text"></div>
        <div className="mask thick"></div>
        <div className="text medium"></div>
        <div className="mask thin"></div>
        <div className="text small "></div>
        <div className="mask thick"></div>
      </div>
    </section>
  );
};
