import React from "react";
import { formatRelative } from "date-fns";

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  return (
    <div>
      <div
        style={{
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {photoURL ? (
          <img
            src={photoURL}
            style={{ height: "30px", borderRadius: "50%" }}
            alt="Avatar"
          />
        ) : null}
        {displayName ? <p style={{ fontSize: "17px" }}>{displayName}</p> : null}
        {createdAt?.seconds ? (
          <p style={{ fontSize: "17px" }}>
            {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
          </p>
        ) : null}
        <br />
      </div>
      <p
        style={{
          color: "white",
          fontSize: "17px",
          marginLeft: "50px",
          marginTop: "-10px",
        }}
      >
        {text}
      </p>
      <hr />
    </div>
  );
};

export default Message;
