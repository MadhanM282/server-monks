import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveAppBar from "../Navbar/Navbar";

export const MYCLUBS = () => {
  const { user } = useSelector((store) => store.auth);
  const [data, SetData] = useState([]);
  console.log("user", user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://server-monks-backend.herokuapp.com/clubs/${user.user._id}`)
      .then(({ data }) => {
        console.log("data", data);
        SetData(data);
      });
  }, []);
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ display: "flex" }}>
        {data.map((ele) => {
          return (
            <Card sx={{ maxWidth: "345px", m: "auto", mt: "150px" }}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" />

                  // <Avatar alt="Remy Sharp" src="" />
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title={ele.club_title}
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={ele.image}
                alt={ele.club_title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {ele.description}
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button>Subscribe</Button>
                <Box>Members-{ele.subcription_user_id.length}</Box>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
