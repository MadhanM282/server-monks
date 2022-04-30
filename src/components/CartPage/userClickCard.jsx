import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import ResponsiveAppBar from "../Navbar/Navbar";
import {
  clubError,
  clubLoding,
  updateClubList,
  updateClubListData,
  GetClubSingle,
} from "../../Redux/Home/clubHomeAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserInfoData } from "../../Redux/auth/authAction";

export const CardDetails = () => {
  const [UserData, SetUserData] = useState({});

  const { id } = useParams();

  const dispatch = useDispatch();

  const [sub, SetSub] = useState(false);

  const { user } = useSelector((store) => store.auth);
  console.log("userr", user);

  const { singleClub } = useSelector((store) => store.club);
  console.log("singleClub", singleClub);

  useEffect(() => {
    SetUserData(JSON.parse(localStorage.getItem("UserData")));
    dispatch(GetClubSingle(id));
  }, []);

  const handleSuscribe = () => {
    dispatch(
      updateUserInfoData(
        { ...user, suscribed_ids: [...user.suscribed_ids, id] },
        user._id
      )
    );
    dispatch(
      updateClubListData(
        {
          ...singleClub,
          subcription_user_id: [...singleClub.subcription_user_id, user._id],
        },
        id,
        toast
      )
    );
  };

  const handeSub = () => {
    SetSub(true);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ mt: 15 }}>
        <h1>Details of Club</h1>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "70%",
          border: 0,
          ml: 25,
          mt: 4,
          p: 4,
          justifyContent: "center",
          gap: "100px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: 2,
        }}
      >
        <Box sx={{ border: 0, width: "50%", borderRadius: 3 }}>
          <img
            style={{ width: "100%", borderRadius: 9 }}
            src={singleClub.image}
          />
        </Box>
        <Box
          sx={{
            border: 0,
            width: "50%",
            borderRadius: 3,
            pl: 4,
            boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          }}
        >
          <h2 style={{ marginTop: "10px" }}>{singleClub.club_title}</h2>
          <Typography
            sx={{ height: "auto", mt: 4 }}
            variant="h6"
            color="text.secondary"
          >
            {singleClub.description}
          </Typography>

          <Box sx={{ mt: 3 }}>
            {!sub ? (
              <Button
                sx={[
                  { bgcolor: "#000000", m: 1, color: "#f2f2ff" },
                  () => ({ "&:hover": { color: "black" } }),
                ]}
                onClick={() => {
                  handleSuscribe();
                  handeSub();
                }}
              >
                Join Club
              </Button>
            ) : (
              <Button disabled>join</Button>
            )}
            {sub ? (
              <a target="_blank" href="https://chat-app-custom.herokuapp.com/">
                <Button
                  sx={[
                    { bgcolor: "#000000", m: 1, color: "#f2f2ff" },
                    () => ({ "&:hover": { color: "black" } }),
                  ]}
                >
                  Join Chat
                </Button>
              </a>
            ) : (
              <Button disabled>join</Button>
            )}
          </Box>
          <Box sx={{ mt: "40px" }}>
            <Typography variant="h6">Creator - {singleClub.creator_id.firstName}</Typography>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};
