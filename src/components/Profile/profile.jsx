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
  console.log("store", s);
  return (
    <div>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <br />
      <div className="main-card">
        <div className="card-container">
          <header>
            <img
              style={{
                margin: "auto",
                width: "100px",
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
                width: "100px",
                border: "1px dashed black",
              }}
              onClick={() => imageUploader.current.click()}
            >
              Upload Profile
            </div>
          </div>
          <h1 className="bold-text">
            {name} <span className="normal-text">23</span>
          </h1>
          <h2 className="normal-text">Mangod</h2>
          <div className="social-container">
            <div className="followers">
              <h1 className="bold-text">2</h1>
              <h2 className="smaller-text">Followers</h2>
            </div>
            <div className="likes">
              <h1 className="bold-text">2</h1>
              <h2 className="smaller-text">Likes</h2>
            </div>
            <div className="photos">
              <h1 className="bold-text">2</h1>
              <h2 className="smaller-text">Photos</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Profile };
