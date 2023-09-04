import { FC } from "react";
import { getAuth, signOut } from "firebase/auth";

export const Logout: FC = () => {
  const auth = getAuth();
  const onLogoutClick = () => {
    signOut(auth);
  };
  return (
<<<<<<< HEAD
    <div className="contentFlexVertical">
      <button className="coolButton redButton " onClick={onLogoutClick}>
        Logout
      </button>
    </div>
=======
    <button className="coolButton orangeButton" onClick={onLogoutClick}>
      Logout
    </button>
>>>>>>> master
  );
};
