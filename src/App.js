import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { auth } from "./Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Pages/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/ProfileScreen" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
