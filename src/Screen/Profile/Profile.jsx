import "./Profile.css";
import React, { useState } from "react";
import firebase from "firebase";
import { SignOut } from "../SignOut";

export function Profile() {
  const [nick, setNick] = useState("");
  const handleNickChange = (e) => setNick(e.target.value);

  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);

  const [lastname, setLastName] = useState("");
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const handleSetDataUser = async (e) => {
    const db = firebase.database();

    const id = firebase.auth().currentUser.uid;

    db.ref("profile").child(id).set({ nick, name, lastname });

    setNick("");
    setName("");
    setLastName("");
  };

  return (
    <div className="profile-form">
      <h3>My Profile</h3>
      <input
        type="text"
        placeholder="Nick..."
        value={nick}
        onChange={handleNickChange}
      />
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Last name..."
        value={lastname}
        onChange={handleLastNameChange}
      />
      <button onClick={handleSetDataUser}>Send form</button>
      <SignOut />
    </div>
  );
}
