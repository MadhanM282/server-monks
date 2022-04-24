import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import ResponsiveAppBar from "../Navbar/Navbar";
import { clubError, clubLoding, updateClubList, updateClubListData } from "../../Redux/Home/clubHomeAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Chat from "../ClubChat/Chat";
import {
  updateClubListDataa,
  updateUserInfoData,
} from "../../Redux/suscribe/suscribeAction";
export const CardDetails = () => {

  const [UserData, SetUserData] = useState({});

  const [sub,SetSub] = useState(false);

  console.log("UserData", UserData);

  const { id } = useParams();

  const { Club } = useSelector((store) => store.Rtc);
  console.log("Club", Club);

  const { user } = useSelector((store) => store.auth);

  const firstName = Club.creator_id.firstName;

  const userId = localStorage.getItem("id");

  const clubId = Club._id;

  const dispatch = useDispatch();

  useEffect(() => {
    SetUserData(JSON.parse(localStorage.getItem("UserData")));
  }, []);

  const handeSub = () => {
    SetSub(true)
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
          borderRadius: 2
        }}
      >
        <Box sx={{ border: 0, width: "50%", borderRadius: 3 }}>
          <img style={{ width: "100%", borderRadius: 9 }} src={Club.image} />
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
          <h1 style={{marginTop:"10px"}}>{Club.club_title}</h1>
          <Typography
            sx={{ height: "auto", mt: 4 }}
            variant="h6"
            color="text.secondary"
          >
            {Club.description}
          </Typography>
          <Box sx={{ mt: 3 }}>
            {!sub?<Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" },() => ({ "&:hover": { color: "black" } }),]}onClick={() => {handeSub()}}>Join Club</Button>:<Button disabled >join</Button>}
            {sub ?<a target="_blank" href="https://chat-app-custom.herokuapp.com/"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" },() => ({ "&:hover": { color: "black" } }),]}>Join Chat</Button></a>:<Button disabled >join</Button>}
          </Box>
          <Box sx={{ mt: "40px" }}>
            <Typography variant="h6" >Creator-{firstName}</Typography>
          </Box>
        </Box>
      </Box>
      {/* <Chat /> */}
    </>
  );
};
