import { useState, useEffect } from "react";
import Button from "./Components/Button";
//import firebase from 'firebase/app';

//import {app,database} from "./Components/firebase.config"
import firebase from "firebase/compat/app";

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Channel from './Components/Channel';
import { useParams } from 'react-router';
import ResponsiveAppBar from '../Navbar/Navbar';
import { Box } from '@mui/material';

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
        <Box>
            <ResponsiveAppBar />
            <Box sx={{ mt: 15, width: "70%", border: 0, ml: 5, p: 2, boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
                {user ? (
                    <>
                        <Button onClick={signOut}>sign Out</Button>
                        <Channel user={user} db={db} />
                    </>
                ) : (<Button onClick={signInWithGoogle}>sign  in</Button>)}
            </Box>
        </Box>
    )
}

export default WebRTC;
