//**! ========================== === === Component Lazy Loading === === =====================================  */
import ContentLoader from "react-content-loader";

export function LoadingTodo(props) {
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
}
