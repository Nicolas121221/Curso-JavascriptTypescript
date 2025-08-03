import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./styled.css";

export const Posts = () => {
  const { id } = useParams();
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post: {`Param: ${id}`} {`QS: ${qs}`}
      </h1>

      <Outlet />
    </div> 
  );
};
