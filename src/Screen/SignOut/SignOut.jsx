import firebase from "firebase";

export const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
};
