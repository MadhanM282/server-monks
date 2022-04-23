import { useState, useEffect } from "react";
import Button from "./Components/Button";
//import firebase from 'firebase/app';

//import {app,database} from "./Components/firebase.config"
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import Channel from "./Components/Channel";
import { useParams } from "react-router";

firebase.initializeApp({
  apiKey: "AIzaSyAUxTeVGIN_aoxl8opqd0gQ-N_9eRW_66Y",
  authDomain: "server-monk.firebaseapp.com",
  projectId: "server-monk",
  storageBucket: "server-monk.appspot.com",
  messagingSenderId: "144181511659",
  appId: "1:144181511659:web:05662f99570fecce2c05ae",
});
const auth = firebase.auth();
const db = firebase.firestore();
function WebRTC() {
  const { id } = useParams();
  console.log("id", id);
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initializing) {
        setInitializing(false);
      }
    });
    return unsubscribe;
  }, []);
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log("error:", error);
    }
  };
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log("error:", error.message);
    }
  };
  if (initializing) return "Loading ... ";

  return (
    <div>
      {user ? (
        <>
          <Button onClick={signOut}>sign Out</Button>
          <Channel user={user} db={db} />
        </>
      ) : (
        <Button onClick={signInWithGoogle}>sign in</Button>
      )}
    </div>
  );
}

export default WebRTC;
