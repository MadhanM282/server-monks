import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import Message from "./Message";
const Channel = ({ user = null, db = null }) => {
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { uid, displayName, photoURL } = user;
  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("messages")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          setMessage(data);
          // console.log("data", data);
        });
      return unsubscribe;
    }
  }, [db]);
  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (db) {
      db.collection("messages").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoURL,
      });
    }
  };
  return (
    <>
      <ul>
        {message.map((message) => (
          <li key={message.id}>
            <Message {...message} />
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <input
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="type msg"
        />

        <button type="submit" disabled={!newMessage}>
          Send
        </button>
      </form>
    </>
  );
};

export default Channel;
