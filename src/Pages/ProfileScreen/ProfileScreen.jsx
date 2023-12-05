import React from "react";
import "./ProfileScreen.css";
import Navbar from "../../Components/Navbar";
import Netflix_Avatar from "../../Assets/Images/Netflix_Avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../Firebase/Firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img src={Netflix_Avatar} alt="Netflix_avatar" />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans </h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
