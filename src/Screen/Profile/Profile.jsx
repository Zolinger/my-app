import "./Profile.css";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";

export const Profile = () => {
  const { name, showName } = useSelector((state) => state);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch(toggleUserNameAction);
  }, [dispatch]);

  return (
    <div className="profile-form">
      <h3>My Profile</h3>
      <h4>Name: Alex</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};
