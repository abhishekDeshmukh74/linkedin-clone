
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from 'firebase/auth';

import "./App.css";
import { login, logout, selectUser } from "./userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
  const userState = useSelector(selectUser);
  const { user } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    })

  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
