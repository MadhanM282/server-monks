import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import ResponsiveAppBar from "../Navbar/Navbar";
function Profile(props) {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  const name = localStorage.getItem("user");
  const s = useSelector((store) => store.auth);
  // console.log("store", s);
  const user = JSON.parse(localStorage.getItem("UserData"));
  // console.log("user:", user);
  return (
    <div>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <br />
      <div className="main-card">
        <div
          style={{
            marginTop: "30px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          }}
          className="card-container"
        >
          <header>
            <img
              style={{
                margin: "auto",
                width: "100px",
                height: "100px",
                border: "solid white 4px",
                borderRadius: "50%",
                marginTop: "75px",
              }}
              // src={user.user_img}
              ref={uploadedImage}
              alt=""
            />
          </header>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              ref={imageUploader}
              placeholder="Upload"
              style={{
                display: "none",
              }}
            />
            <div
              style={{
                height: "30px",
                width: "130px",
                padding: "5px",
                border: "1px dashed black",
                backgroundColor: "#cbc5c5a8",
              }}
              onClick={() => imageUploader.current.click()}
            >
              Upload Profile
            </div>
          </div>
          <h1
            style={{ color: "blue", marginTop: "10px" }}
            className="bold-text"
          >
            {name} <span className="normal-text"></span>
          </h1>
          <h2 className="normal-text">{user.email}</h2>
          <div className="social-container">
            <div className="followers">
              {/* <h1 className="bold-text">2</h1>
              <h2 className="smaller-text">Followers</h2> */}
            </div>
            {/* <div className="likes">
              <h1 className="bold-text">{user.suscribed_ids.length}</h1>
              <h4 >Subscribed</h4>
            </div> */}
            <div className="photos">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
