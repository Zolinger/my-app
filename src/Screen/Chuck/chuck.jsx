import { useEffect } from "react";
import "./chuck.css";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getChuckActionWithThunk } from "../../Store/Chuck/actions";
import { chuckSelector } from "../../Store/Chuck/selectors";

export const Chuck = () => {
  const { loading, error, chuckUrl } = useSelector(chuckSelector);
  const dispatch = useDispatch();

  const handleGetChuck = () => {
    dispatch(getChuckActionWithThunk());
  };

  useEffect(() => {
    handleGetChuck();
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <div>
        <div>error</div>
        <button onClick={handleGetChuck}>Refresh page</button>
      </div>
    );
  }

  return <div className="jokes">{chuckUrl}</div>;
};
