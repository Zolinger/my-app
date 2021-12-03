import "./Profile.css";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserNameAction } from "../../Store/Profile/actions";

export const Profile = () => {
  const [dummy, setDummy] = useState();
  const { name, showName } = useSelector((state) => state);
  const dispatch = useDispatch();
  const setShowName = useCallback(() => {
    dispatch(toggleUserNameAction);
    setDummy();
  }, [dispatch]);

  return (
    <div className="profile-form">
      <h3>My Profile</h3>
      <h4>Name: T-800</h4>
      <h4>Sex: Cyborg</h4>
      <h4>Target: John Connor</h4>
      <h4>Profile</h4>
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
